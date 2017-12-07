const { SMTP_URL } = process.env;
const nodemailer  = require('nodemailer');

const defaultEmailData = { from: 'zhaotest0616@gmail.com'};
//const SendEmail = (emailData, smtpUrl = SMTP_URL)
const SendEmail = (emailData) => {
    console.log('try to send email for reset');
    const completeEmailData = Object.assign(defaultEmailData, emailData);
    const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	secure: false,
	auth: {
        user: 'ot6bav7zjzwy2spt@ethereal.email',
        pass: 'PuXxjBNsJkXzz7unua'
	}
    });
//    const transporter = nodemailer.createTransport(SMTP_URL);
//    return transporter
//	.sendMail(completeEmailData)
//	.then(info => console.log(`Message sent : ${info.response}`))
    ///	.catch(err => console.log(`Problem sending email : ${err}`));
//    console.log(completeEmailData);
    transporter.sendMail(completeEmailData, (error, info) => {
        if (error) {
	    console.log('fail to send');
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

}


module.exports = SendEmail;
