export default async function contact(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.office ||
      !data.area
    ) {
      return res.status(400).json({ error: "Please fill out all fields" });
    }

    const token = req.headers.token;
    await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
      }
    ).then((response) => {
      if (response.success !== 200) {
        return res.status(400);
      }
    });

    let nodemailer = require("nodemailer");
    const email = process.env.EMAIL;
    const email1 = process.env.EMAIL1;
    const pass = process.env.PASSWORD;
    const pass1 = process.env.PASSWORD1;
    let transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: email1,
        pass: pass1,
      },
    });

    try {
      await transporter.sendMail({
        from: email1,
        to: email1,
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
      return res.status(200).json({ status: "success" });
    } catch {
      return res.status(500).json({ status: "error in nodemailer" });
    }
  }
  return res.status(400).json({ error: "Something went wrong" });
}
