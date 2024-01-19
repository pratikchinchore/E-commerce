const nodeMailer = require("nodemailer");

const sendEmail = async (option) => {

    const transportar = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            password: process.env.SMTP_PASSWORD,
        },
    })
    console.log(option.email);
    console.log(option.message);
    // console.log(option.subject);

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: option.email,
        subject: option.subject,
        text: option.message
    };

    await transportar.sendMail(mailOptions);

};

module.exports = sendEmail;