import { sendEmail } from "../../lib/sendgrid";

export default async function contact(req, res) {
  const data = req.body;

  if (!data.name || !data.email || !data.phone || !data.office || !data.area) {
    return res.status(400).json({ error: "Please fill out all fields" });
  }

  const verificationResult = await verifyRecaptcha(req.headers.token);
  if (!verificationResult) {
    return res.status(400).json({ error: "reCAPTCHA verification failed" });
  }
  const lori = process.env.EMAIL;
  const danny = process.env.EMAIL;
  const admin = process.env.ADMIN_EMAIL;

  const msg = {
    to: [lori, danny], // Change to your recipient
    from: admin, // Change to your verified sender
    subject: `Message From ${data.name}`,
    text: `Sent from: ${data.name}`,
    html: `<p>Sent from: ${data.name},${data.email}</p>
              <p>Phone: ${data.phone}</p>
              <p>Email: ${data.email}</p>
              <p>Name: ${data.name}</p>
              <p>Office Preference: ${data.office}</p>
              <p>Area of Interest: ${data.area}</p>
              `,
  };

  try {
    await sendEmail(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function verifyRecaptcha(token) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: "POST",
    }
  );

  const recaptchaResponse = await response.json();
  return recaptchaResponse.success;
}
