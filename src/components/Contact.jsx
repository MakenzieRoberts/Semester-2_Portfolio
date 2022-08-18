import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export const Contact = () => {
	const form = useRef();
	const [isActive, setActive] = useState("false");

	const sendEmail = (e) => {
		e.preventDefault();
		setActive(!isActive);
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
			<div className={isActive ? "contact" : "contact-invisible"}>
				<form ref={form} onSubmit={sendEmail}>
					<label>Name</label>
					<input type="text" name="from_name" />
					<label>Email</label>
					<input type="email" name="from_email" />
					<label>Message</label>
					<textarea name="message" />
					<button type="submit" value="Send">
						Submit
					</button>
				</form>
			</div>
			<div className={isActive ? "sent-invisible" : "sent"}>Sent!</div>
		</>
	);
};

export default Contact;
