import sgMail from "@sendgrid/mail";

export const sendEmail = async (msg) => {
  const { to } = msg;
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error("Missing SENDGRID_API_KEY");
  }

  sgMail.setApiKey(apiKey);

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("SendGrid error", error?.response?.body || error);
    throw error;
  }
};

export default sendEmail;
