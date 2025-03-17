import React, {  useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5rfgvvb', 'template_facpitm', form.current, {
        publicKey: 'PmnGQS0cZ8bZATe2u',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div>
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" />  
        </div>
        <div className="form-group">
        <label>Email</label>
        <input type="email" name="user_email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" />
        </div>
        <div className="form-group">
        <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
};

