import React, { useState } from 'react';
import axios from "axios";

export const ContactForm = () => {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await axios.post("http://localhost:5001/api/contact", formData);
          alert("Form submitted successfully!");
      } catch (err) {
          alert("Error submitting form.");
      }
  };

  return (
    <form name="contact" onSubmit={handleSubmit} method="POST">
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name} onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email} onChange={handleChange}
          required
          placeholder="Your email (e.g., name@example.com)"
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message} onChange={handleChange}
          required
          placeholder="Enter your message"
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Send Message" />
      </div>
      <input type="hidden" name="_next" value="https://progressolearning.ca/#/thank-you" />
      <input type="hidden" name="_subject" value="New contact form submission" />
    </form>
  );
};
