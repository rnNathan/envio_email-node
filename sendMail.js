const nodamailer = require ("nodemailer");
require ("dotenv").config();

const transporter = createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSAWORD,
    },

});

//config
const mailOptions = {
    from:  {
        name: 'Teste Nathan',
        address: process.env.EMAIL,
    },
    to: ["nathanping73@gmail.com"],
    subject: "Send email from GMAIL SMTP", //assunto do email
    text: "send email from GMAIL SMTP", //corpo do email com texto
    html: "<b>Hello world<b>" //corpo de email com HTML
};

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('[email has been sent]');
    } catch (error) {
        console.log(error);
        
    }
};

sendMail(transporter, mailOptions);
