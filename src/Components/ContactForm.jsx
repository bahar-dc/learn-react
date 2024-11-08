import React, { useState } from 'react';

export const ContactForm = () => {
  // Set initial state for the form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle changes to the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/mdkogbqn', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('There was an error submitting the form.');
    }
  };

  return (
    <form name="contact" onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/mdkogbqn">
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email (e.g., name@example.com)"
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Enter your message"
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Send Message" />
      </div>
      {/* Hidden fields to tell Formspree which form is being submitted */}
      <input type="hidden" name="_next" value="https://your-site-url.com/thank-you" />
      <input type="hidden" name="_subject" value="New contact form submission" />
    </form>
  );
};
