

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    emailjs
      .send(
        "service_klodu2m",
        "template_8ttsx2n",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "4zFUdX4ayMG9f3lxf"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        toast.error("Failed to send message. Try again!");
        console.error(err);
      });
  };

  return (
    <>
      <NavBar />

      {/* Hero Section (matching About page style) */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 text-center py-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact <span className='text-pink-500'>Us</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or ideas? We’d love to hear from you. Reach
            out today and let’s start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-20 mt-16 mb-20">
        <div className="lg:flex lg:space-x-12 items-start">
          {/* Left Side - Map + Contact Info */}
          <div className="lg:w-1/2 flex flex-col space-y-8">
            {/* Map */}
            <div className="h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Epic Reads Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.660150136191!2d80.3166086!3d26.4881903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38605271b581%3A0x34f0c48171ae4fdb!2sEmerald%20Garden!5e0!3m2!1sen!2sin!4v1691888890896!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                oading="lazy"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                {
                  icon: <FaEnvelope className="text-gray-600 text-2xl" />,
                  title: "Email",
                  info: "support@epicreads",
                },
                {
                  icon: <FaPhone className="text-gray-600 text-2xl" />,
                  title: "Phone",
                  info: "+91 7233828073"
                },
                {
                  icon: <FaMapMarkerAlt className="text-gray-600 text-2xl" />,
                  title: "Address",
                  info: "12/52 Emerald Garden,Khalasi Line, Tolak Nagar, Kanpur Nagar, Uttar Pradesh, India 208001",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Message"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-full hover:bg-gray-900 duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
