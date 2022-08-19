import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

/* ************************* Section 4 Contact Form ************************* */

export const Contact = () => {
	const form = useRef();
	const [isSent, setSent] = useState("false");

	const sendEmail = (e) => {
		e.preventDefault();
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
			<div className={isSent ? "sent-invisible" : "sent"}>Sent!</div>
		</>
	);
};

export default Contact;
