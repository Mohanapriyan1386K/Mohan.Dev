import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nmc7yks",
        "template_xwdba1n",
        form.current,
        "BmbtHenoiBFXMIDmi"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact | Get in Touch with Mohana Priyan</title>
        <meta
          name="description"
          content="Mohanapriyan frontend developer,Interested in working together? Reach out to Mohana Priyan, a frontend developer specializing in responsive and interactive web applications."
        />
        <meta
          name="keywords"
          content=",Mohanapriyan frontend developer,Contact Mohana Priyan, Hire Frontend Developer, Web Developer Contact, React Developer India, Freelance Developer"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-2xl transition-transform transform hover:scale-[1.01]"
        >
          <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center tracking-wide">
            Contact Me
          </h1>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              name="title"
              placeholder="Subject Title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
