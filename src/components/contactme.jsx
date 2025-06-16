import { FacebookIcon, LocationEdit, PhoneCall, Send } from "lucide-react";

export default function ContactSec() {
  return (
    <>
      <main id="contact" className="max-w-7xl mx-auto">
        <section
          className=" mt-44 mb-10 xl:p-16 lg:p-12 p-6 rounded-2xl  bg-white/10 backdrop-blur-2xl"
          style={{ backgroundColor: "var(--theme-bg-footer)" }}
        >
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center mb-30"
          >
            <h1
              className="text-4xl font-bold uppercase text-gray-100 mb-6"
              style={{ color: "var(--theme-text-black)" }}
            >
              Contact Me
            </h1>
            <p
              className="text-gray-400 text-center"
              style={{ color: "var(--theme-text-black)" }}
            >
              If you have any questions or comments, please feel free to contact
              me.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div data-aos="fade-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="xl:mb-5 md-0">
                  <label
                    htmlFor="firstName"
                    className="text-gray-300"
                    style={{ color: "var(--theme-text-black)" }}
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    className="w-full  p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="lastName"
                    className="text-gray-300"
                    style={{ color: "var(--theme-text-black)" }}
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    className="w-full p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="text-gray-300"
                  style={{ color: "var(--theme-text-black)" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  className="w-full p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="text-gray-300"
                  style={{ color: "var(--theme-text-black)" }}
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  className="w-full p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="text-gray-300"
                  style={{ color: "var(--theme-text-black)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows={10}
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="p-4 text-gray-100"
              style={{ color: "var(--theme-text-black)" }}
            >
              <div className="mb-5">
                <h2 className="text-2xl font-bold mb-4">Chat with me</h2>
                <p
                  className="text-gray-400"
                  style={{ color: "var(--theme-text-black)" }}
                >
                  I'm always here to help you. If you have any questions or
                  comments, please feel free to contact me.
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2">
                  <FacebookIcon size={20} className="text-blue-400" />
                  <a
                    href="https://www.facebook.com/share/1BondqMGmN/?mibextid=wwXIfr"
                    target="_blank"
                    className="underline text-gray-200"
                    style={{ color: "var(--theme-text-black)" }}
                  >
                    Facebook
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Send size={20} className="text-blue-400" />
                  <a
                    href="https://t.me/Try_Limhai"
                    target="_blank"
                    className="underline text-gray-200"
                    style={{ color: "var(--theme-text-black)" }}
                  >
                    Telegram
                  </a>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-medium mb-2">Call Us</h2>
                <p
                  className="text-gray-400 mb-2"
                  style={{ color: "var(--theme-text-black)" }}
                >
                  I am available for a call. Please feel free to contact me.
                </p>
                <div className="flex items-center gap-2">
                  <PhoneCall size={20} className="text-green-400" />
                  <a
                    href="tel:+85570694862"
                    className="underline text-gray-200"
                    style={{ color: "var(--theme-text-black)" }}
                  >
                    +855 70694862
                  </a>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-medium mb-2">Visit Me</h2>
                <p
                  className="text-gray-400 mb-2"
                  style={{ color: "var(--theme-text-black)" }}
                >
                  I am available for a visit. Please feel free to contact me.
                </p>
                <div className="flex items-center gap-2">
                  <LocationEdit size={20} className="text-red-400" />
                  <span
                    className="underline text-gray-200"
                    style={{ color: "var(--theme-text-black)" }}
                  >
                    Phnom Penh, Cambodia
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="bg-purple-600 text-white cursor-pointer hover:bg-purple-700 transition-colors duration-300 px-6 py-3 rounded-md">
              Send Message
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
