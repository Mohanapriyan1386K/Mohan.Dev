import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nmc7yks', 'template_xwdba1n', form.current, 'BmbtHenoiBFXMIDmi')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.current.reset(); // Optional: Reset the form after success
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Me</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">title</label>
          <input
            name="title"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
