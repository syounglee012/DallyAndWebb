import nodemailer from "nodemailer";

export default async function contact(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body;

  if (!data.name || !data.email || !data.phone || !data.office || !data.area) {
    return res.status(400).json({ error: "Please fill out all fields" });
  }

  const verificationResult = await verifyRecaptcha(req.headers.token);
  if (!verificationResult) {
    return res.status(400).json({ error: "reCAPTCHA verification failed" });
  }

  try {
    await sendEmail(data);
    return res.status(200).json({ status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
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

async function sendEmail(data) {
  const email = process.env.EMAIL;
  const email1 = process.env.EMAIL1;
  const pass = process.env.PASSWORD;
  const pass1 = process.env.PASSWORD1;

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "administrator@texfamilylawyer.com",
      pass: "LarryLawyer340",
    },
  });

  await transporter.sendMail({
    from: "administrator@texfamilylawyer.com",
    to: "administrator@texfamilylawyer.com",
    subject: `Message From ${data.name}`,
    text: `Sent from: ${data.name},${data.email}`,
    html: `<p>Sent from: ${data.name},${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Email: ${data.email}</p>
            <p>Name: ${data.name}</p>
            <p>Office Preference: ${data.office}</p>
            <p>Area of Interest: ${data.area}</p>
            `,
  });
}
