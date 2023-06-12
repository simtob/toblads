import "./FormStyles.css";
import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_850ilvw', 'template_50e91gq', 
      form.current, 'JrUhyj7wirr7qNe-K')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Form;