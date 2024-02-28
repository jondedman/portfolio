import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

export const ContactMe = () => {
	// const handleClick = (event) => {
	// 	event.stopPropagation();
	// 	// event.preventDefault();
	// };
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
					form.current.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<div>
			<form ref={form} onSubmit={sendEmail} className="my-4 h-2/3  ">
				<div className=" sm:text-sm lg:flex sm:justify-start sm:m-2">
					<label className="m-1">Name:</label>
					<input
						type="text"
						name="user_name"
						className="text-black m-2 rounded-lg"
					/>
					<label className="m-1">Email:</label>
					<input
						type="email"
						name="user_email"
						className="text-black m-2 rounded-lg"
					/>
				</div>
				<div className="flex justify-center items-center h-1/2">
					{/* <label className="m-1">Message:</label> */}
					<textarea
						name="message"
						className="text-black m-2 rounded-lg w-full h-full"
					/>
				</div>
				<button className="border border-1 p-2 text-bold text-sm rounded-lg md:mt-2 transition duration-500 ease-in-out transform hover:scale-110 hover:bg-blue-300 hover:text-white hover:font-bold hover:underline hover:active:bg-blue-500 hover:active:text-white hover:active:font-bold hover:active:underline">
					<input type="submit" value="Send" />
				</button>
			</form>
		</div>
	);
};

export default ContactMe;
