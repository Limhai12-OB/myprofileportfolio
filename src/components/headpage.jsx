import { ArrowDown, Menu, X } from "lucide-react";
import { useState } from "react";
import "aos/dist/aos.css";

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

  const scrollToContactMe = (event) => {
    event.preventDefault();
    const contactMe = document.getElementById("contactMe");
    if (contactMe) {
      const headerOffset = 100;
      window.scrollTo({
        top: contactMe.offsetTop - headerOffset,
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
    <>
      <main className="bg-cover bg-image bg-center w-full ">
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl px-6 py-4 flex flex-wrap justify-between items-center w-full bg-black/30 backdrop-blur-sm rounded-xl">
          {/* Logo */}
          <a
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-blue-500 transition-colors duration-300"
            href="#"
            onClick={scrollToTop}
          >
            Portfolio
          </a>
          {/* Bar for mb */}
          <button
            className="md:hidden flex-shrink-0 text-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
            onClick={() => setmenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation */}
          <nav
            className={`w-full md:w-auto lg:flex-1 lg:flex lg:justify-center md:flex md:items-center transition-all duration-500 ease-in-out overflow-hidden
              ${
                menuOpen
                  ? "max-h-64 opacity-100"
                  : "max-h-0 md:max-h-56  opacity-0  md:opacity-100"
              }
              `}
          >
            <ul className="flex flex-col md:flex-row justify-center gap-6 text-gray-300 py-2 md:py-0">
              <li>
                <a
                  href="#aboutMe"
                  className="hover:text-blue-500 transition-colors duration-300"
                  onClick={scrollToMe}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#aboutMe"
                  className="hover:text-blue-500 transition-colors duration-300"
                  onClick={scrollToMe}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-500 transition-colors duration-300"
                  onClick={scrollToProjects}
                >
                  Projects
                </a>
              </li>
              <li className="md:hidden block">
                <a href="#contactMe" onClick={scrollToContactMe}>
                  ContactMe
                </a>
              </li>
              <li>
                <a
                  href="tel:+85570694862"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  +85570694862
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Button */}
          <button
            onClick={scrollToContactMe}
            className="hidden md:block px-4 py-2 rounded-lg text-white bg-purple-600 border border-purple-500 shadow-md hover:bg-purple-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Contact Me
          </button>
        </header>
        <section className="flex flex-col items-center justify-center min-h-screen xl:-mt-6 lg:mt-44 md:mt-56 mt-44 ">
          <div className="text-center xl:mb-56 xl:relative">
            <h1 className="xl:text-9xl md:text-8xl sm:text-6xl text-5xl p-2 font-bold text-white tracking-wide">
              I AM A <span className="text-blue-600">FRONTEND</span>
              <br />
              <span className="xl:text-8xl text-red-700 font-extrabold scale-bounce">
                DEVELOPER
              </span>
            </h1>
          </div>
          <div className="grid xl:grid-cols-3 grid-cols-1 xl:absolute xl:mt-96 -mt-72  ">
            <div data-aos="fade-right" className="mt-96 text-xl p-5">
              <p className="bg-white/20 p-3 rounded-2xl text-center xl:w-[450px] ">
                Greetings, Welcome to my Portfolio WebPage{" "}
              </p>
              <p className="bg-white/20 p-3 rounded-2xl text-center xl:w-[400px] mt-5 xl:ml-12">
                I'm Try Limhai, 19 years old, and I am pursuing a degree in CS.{" "}
              </p>
              <p className="bg-white/20 p-3 rounded-2xl text-center xl:w-[350px] mt-5 xl:ml-24">
                As a Second Year Student at Norton University .{" "}
              </p>
            </div>
            <div className=" order-3 xl:order-2 xl:w-[500px] lg:w-[450px] sm:w-[400px] xl:-ml-4 mx-auto  drop-shadow-lg drop-shadow-cyan-500/80">
              <img
                src="https://i.imghippo.com/files/lPr9151Dno.png"
                alt="Me"
                className=" "
              />
              <button className="absolute  -mt-28 ml-52 hidden xl:block animate-bounce drop-shadow-cyan-500/80">
                <ArrowDown
                  onClick={scrollToMe}
                  className=" bg-black/50 rounded-4xl p-3 cursor-pointer"
                  size={50}
                />
              </button>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="order-2 xl:order-2 xl:mt-96  text-xl p-5 xl:-ml-10"
            >
              <p className="bg-white/20 p-3 rounded-2xl text-center xl:w-[450px] ">
                Have made some projects with React,Html,JavaScript,CSS{" "}
              </p>
              <p className="bg-white/20 p-3 rounded-2xl text-center xl:w-[400px] mt-5 ">
                Want to be a good developer, programmer.{" "}
              </p>
              <p className="bg-white/20 p-3 rounded-2xl text-center xl:w-[350px] mt-5 ">
                used to built project with API .{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
