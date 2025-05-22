import {
  Award,
  BookOpen,
  Calendar,
  Mail,
  MapPin,
  NotebookPen,
} from "lucide-react";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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
        id="aboutMe"
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-16 sm:mb-24 lg:mb-32 mt-32 sm:mt-40 lg:mt-56">
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-center"
          >
            About Me
          </h1>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 mb-8">
          <img
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            src="https://i.imghippo.com/files/pBJ4667LeY.jpg"
            alt="Profile"
            className="rounded-lg w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover border-4 border-blue-100 flex-shrink-0"
          />
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            className="text-center md:text-left w-full"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 font-medium mb-2">
              {personalInfo.title}
            </h2>
            <p className="text-gray-300 mb-4 text-sm sm:text-base max-w-lg">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <div className="flex items-center text-gray-300 text-sm sm:text-base">
                <MapPin size={16} className="mr-1 sm:mr-2 flex-shrink-0" />
                <span className="break-all">{personalInfo.location}</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm sm:text-base">
                <Mail size={16} className="mr-1 sm:mr-2 flex-shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm sm:text-base">
                <Calendar size={16} className="mr-1 sm:mr-2 flex-shrink-0" />
                <span>{personalInfo.availableDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          className="border-b border-gray-200 mb-6 overflow-x-auto"
        >
          <nav className="flex space-x-6 sm:space-x-8 min-w-max">
            <button
              onClick={() => setActiveTab("experinces")}
              className={`py-2 px-1 text-sm sm:text-base whitespace-nowrap border-b-2 hover:text-blue-500 cursor-pointer transition-colors ${
                ActiveTab === "experinces"
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-300"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`py-2 px-1 text-sm sm:text-base whitespace-nowrap border-b-2 hover:text-blue-500 cursor-pointer transition-colors ${
                ActiveTab === "skills"
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-300"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`py-2 px-1 text-sm sm:text-base whitespace-nowrap border-b-2 hover:text-blue-500 cursor-pointer transition-colors ${
                ActiveTab === "education"
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-300"
              }`}
            >
              Education
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div data-aos="fade-up" data-aos-easing="ease-in-sine" className="mt-6">
          {ActiveTab === "experinces" && (
            <div className="space-y-6">
              <h3 className="flex items-center text-lg sm:text-xl font-medium text-gray-200">
                <BookOpen
                  size={20}
                  className="mr-2 text-blue-600 flex-shrink-0"
                />
                Work Experience
              </h3>
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-blue-200 pl-4 ml-2"
                >
                  <h4 className="text-base sm:text-lg font-medium text-gray-200">
                    {item.role}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2">
                    <p className="text-blue-600 text-sm sm:text-base">
                      {item.company}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {item.period}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {ActiveTab === "skills" && (
            <div>
              <div className="flex gap-2 mb-4">
                <Award size={20} className="text-blue-600 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-medium text-gray-200">
                  Technical Skills
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-200 text-sm sm:text-base font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-300">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width:
                            skill.level === "Expert"
                              ? "95%"
                              : skill.level === "Advanced"
                              ? "80%"
                              : skill.level === "Intermediate"
                              ? "60%"
                              : "40%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ActiveTab === "education" && (
            <div className="space-y-4">
              <div className="flex gap-2 mb-4">
                <NotebookPen
                  size={20}
                  className="text-blue-600 flex-shrink-0"
                />
                <h3 className="text-lg sm:text-xl font-medium text-gray-200">
                  Education
                </h3>
              </div>
              {education.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-blue-200 pl-4 ml-2"
                >
                  <h4 className="text-base sm:text-lg font-medium text-gray-300">
                    {item.degree}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <p className="text-blue-600 text-sm sm:text-base">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {item.period}
                    </p>
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
