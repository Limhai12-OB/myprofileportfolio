import { Award, BookOpen, Mail, MapPin, NotebookPen } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [ActiveTab, setActiveTab] = useState("experinces");
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
    });
  }, []);
  const personalInfo = {
    name: "Try Limhai",
    title: "Frontend Developer",
    bio: "Passionate fronten developer with some of experiences with React, Next.js, Tailwind CSS, and TypeScript. I am a quick learner and I am always looking for new challenges and opportunities to grow.",
    email: "trylimhai@gmail.com",
    phone: "+855 85 588 8888",
    location: "Phnom Penh, Cambodia",
    availableDate: "Available from 2025",
  };

  const skills = [
    { name: "React", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
  ];

  const experiences = [
    {
      company: "selfWork",
      role: "Frontend Developer",
      period: "2024 - Present",
      description:
        "I am a self-taught frontend developer with a passion for creating beautiful and functional websites.",
    },
    {
      company: "selfWork",
      role: "Frontend Developer",
      period: "2024 - Present",
      description:
        "I am a self-taught frontend developer with a passion for creating beautiful and functional websites.",
    },
    {
      company: "selfWork",
      role: "Frontend Developer",
      period: "2024 - Present",
      description:
        "I am a self-taught frontend developer with a passion for creating beautiful and functional websites.",
    },
  ];

  const education = [
    {
      institution: "Norton University",
      degree: "Computer Science",
      period: "2023 - Present",
    },
    { institution: "CSTAD", degree: "Web Design ", period: "2025" },
  ];
  return (
    <>
      <main
        id="AboutMe"
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div
          data-aos="fade-up"
          className="mb-16 sm:mb-24 lg:mb-32 mt-32 sm:mt-40 lg:mt-56 "
        >
          <h1 className="text-4xl font-bold uppercase text-center ">
            About Me
          </h1>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row  gap-5 items-center">
          <img
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-64 h-64 rounded-lg object-cover border-4 border-blue-200 shadow-lg"
            src="https://i.imghippo.com/files/pftw6430Sk.jpg"
            // src="https://i.imghippo.com/files/pBJ4667LeY.jpg"
            alt=""
          />
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="w-full text-center md:text-left"
          >
            <h1 className="text-4xl  font-bold mb-1">{personalInfo.name}</h1>
            <h2 className="text-2xl font-medium text-blue-600 mb-2">
              {personalInfo.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:max-w-xl ">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap mt-3 justify-center md:justify-start">
              <div className="flex items-center gap-1 mr-2 text-sm sm:text-base text-gray-300">
                <MapPin size={19} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1 mr-2 text-sm sm:text-base text-gray-300">
                <Mail size={19} />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1 mr-2 text-sm sm:text-base text-gray-300">
                <NotebookPen size={19} />
                <span>{personalInfo.availableDate}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Tab */}

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="mt-10 border-b border-gray-200 mb-6"
        >
          <nav className="flex space-x-9 mb-4">
            <button
              onClick={() => setActiveTab("experinces")}
              className={`py-2 cursor-pointer ${
                ActiveTab === "experinces"
                  ? " text-blue-600 font-medium  border-blue-600 "
                  : "text-gray-200"
              }`}
            >
              Experince
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`py-2 cursor-pointer  ${
                ActiveTab === "skills"
                  ? "text-blue-600 font-medium"
                  : "text-gray-200"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`py-2 cursor-pointer  ${
                ActiveTab === "education"
                  ? "text-blue-600 font-medium"
                  : "text-gray-200"
              }`}
            >
              Education
            </button>
          </nav>
        </div>
        {/* Content */}

        <div data-aos="fade-up" data-aos-duration="800">
          {ActiveTab === "experinces" && (
            <div className="">
              <h3 className="text-xl font-medium flex items-center gap-2">
                <BookOpen className="text-blue-600" size={25} />
                Work Experinces
              </h3>
              {experiences.map((item, index) => (
                <div key={index} className="mt-4 border-l-2 pl-4">
                  <h4 className="text-lg mb-1">{item.role}</h4>
                  <div className="lg:flex mb-1 justify-between">
                    <p className="text-blue-600 mb-1">{item.company}</p>
                    <p className="text-gray-300 text-sm">{item.period}</p>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {ActiveTab === "skills" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-blue-600" />
                <h3 className="text-xl font-medium">Technical Skills</h3>
              </div>
              <div>
                {skills.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 p-4 rounded-lg mb-3"
                  >
                    <div className="flex justify-between">
                      <span className="text-md font-medium ">{item.name}</span>
                      <p className="text-sm text-gray-300">{item.level}</p>
                    </div>
                    <div className="bg-gray-700 h-2 rounded-full w-full mt-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full "
                        style={{
                          width:
                            item.level === "Expert"
                              ? "90%"
                              : item.level === "Advanced"
                              ? "75%"
                              : item.level === "Intermediate"
                              ? "50%"
                              : "30%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ActiveTab === "education" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <NotebookPen className="text-blue-600" />
                <h3 className="text-xl">Education</h3>
              </div>
              {education.map((item, index) => (
                <div key={index} className="border-l-2 pl-4 mb-4">
                  <h4>{item.degree}</h4>
                  <div className="sm:flex justify-between">
                    <p className="text-blue-500">{item.institution}</p>
                    <p className="text-sm text-gray-300">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
