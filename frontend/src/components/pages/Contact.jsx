import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";

export default function Widget() {
  return (
    <div>
      <Header/>
      <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-md w-full bg-card shadow-lg rounded-lg overflow-hidden">
              <div className="bg-orange-400 py-4 px-6">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <p className="text-sm text-primary-foreground">Reach out to us for any inquiries</p>
              </div>
              <div className="p-6">
                  <form action="https://formspree.io/f/mqaznglo" method="post">
                      <div className="mb-4">
                          <label htmlFor="name" className="block text-sm font-medium text-primary-foreground">Your Name</label>
                          <input type="text" id="name" name="name" placeholder="Enter Your Name" className="w-full px-3 py-2 mt-1 text-primary-foreground placeholder-primary-foreground bg-input border border-dark rounded-md focus:outline-none focus:ring focus:ring-primary" required></input>
                      </div>
                      <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-medium text-primary-foreground">Your Email</label>
                          <input type="email" id="email" name="email" placeholder="Enter Your Email" className="w-full px-3 py-2 mt-1 text-primary-foreground placeholder-primary-foreground bg-input border border-dark rounded-md focus:outline-none focus:ring focus:ring-primary" required></input>
                      </div>
                      <div className="mb-4">
                          <label htmlFor="message" className="block text-sm font-medium text-primary-foreground">Your Message</label>
                          <textarea id="message" name="message" rows="4" placeholder="How can we help you?" className="w-full px-3 py-2 mt-1 text-primary-foreground placeholder-primary-foreground bg-input border border-dark rounded-md focus:outline-none focus:ring focus:ring-primary" required></textarea>
                      </div>
                      <button type="submit" className="w-full bg-orange-400 hover:bg-primary/80 text-primary-foreground py-2 px-4 rounded-md transition duration-300 ease-in-out">Send Message</button>
                  </form>
              </div>
          </div>
      </div>
      <Footer/>
      </div>

  )
}