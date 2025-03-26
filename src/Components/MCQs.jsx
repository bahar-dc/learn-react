// import React, { useState } from "react";
// import axios from "axios";

// export const MCQs = () => {
//   const [answers, setAnswers] = useState({});
//   const [contactInfo, setContactInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//   });

//   const handleAnswerChange = (question, answer) => {
//     setAnswers((prev) => ({ ...prev, [question]: answer }));
//   };

//   const handleContactChange = (e) => {
//     const { name, value } = e.target;
//     setContactInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   //  const handleSubmit = (e) => {
//   //     e.preventDefault();
//   //     const formData = new FormData();

//   //     // Append contact information fields
//   //     formData.append("First Name", contactInfo.firstName);
//   //     formData.append("Last Name", contactInfo.lastName);
//   //     formData.append("Email", contactInfo.email);
//   //     formData.append("Phone", contactInfo.phone);

//   //     // Append answers to the form data
//   //     Object.keys(answers).forEach(key => {
//   //       formData.append(key, answers[key]);
//   //     });

//   //     // Send data to Formspree
//   //     fetch("https://formspree.io/f/YOUR_FORM_ID", {
//   //       method: "POST",
//   //       body: formData,
//   //       headers: {
//   //         'Accept': 'application/json'
//   //       }
//   //     })
//   //     .then(response => {
//   //       if (response.ok) {
//   //         alert("Form submitted successfully!");
//   //         setAnswers({});  // Reset form answers
//   //         setContactInfo({ firstName: '', lastName: '', email: '', phone: '' }); // Reset contact info
//   //       } else {
//   //         alert("Form submission failed.");
//   //       }
//   //     })
//   //     .catch(() => alert("An error occurred while submitting the form."));
//   //   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const payload = {
//   //     firstName: contactInfo.firstName,
//   //     lastName: contactInfo.lastName,
//   //     email: contactInfo.email,
//   //     phone: contactInfo.phone,
//   //     answers: answers,
//   //   };

//   //   try {
//   //     const response = await axios.post(
//   //       "https://progresso-backend.vercel.app/api/test-your-english",
//   //       payload
//   //     );
//   //     console.log("Success:", response.data);
//   //     alert("Form submitted successfully!");
//   //     setAnswers({});
//   //     setContactInfo({ firstName: "", lastName: "", email: "", phone: "" });
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     alert("An error occurred while submitting the form.");
//   //   }
//   // };

//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();

//   formData.append("firstName", contactInfo.firstName);
//   formData.append("lastName", contactInfo.lastName);
//   formData.append("email", contactInfo.email);
//   formData.append("phone", contactInfo.phone);

//   Object.keys(answers).forEach((key) => {
//     formData.append(key, answers[key]);
//   });

//   try {
//     const response = await axios.post(
//       "http://localhost:5000/api/test-your-english",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     console.log("✅ Success:", response.data);
//     alert("Form submitted successfully!");

//     setAnswers({});
//     setContactInfo({ firstName: "", lastName: "", email: "", phone: "" });
//   } catch (error) {
//     console.error("❌ Error:", error);
//     alert("An error occurred while submitting the form.");
//   }
// };



//   const questions = [
//     {
//       situation: "At a Starbucks (Beginner/Elementary)",
//       question:
//         "You walk into a Starbucks in New York City and see a long line. When it is your turn to order, the barista asks, 'Hello can I help you?' How do you respond?",
//       options: [
//         "I need coffee.",
//         "Can I get a Latte please?",
//         "How much is a cappuccino?",
//         "I’m still deciding.",
//       ],
//     },
//     {
//       question: "The barista then asks you, 'What size would you like?'",
//       options: [
//         "I would like the Latte in medium please.",
//         "Medium.",
//         "Should I get a medium?",
//         "Get me a medium.",
//       ],
//     },
//     {
//       question:
//         "The barista asks, 'Would you like anything to eat with your coffee?'",
//       options: [
//         "Muffin.",
//         "Yes, muffin.",
//         "Yes. Can I get a muffin please?",
//         "Yes, I will have muffin please.",
//       ],
//     },
//     {
//       question:
//         "The final thing the barista asks you is, 'Would you like this for here or to go?' How do you respond?",
//       options: [
//         "I don't know.",
//         "To go",
//         "I would like to take this for to go please.",
//         "To go please",
//       ],
//     },
//     {
//       question:
//         "The barista hands you your drink and says, 'Have a nice day!' How do you respond?",
//       options: [
//         "I don’t want it.",
//         "You too, thank you!",
//         "How much is it?",
//         "What did you say?",
//       ],
//     },
//     {
//       situation: "Renting an Apartment in New York City (Intermediate - A2)",
//       question:
//         "What does the term 'heart of Manhattan' suggest about the location of the apartment?",
//       options: ["Corner", "Centre", "Top", "South"],
//     },
//     {
//       question: "Which of the following is NOT included in the apartment?",
//       options: [
//         "Modern kitchen",
//         "Utilities",
//         "Newly renovated bathroom",
//         "Proximity to Central Park",
//       ],
//     },
//     {
//       question:
//         "Which of the following is a synonym for 'charming' as used in the advertisement?",
//       options: ["Spacious", "Modern", "Delightful", "Renovated"],
//     },
//     {
//       question:
//         "Which of the following words can replace 'spacious' in the advertisement without changing its meaning?",
//       options: ["Large", "Cozy", "Compact", "Tiny"],
//     },
//     {
//       question:
//         "Which of the following words is closest in meaning to 'newly' as used in the advertisement?",
//       options: ["Recently", "Quickly", "Rarely", "Often"],
//     },
//     {
//       question:
//         "Which of the following words can best replace 'features' in the sentence 'The apartment features a spacious living area'?",
//       options: ["Shows", "Includes", "Displays", "Creates"],
//     },
//     {
//       question: "Based on the advertisement, which statement is true?",
//       options: [
//         "Pets are allowed in the apartment.",
//         "The apartment comes with all utilities included.",
//         "The apartment is located far from public transportation.",
//         "The apartment is available for immediate move-in.",
//       ],
//     },
//     {
//       situation: "Job Interview (Intermediate-Upper)",
//       question:
//         "You are in a job interview, and the interviewer asks, 'What is your greatest strength?' How do you respond?",
//       options: [
//         "I work hard.",
//         "I am very hardworking and detail oriented.",
//         "I can do everything.",
//         "I don’t have any.",
//       ],
//     },
//     {
//       question:
//         "The interviewer then asks, 'Can you describe a time when you solved a difficult problem at work?' How do you respond?",
//       options: [
//         "I never had any problems.",
//         "I had a problem and I solved it.",
//         "I faced a challenging project deadline and successfully managed my team to complete it on time by delegating tasks efficiently and motivating everyone.",
//         "I don’t remember.",
//       ],
//     },
//     {
//       question:
//         "Lastly, the interviewer asks, 'Do you have any questions for us?' How do you respond?",
//       options: [
//         "No, I’m good.",
//         "When do I start?",
//         "What are the next steps in the interview process?",
//         "How much will I get paid?",
//       ],
//     },
//   ];

//   return (
//     <form className="mcq-form" onSubmit={handleSubmit}>
//       {/* Contact Information Fields */}
//       <div className="contact-info-columns">
//         <label>
//           First Name:
//           <input
//             type="text"
//             name="firstName"
//             value={contactInfo.firstName}
//             onChange={handleContactChange}
//             required
//           />
//         </label>
//         <label>
//           Last Name:
//           <input
//             type="text"
//             name="lastName"
//             value={contactInfo.lastName}
//             onChange={handleContactChange}
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={contactInfo.email}
//             onChange={handleContactChange}
//             required
//           />
//         </label>
//         <label>
//           Phone:
//           <input
//             type="tel"
//             name="phone"
//             value={contactInfo.phone}
//             onChange={handleContactChange}
//           />
//         </label>
//       </div>

//       {questions.map((q, index) => (
//         <div key={index}>
//           {q.situation && <h3>{q.situation}</h3>}
//           <div className="question-box">
//             <p>{q.question}</p>
//             <div className="radio-buttons-row">
//               {q.options.map((option, i) => (
//                 <label key={i} className="option-label">
//                   <input
//                     type="radio"
//                     name={`question-${index}`}
//                     value={option}
//                     checked={answers[`question-${index}`] === option}
//                     onChange={() =>
//                       handleAnswerChange(`question-${index}`, option)
//                     }
//                   />
//                   <span className="custom-radio"></span>
//                   <div className="radio-data">{option}</div>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="submit-button-bottom">
//         <button className="submit-button" type="submit">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const MCQs = () => {
  const [answers, setAnswers] = useState({});
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleAnswerChange = (question, answer) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Format answers correctly without "answers:"
  const formattedAnswers = Object.entries(answers)
    .map(
      ([question, answer], index) =>
        `Question ${index + 1}: ${question}\nAnswer: ${answer}\n\n`
    )
    .join("");

  const payload = {
    ...contactInfo,
    answers: formattedAnswers, // No "answers: " prefix
  };

  try {
    const response = await axios.post(
      "https://progresso-backend.vercel.app/api/test-your-english",
      payload
    );

    Swal.fire({
      icon: "success",
      title: "Submitted!",
      text: "Your answers have been recorded successfully.",
    });

    setAnswers({});
    setContactInfo({ firstName: "", lastName: "", email: "", phone: "" });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Submission Failed",
      text: "An error occurred while submitting the form.",
    });
  }
};

 const questions = [
    {
      situation: "At a Starbucks (Beginner/Elementary)",
      question:
        "You walk into a Starbucks in New York City and see a long line. When it is your turn to order, the barista asks, 'Hello can I help you?' How do you respond?",
      options: [
        "I need coffee.",
        "Can I get a Latte please?",
        "How much is a cappuccino?",
        "I’m still deciding.",
      ],
    },
    {
      question: "The barista then asks you, 'What size would you like?'",
      options: [
        "I would like the Latte in medium please.",
        "Medium.",
        "Should I get a medium?",
        "Get me a medium.",
      ],
    },
    {
      question:
        "The barista asks, 'Would you like anything to eat with your coffee?'",
      options: [
        "Muffin.",
        "Yes, muffin.",
        "Yes. Can I get a muffin please?",
        "Yes, I will have muffin please.",
      ],
    },
    {
      question:
        "The final thing the barista asks you is, 'Would you like this for here or to go?' How do you respond?",
      options: [
        "I don't know.",
        "To go",
        "I would like to take this for to go please.",
        "To go please",
      ],
    },
    {
      question:
        "The barista hands you your drink and says, 'Have a nice day!' How do you respond?",
      options: [
        "I don’t want it.",
        "You too, thank you!",
        "How much is it?",
        "What did you say?",
      ],
    },
    {
      situation: "Renting an Apartment in New York City (Intermediate - A2)",
      question:
        "What does the term 'heart of Manhattan' suggest about the location of the apartment?",
      options: ["Corner", "Centre", "Top", "South"],
    },
    {
      question: "Which of the following is NOT included in the apartment?",
      options: [
        "Modern kitchen",
        "Utilities",
        "Newly renovated bathroom",
        "Proximity to Central Park",
      ],
    },
    {
      question:
        "Which of the following is a synonym for 'charming' as used in the advertisement?",
      options: ["Spacious", "Modern", "Delightful", "Renovated"],
    },
    {
      question:
        "Which of the following words can replace 'spacious' in the advertisement without changing its meaning?",
      options: ["Large", "Cozy", "Compact", "Tiny"],
    },
    {
      question:
        "Which of the following words is closest in meaning to 'newly' as used in the advertisement?",
      options: ["Recently", "Quickly", "Rarely", "Often"],
    },
    {
      question:
        "Which of the following words can best replace 'features' in the sentence 'The apartment features a spacious living area'?",
      options: ["Shows", "Includes", "Displays", "Creates"],
    },
    {
      question: "Based on the advertisement, which statement is true?",
      options: [
        "Pets are allowed in the apartment.",
        "The apartment comes with all utilities included.",
        "The apartment is located far from public transportation.",
        "The apartment is available for immediate move-in.",
      ],
    },
    {
      situation: "Job Interview (Intermediate-Upper)",
      question:
        "You are in a job interview, and the interviewer asks, 'What is your greatest strength?' How do you respond?",
      options: [
        "I work hard.",
        "I am very hardworking and detail oriented.",
        "I can do everything.",
        "I don’t have any.",
      ],
    },
    {
      question:
        "The interviewer then asks, 'Can you describe a time when you solved a difficult problem at work?' How do you respond?",
      options: [
        "I never had any problems.",
        "I had a problem and I solved it.",
        "I faced a challenging project deadline and successfully managed my team to complete it on time by delegating tasks efficiently and motivating everyone.",
        "I don’t remember.",
      ],
    },
    {
      question:
        "Lastly, the interviewer asks, 'Do you have any questions for us?' How do you respond?",
      options: [
        "No, I’m good.",
        "When do I start?",
        "What are the next steps in the interview process?",
        "How much will I get paid?",
      ],
    },
  ];


  return (
    <form className="mcq-form" onSubmit={handleSubmit}>
      <div className="contact-info-columns">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={contactInfo.firstName}
            onChange={handleContactChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={contactInfo.lastName}
            onChange={handleContactChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleContactChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={handleContactChange}
          />
        </label>
      </div>

      {questions.map((q, index) => (
        <div key={index}>
          {q.situation && <h3>{q.situation}</h3>}
          <div className="question-box">
            <p>{q.question}</p>
            <div className="radio-buttons-row">
              {q.options.map((option, i) => (
                <label key={i} className="option-label">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[q.question] === option}
                    onChange={() => handleAnswerChange(q.question, option)}
                  />
                  <span className="custom-radio"></span>
                  <div className="radio-data">{option}</div>
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="submit-button-bottom">
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
