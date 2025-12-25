import React from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json"; 
// 👉 এখানে তোমার Lottie JSON path দাও

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 py-8 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-3 uppercase">
          Contact Me
        </h2>

        <p className="text-center text-blue-400 mb-12 text-sm font-medium uppercase">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        {/* Main Content */}
        <div className="bg-green-100  border-2 border-white rounded-2xl shadow-xl p-6 md:p-10 
        flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side: Lottie */}
          <div className="md:w-1/2 w-full">
            <Lottie
              animationData={contactAnimation}
              loop={true}
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 w-full">
            <form className="space-y-5">
              <div>
                <label className="block text-black text-sm font-semibold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none 
                  focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-black block text-sm font-semibold mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border  focus:outline-none 
                  focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-black block text-sm font-semibold mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border resize-none 
                  focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500
                text-black font-semibold py-3 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
