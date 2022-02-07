import React from "react";
import "./style.css";
const Contact = () => {
	return (
		<React.Fragment>
			<h3 style={{ textAlign: "center" }}>Get In Touch</h3>

			<div id="contact-form">
				<label htmlFor="">Name</label>
				<input type="text" className="input-field" name="name" />

				<label htmlFor="">Subject</label>
				<input type="text" className="input-field" name="subject" />

				<label htmlFor="">Email</label>
				<input type="email" className="input-field" name="email" />

				<label htmlFor="">Message</label>
				<textarea name="message" className="input-field"></textarea>

				<input id="submit-btn" type="submit" value="Send" />
			</div>
		</React.Fragment>
	);
};

export default Contact;
