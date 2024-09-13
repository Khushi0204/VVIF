import React from 'react';
import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="contact-container flex flex-col lg:flex-row justify-between p-4 lg:p-8">
        {/* Google Maps Section */}
        <div className="contact-left w-full lg:w-1/2 lg:mr-4 mb-6 lg:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13994.03332095452!2d77.29797765!3d28.734236199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf9456f4260fd%3A0xee2a7aec7b86d7c9!2sMother%20India%20Charitable%20Dispensary!5e0!3m2!1sen!2sin!4v1726068051297!5m2!1sen!2sin"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Map"
            className="rounded-lg"
          ></iframe>
          <div className="contact-details mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
            <p><strong>Address:</strong> Loni, Ghaziabad, Uttar Pradesh</p>
            <p><strong>Phone:</strong> +91 8860430007</p>
            <p><strong>Email:</strong> vishwakarmavansajfederation@gmail.com</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-right w-full lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg">
          <form action="https://formspree.io/f/meojworo" method="post">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
