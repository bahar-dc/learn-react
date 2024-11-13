import React, { useState } from 'react';
export const MCQs = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (question, answer) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const questions = [
    {
      situation: "At a Starbucks (Beginner/Elementary)",
      question: "You walk into a Starbucks in New York City and see a long line. When it is your turn to order, the barista asks, “Hello can I help you?” How do you respond?",
      options: ["I need coffee.", "Can I get a Latte please?", "How much is a cappuccino?", "I’m still deciding."]
    },
    {
      question: "The barista then asks you, “What size would you like?”",
      options: ["I would like the Latte in medium please.", "Medium.", "Should I get a medium?", "Get me a medium."]
    },
    // ...add remaining questions here
  ];

  return (
    <div className="mcq-form">
      {questions.map((q, index) => (
        <div key={index} className="question-box">
          {q.situation && <h3>{q.situation}</h3>}
          <p>{q.question}</p>
          <div>
            {q.options.map((option, i) => (
              <label key={i} className="option-label">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[`question-${index}`] === option}
                  onChange={() => handleAnswerChange(`question-${index}`, option)}
                />
                <span className="custom-radio"></span>
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className="submit-button" onClick={() => console.log('Selected Answers:', answers)}>
        Submit
      </button>
    </div>
  );
}
