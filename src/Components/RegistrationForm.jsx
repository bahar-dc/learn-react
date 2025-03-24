import React, { useState } from "react";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    program: "",
    courseType: "",
    classPackage: "",
    scheduleDays: [],
    preferredTime: "",
    paymentOption: "",
    discountCode: "",
    goals: "",
    referralSource: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...(formData[name] || []), value]
          : formData[name].filter((day) => day !== value),
      }));
    } else if (name === "agreement") {
      setFormData((prev) => ({ ...prev, agreement: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://progresso-backend.vercel.app/api/enroll",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      console.log("API Response:", result);

      if (response.ok) {
        alert("Enrollment Successful!");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Register Now</h2>
        <h3>1. Personal Information</h3>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email (e.g., name@example.com)"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Your contact number (e.g., +1 123-456-7890)"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          placeholder="Select your birth date"
          value={formData.dob}
          onChange={handleChange}
        />

        <h3>2. Program & Course Selection</h3>
        <select name="program" value={formData.program} onChange={handleChange}>
          <option value="">Select Preferred Program</option>
          <option value="IELTS Preparation">IELTS Preparation</option>
          <option value="CELPIP Training">CELPIP Training</option>
          <option value="PTE Coaching">PTE Coaching</option>
          <option value="English Language Classes">
            English Language Classes
          </option>
          <option value="Public Speaking">
            Confidence & Public Speaking Essentials
          </option>
          <option value="Confidence Building">
            Flourish Abroad with Everyday English
          </option>
        </select>

        <select
          name="courseType"
          value={formData.courseType}
          onChange={handleChange}
        >
          <option value="">Select Course Type</option>
          <option value="1:1 Classes">1:1 Classes</option>
          <option value="Small Group Classes">Small Group Classes</option>
          <option value="Study With Buddy">Study With Buddy</option>
        </select>

        <select
          name="classPackage"
          value={formData.classPackage}
          onChange={handleChange}
        >
          <option value="">Select Class Package</option>
          <option value="8-Class Package">8-Class Package</option>
          <option value="12-Class Package">12-Class Package</option>
          <option value="20-Class Package">20-Class Package</option>
        </select>

        <h3>3. Preferred Schedule</h3>
        <div className="checkbox-group">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <div key={day}>
              <input
                type="checkbox"
                name="scheduleDays"
                id={day}
                value={day}
                checked={formData.scheduleDays.includes(day)}
                onChange={handleChange}
              />
              <label htmlFor={day}>{day}</label>
            </div>
          ))}
        </div>

        <select
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
        >
          <option value="">Select Preferred Time</option>
          <option value="Morning (8-12)">Morning (8-12)</option>
          <option value="Afternoon (12-5)">Afternoon (12-5)</option>
          <option value="Evening (5-9)">Evening (5-9)</option>
        </select>

        <h3>4. Payment Details</h3>
        <select
          name="paymentOption"
          value={formData.paymentOption}
          onChange={handleChange}
        >
          <option value="">Select Payment Option</option>
          <option value="Credit/Debit Card">Credit/Debit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
        <input
          type="text"
          name="discountCode"
          placeholder="Enter code if available"
          value={formData.discountCode}
          onChange={handleChange}
        />

        <h3>5. Additional Information (Optional)</h3>
        <textarea
          name="goals"
          placeholder="Describe your learning objectives, challenges, or any other relevant information."
          value={formData.goals}
          onChange={handleChange}
        ></textarea>

        <select
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
        >
          <option value="">Select Referral Source</option>
          <option value="Google Search">Google Search</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend/Family">Friend/Family</option>
          <option value="Ad">Ad</option>
          <option value="Other">Other</option>
        </select>

        <h3>6. Terms & Conditions</h3>
        <label>
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
          />
          <span>
            I agree to Progresso Learning’s{" "}
            <a href="#/terms">Terms of Service</a> and{" "}
            <a href="#/privacy">Privacy Policy</a>.
          </span>
        </label>

        <button className="register-submit-button" type="submit">
          Register Now
        </button>
      </form>
    </>
  );
};
