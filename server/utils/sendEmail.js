const nodemailer = require('nodemailer');

const sendEmail = (options) => {
	const transporter = nodemailer.createTransport({
		pool: true,
		host: 'smtp.gmail.com',
		post: 465,
		secure: true,
		service: process.env.EMAIL_SERVICE,
		auth: {
			user: process.env.EMAIL_USERNAME,
			password: process.env.EMAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: options.to,
		subject: options.subject,
		html: options.text,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log(err);
		} else {
			console.log(info);
		}
	});

	transporter.verify((error, success) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Server is ready to take our messages');
		}
	});
};

module.exports = sendEmail;
