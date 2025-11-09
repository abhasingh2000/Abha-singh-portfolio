"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fvv94md",   // from EmailJS
        "template_qik2d39",  // from EmailJS
        form.current,
        "HbrGSqiwU_tugosu-"    // from EmailJS
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="contact-input"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="contact-input"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="contact-textarea"
      />
      <button type="submit" className="contact-submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
