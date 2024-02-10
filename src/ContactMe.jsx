import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

export const ContactMe = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_4693uah", "contact_form", form.current, {
				publicKey: publicKey,
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="user_name" className="text-black" />
			<label>Email</label>
			<input type="email" name="user_email" className="text-black" />
			<label>Message</label>
			<textarea name="message" className="text-black" />
			<input type="submit" value="Send" />
		</form>
	);
};

export default ContactMe;
