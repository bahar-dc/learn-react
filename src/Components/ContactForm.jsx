// import React, { useState } from "react";
// import axios from "axios";

// export const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_email: "",
//     message: "",
//   });

//   const [message, setMessage] = useState("");
//   const [messageType, setMessageType] = useState("");

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://progresso-backend.vercel.app/api/contact",
//         {
//           name: formData.user_name,
//           email: formData.user_email,
//           message: formData.message,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 201) {
//         setMessage("Message sent successfully!");
//         setMessageType("success");
//         setFormData({ user_name: "", user_email: "", message: "" });
//       }
//     } catch (error) {
//       setMessage("Failed to send message. Please try again.");
//       setMessageType("error");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Your Name"
//           required
//           value={formData.user_name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="user_email"
//           placeholder="Your Email"
//           required
//           value={formData.user_email}
//           onChange={handleChange}
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           required
//           value={formData.message}
//           onChange={handleChange}
          
//         ></textarea>
//         <button type="submit">Send</button>
//       </form>

//       {message && (
//         <p
//           style={{
//             color: messageType === "success" ? "green" : "red",
//             marginTop: "10px",
//           }}
//         >
//           {message}
//         </p>
//       )}
//     </div>
//   );
// };

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://progresso-backend.vercel.app/api/contact",
        {
          name: formData.user_name,
          email: formData.user_email,
          message: formData.message,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Message sent successfully!",
        });

        setFormData({ user_name: "", user_email: "", message: "" });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          value={formData.user_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          value={formData.user_email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};
