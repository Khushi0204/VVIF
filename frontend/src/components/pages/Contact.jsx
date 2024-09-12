import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";

// export default function Widget() {
//   return (
//     <div>
//       <Header/>
//       <div className="contact-container">
//       <div className="contact-left">
//         {/* Google Maps Integration */}
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.835788144783!2d144.955928315922!3d-37.81720987975188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f9d76c4988!2sMelbourne%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1600933242349!5m2!1sen!2sin"
//           width="100%"
//           height="300"
//           frameBorder="0"
//           allowFullScreen=""
//           aria-hidden="false"
//           tabIndex="0"
//           title="Google Map"
//         ></iframe>

//         {/* Contact Details Below the Map */}
//         <div className="contact-details">
          
//           <p><strong>Phone:</strong> +91 8860430007</p>
//           <p><strong>Email:</strong> Vishwakarmavansajfederation@gmail.com</p>
//           <p><strong>Address:</strong> Loni, Ghaziabad, Uttar Pradesh</p>
//         </div>
//       </div>
//       </div>

//       <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
//           <div className="max-w-md w-full bg-card shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-orange-400 py-4 px-6">
//                   <h2 className="text-2xl font-bold">Contact Us</h2>
//                   <p className="text-sm text-primary-foreground">Reach out to us for any inquiries</p>
//               </div>
//               <div className="p-6">
//                   <form action="https://formspree.io/f/mqaznglo" method="post">
//                       <div className="mb-4">
//                           <label htmlFor="name" className="block text-sm font-medium text-primary-foreground">Your Name</label>
//                           <input type="text" id="name" name="name" placeholder="Enter Your Name" className="w-full px-3 py-2 mt-1 text-primary-foreground placeholder-primary-foreground bg-input border border-dark rounded-md focus:outline-none focus:ring focus:ring-primary" required></input>
//                       </div>
//                       <div className="mb-4">
//                           <label htmlFor="email" className="block text-sm font-medium text-primary-foreground">Your Email</label>
//                           <input type="email" id="email" name="email" placeholder="Enter Your Email" className="w-full px-3 py-2 mt-1 text-primary-foreground placeholder-primary-foreground bg-input border border-dark rounded-md focus:outline-none focus:ring focus:ring-primary" required></input>
//                       </div>
//                       <div className="mb-4">
//                           <label htmlFor="message" className="block text-sm font-medium text-primary-foreground">Your Message</label>
//                           <textarea id="message" name="message" rows="4" placeholder="How can we help you?" className="w-full px-3 py-2 mt-1 text-primary-foreground placeholder-primary-foreground bg-input border border-dark rounded-md focus:outline-none focus:ring focus:ring-primary" required></textarea>
//                       </div>
//                       <button type="submit" className="w-full bg-orange-400 hover:bg-primary/80 text-primary-foreground py-2 px-4 rounded-md transition duration-300 ease-in-out">Send Message</button>
//                   </form>
//               </div>
//           </div>
//       </div>
//       <Footer/>
//       </div>

//   )
// }



import React from 'react';

const ContactUs = () => {
  return (
    <div>
        <Header/>
    <div className="contact-container">
      <div className="contact-left">
        {/* Google Maps Integration */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13994.03332095452!2d77.29797765!3d28.734236199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf9456f4260fd%3A0xee2a7aec7b86d7c9!2sMother%20India%20Charitable%20Dispensary!5e0!3m2!1sen!2sin!4v1726068051297!5m2!1sen!2sin"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Map"
        ></iframe>

        {/* Contact Details Below the Map in Single Line */}
        <div className="contact-details">
        <p><strong>Address:</strong> Loni, Ghaziabad, Uttar Pradesh</p>
          <p><strong>Phone:</strong> +91 8860430007</p>
          <p><strong>Email:</strong> vishwakarmavansajfederation@gmail.com</p>
          
        </div>
      </div>

      <div className="contact-right">
        {/* Your existing contact form */}
        <form action="https://formspree.io/f/meojworo" method="post" data-netlify="true">
          <div>
            <label>Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label>Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;

// CSS (inside the same file)
const style = `
  .contact-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .contact-left {
    flex: 1;
    margin-right: 10px;

  }

  .contact-right {
    flex: 1;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
  }

  iframe {
    border: none;
    border-radius: 8px;
  }

  .contact-details {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
  }

  .contact-details p {
    margin: 0 10px;
    white-space: wrap;
  }

  form div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
`;

// Insert styles into the document head dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = style;
document.head.appendChild(styleSheet);
