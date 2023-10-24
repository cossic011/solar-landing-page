const nodemailer = require("nodemailer");

export const sendEmail = async (mail) => {
  const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    logger: true,
    debug: true,
    auth: {
      user: "tofipconsult@gmail.com",
      pass: "nqth wkzx kxcw asnx",
    },
  });

  let sendingEmail = await contactEmail.sendMail(mail);

  return sendingEmail;
};
