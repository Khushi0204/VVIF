export default function ContactDeveloper() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center bg-gray-800 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-orange-400 mb-4">Contact the Developer</h1>
          <p className="text-lg mb-6">
            Reach out with any inquiries, suggestions, or technical issues. Let's collaborate to make your experience better!
          </p>
          <ul className="text-sm space-y-4">
            <li>• Get support for any technical issues.</li>
            <li>• Provide feedback and suggestions.</li>
            <li>• Collaborate on new projects.</li>
            <li>• Stay updated on future developments.</li>
          </ul>
          <p className="text-sm text-gray-400 mt-12"> Khushi Sharma Software Engineer © 2024, All rights reserved </p>
        </div>

        {/* Right Section - Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-6" action="https://formspree.io/f/manwzvwa" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 text-gray-900 py-3 rounded-lg hover:bg-orange-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
