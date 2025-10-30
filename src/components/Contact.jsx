import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwcTJ2xKuIt4LMwxy9b0ytKuNQu3ONkusqdghMvcne5yZNFtwmYft5903mFH4DdcvYy/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });
      setSubmitted(true);
      setFormData({ name: "", number: "", email: "", message: "" });
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <section id="contact" className="py-2 bg-gray-50">
      <div className="flex flex-col items-center justify-center">
        {!submitted ? (
          <div className="w-full max-w-lg bg-white  rounded-2xl p-8">
            <h4 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Contact Me !
            </h4>
            <form
              name="contact-form"
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                id="submit"
                className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div
            id="confirmationMessage"
            className="bg-green-100 text-green-700 font-medium p-6 rounded-lg shadow-md"
          >
            Thank you! Your message has been sent.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
