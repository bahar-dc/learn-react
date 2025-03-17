import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// export const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_5rfgvvb', 'template_facpitm', form.current, {
//         publicKey: 'PmnGQS0cZ8bZATe2u',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };


//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <form ref={form} onSubmit={sendEmail}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" name="user_name" />  
//         </div>
//         <div className="form-group">
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         </div>
//         <div className="form-group">
//           <label>Message</label>
//           <textarea name="message" />
//         </div>
//         <div className="form-group">
//         <input type="submit" value="Send Message" />
//         </div>
//       </form>
//     </div>
//   );
// };


export const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_5rfgvvb",
        "template_facpitm",
        event.target,
        "PmnGQS0cZ8bZATe2u"
      )
      .then(
        (response) => {
          setMessage("Message sent successfully!");
          setMessageType("success");
          event.target.reset(); // Clear form after success
        },
        (error) => {
          setMessage("Failed to send message. Please try again.");
          setMessageType("error");
        }
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>

      {message && (
        <p style={{ 
          color: messageType === "success" ? "green" : "red", 
          marginTop: "10px"
        }}>
          {message}
        </p>
      )}
    </div>
  );
};

