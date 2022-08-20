// 		Project by: 	Makenzie Roberts
//		Date Written: 	August 15-19, 2022

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

/* ******************* Section 4 (Contact) - Contact Form ******************* */

//		!REFERENCE: https://www.emailjs.com/docs/examples/reactjs/

//		* This component uses emailjs (https://www.emailjs.com/docs/sdk/installation/)
//		  to collect user input, process and send to my e-mail address. (Not just for show, it actually works)

export const Contact = () => {
	const form = useRef();
	const [isSent, setSent] = useState("false");

	const sendEmail = (e) => {
		e.preventDefault();
		//		When sendEmail is called, isSent is toggled. Depending on if isSent is true or false,
		//		it will either show the contact form or the message "sent!"
		setSent(!isSent);
		emailjs
			.sendForm(
				"service_eqkdgho",
				"template_242t4ft",
				form.current,
				"BGj8jzHQR1zb5SnLe"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			{/* Depending on if isSent is true or false, it will show/remove the contact form */}
			<div className={isSent ? "contact" : "contact-invisible"}>
				<form ref={form} onSubmit={sendEmail}>
					<label>NAME</label>
					<input type="text" name="from_name" />
					<label>EMAIL</label>
					<input type="email" name="from_email" />
					<label>MESSAGE</label>
					<textarea name="message" />
					<button type="submit" value="Send">
						SUBMIT
					</button>
				</form>
			</div>
			{/* Depending on if isSent is true or false, it will either remove/show the message "sent!" */}
			<div className={isSent ? "sent-invisible" : "sent"}>Sent!</div>
		</>
	);
};

export default Contact;
