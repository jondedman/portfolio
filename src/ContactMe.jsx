import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

export const ContactMe = () => {
	const form = useRef();
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_4693uah", "contact_form", form.current, {
				publicKey: publicKey,
			})
			.then(
				() => {
					console.log("SUCCESS!");
					setMessage("Message sent successfully!");
					form.current.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
					setMessage("Message not sent. Please try again.");
				}
			);
	};

	return (
		<div>
			{message && (
				<div className="alert p-2 text-center text-lg font-bold animate-pulse">
					{message}
				</div>
			)}
			<form ref={form} onSubmit={sendEmail} className="my-4 h-2/3 lg:w-full ">
				<div className=" lg:text-md lg:flex lg:justify-start">
					<label className="m-1">Name:</label>
					<input
						type="text"
						name="user_name"
						className="text-shirtBlue m-2 rounded-lg lg:w-1/2 p-2"
					/>
					<label className="m-1">Email:</label>
					<input
						type="email"
						name="user_email"
						className="text-shirtBlue m-2 rounded-lg p-2"
					/>
				</div>
				<div className="flex justify-center items-center h-1/2 lg:h-full">
					{/* <label className="m-1">Message:</label> */}
					<textarea
						name="message"
						className="text-shirtBlue m-2 rounded-lg w-full h-full lg:h-3/4 p-2"
					/>
				</div>
				<button className="border border-1 p-2 text-bold text-sm rounded-lg md:mt-4 transition duration-500 ease-in-out transform hover:scale-110 hover:bg-skyBlue hover:text-shirtBlue hover:font-bold hover:underline hover:active:bg-blue-500 hover:active:text-skyBlue hover:active:font-bold">
					<input type="submit" value="Send" />
				</button>
			</form>
		</div>
	);
};

export default ContactMe;
