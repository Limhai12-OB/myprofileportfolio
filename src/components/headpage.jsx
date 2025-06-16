import { ArrowDown, Contact, Menu, X } from "lucide-react";
import { useState } from "react";

export default function HeadPage() {
  const [menuOpen, setmenuOpen] = useState(false);

  const scrollToMe = (event) => {
    event.preventDefault();
    const AboutMe = document.getElementById("AboutMe");
    if (AboutMe) {
      const headerOffset = -30;
      window.scrollTo({
        top: AboutMe.offsetTop - headerOffset,
        behavior: "smooth",
      });
    }
  };

  const scrollToContactMe = (event) => {
    event.preventDefault();
    const contactME = document.getElementById("contact");
    if (contactME) {
      const headSet = 100;
      window.scrollTo({
        top: contactME.offsetTop - headSet,
        behavior: "smooth",
      });
    }
  };

  const scrollToProjects = (event) => {
    event.preventDefault();
    const projects = document.getElementById("projects");
    if (projects) {
      const headSet = 100;
      window.scrollTo({
        top: projects.offsetTop - headSet,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-image bg-center">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white hover:text-blue-500 transition-colors duration-300"
              href="#"
              onClick={scrollToTop}
            >
              Portfolio
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              onClick={() => setmenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#aboutMe"
                className="text-gray-100 hover:text-blue-500 transition-colors duration-300"
                onClick={scrollToMe}
              >
                About Me
              </a>
              <a
                href="#aboutMe"
                className="text-gray-100 hover:text-blue-500 transition-colors duration-300"
                onClick={scrollToMe}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-100 hover:text-blue-500 transition-colors duration-300"
                onClick={scrollToProjects}
              >
                Projects
              </a>
              <a
                href="tel:+85570694862"
                className="text-gray-100 hover:text-blue-500 transition-colors duration-300"
              >
                +85570694862
              </a>
            </nav>

            {/* Contact Button - Desktop */}
            <button
              onClick={scrollToContactMe}
              className="hidden md:block px-4 py-2 rounded-lg text-white bg-purple-600 border border-purple-500 shadow-md hover:bg-purple-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="py-4 space-y-4">
              <a
                href="#aboutMe"
                className="block text-gray-100 hover:text-blue-500 transition-colors duration-300"
                onClick={(e) => {
                  scrollToMe(e);
                  setmenuOpen(false);
                }}
              >
                About Me
              </a>
              <a
                href="#aboutMe"
                className="block text-gray-100 hover:text-blue-500 transition-colors duration-300"
                onClick={(e) => {
                  scrollToMe(e);
                  setmenuOpen(false);
                }}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-gray-100 hover:text-blue-500 transition-colors duration-300"
                onClick={(e) => {
                  scrollToProjects(e);
                  setmenuOpen(false);
                }}
              >
                Projects
              </a>
              <a
                href="tel:+85570694862"
                className="block text-gray-100 hover:text-blue-500 transition-colors duration-300"
              >
                +85570694862
              </a>
              <button
                onClick={(e) => {
                  scrollToContactMe(e);
                  setmenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-lg text-white bg-purple-600 border border-purple-500 shadow-md hover:bg-purple-700 transition-all duration-300"
              >
                Contact Me
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 md:pt-20 min-h-screen flex items-center mt-15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Main Hero Content */}
          <div className="text-center mb-8 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-wide leading-tight">
              I AM A{" "}
              <span className="text-blue-600 inline-block transform -skew-x-12">
                \
              </span>
              <br />
              <span className="text-red-500 font-extrabold animate-pulse block mt-2">
                DEVELOPER
              </span>
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:order-1 order-2 space-y-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center text-white">
                <p className="text-lg">
                  Greetings, Welcome to my Portfolio WebPage
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center text-white lg:ml-6">
                <p className="text-lg">
                  I'm Try Limhai, 19 years old, and I am pursuing a degree in
                  CS.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center text-white lg:ml-12">
                <p className="text-lg">
                  As a Second Year Student at Norton University.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="lg:order-2 order-1 flex justify-center relative">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/50 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-white rounded-full flex items-center justify-center text-6xl font-bold text-blue-600">
                    TL
                  </div>
                </div>
                {/* Arrow Button */}
                <button
                  onClick={scrollToMe}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block"
                >
                  <ArrowDown
                    className="bg-black/50 rounded-full p-3 cursor-pointer text-white hover:bg-black/70 transition-colors"
                    size={50}
                  />
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:order-3 order-3 space-y-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center text-white">
                <p className="text-lg">
                  Have made some projects with React, HTML, JavaScript, CSS
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center text-white lg:mr-6">
                <p className="text-lg">
                  Want to be a good developer, programmer.
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl text-center text-white lg:mr-12">
                <p className="text-lg">Used to build projects with APIs.</p>
              </div>
            </div>
          </div>

          {/* Mobile Arrow Button */}
          <div className="flex justify-center mt-8 lg:hidden">
            <button onClick={scrollToMe} className="animate-bounce">
              <ArrowDown
                className="bg-black/50 rounded-full p-3 cursor-pointer text-white hover:bg-black/70 transition-colors"
                size={40}
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
