import { sendEmail } from "../../lib/sendgrid";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRateLimitStore = new Map();

export default async function contact(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body || {};
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
  }

  // Honeypot field must stay empty.
  if (data.website) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const parsed = validateContactPayload(data);
  if (!parsed.isValid) {
    return res.status(400).json({ error: parsed.error });
  }

  const token = req.headers.token;
  const verificationResult = await verifyRecaptcha(token, ip);

  if (!verificationResult) {
    return res.status(400).json({ error: "Security verification failed" });
  }

  const lori = process.env.EMAIL;
  const admin = process.env.ADMIN_EMAIL;
  if (!lori || !admin) {
    return res.status(500).json({ message: "Email service unavailable" });
  }

  const msg = {
    to: lori, // Active recipient
    from: admin, // Change to your verified sender
    subject: `Message From ${parsed.name}`,
    text: `Sent from: ${parsed.name}`,
    html: `<p>Sent from: ${escapeHtml(parsed.name)}, ${escapeHtml(
      parsed.email
    )}</p>
              <p>Phone: ${escapeHtml(parsed.phone)}</p>
              <p>Email: ${escapeHtml(parsed.email)}</p>
              <p>Name: ${escapeHtml(parsed.name)}</p>
              <p>Area of Interest: ${escapeHtml(parsed.area)}</p>
              `,
  };

  try {
    await sendEmail(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact API error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.length) {
    return forwardedFor.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipRateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count += 1;
  return false;
}

function validateContactPayload(payload) {
  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim().toLowerCase();
  const phone = String(payload.phone || "").trim();
  const area = String(payload.area || "").trim();

  if (!name || !email || !phone || !area) {
    return { isValid: false, error: "Please fill out all fields" };
  }

  if (name.length > 100 || email.length > 254 || phone.length > 25 || area.length > 100) {
    return { isValid: false, error: "Please enter valid information" };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneDigits = phone.replace(/\D/g, "");
  const validPhone =
    phoneDigits.length === 10 ||
    (phoneDigits.length === 11 && phoneDigits.startsWith("1"));
  if (!emailPattern.test(email) || !validPhone) {
    return { isValid: false, error: "Please enter valid information" };
  }

  return {
    isValid: true,
    name,
    email,
    phone,
    area,
  };
}

function escapeHtml(input) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyRecaptcha(token, remoteIp) {
  if (!token) return false;
  const secretKey =
    process.env.GOOGLE_RECAPTCHA_SECRET_KEY ||
    process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY;
  if (!secretKey) return false;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}&remoteip=${remoteIp}`,
    {
      method: "POST",
    }
  );

  const recaptchaResponse = await response.json();
  if (!recaptchaResponse.success) return false;

  // reCAPTCHA v3 checks when score/action exist.
  if (
    typeof recaptchaResponse.score === "number" &&
    recaptchaResponse.score < 0.5
  ) {
    return false;
  }
  if (
    recaptchaResponse.action &&
    recaptchaResponse.action !== "handleSubmit"
  ) {
    return false;
  }
  return true;
}
