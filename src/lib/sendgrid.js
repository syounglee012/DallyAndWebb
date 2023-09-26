import sgMail from "@sendgrid/mail";

export const sendEmail = async (msg) => {
  const { to } = msg;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error, error.response.body);
  }
};

export default sendEmail;
