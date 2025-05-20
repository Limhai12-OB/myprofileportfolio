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
      <div className=" ">
        <main id="aboutMe" className="max-w-7xl mx-auto p-6 ">
          <div className="mb-32 mt-56 ">
            <h1
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              className="text-4xl font-bold uppercase text-center"
            >
              About Me
            </h1>
          </div>
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              src="https://i.imghippo.com/files/pBJ4667LeY.jpg"
              alt="Profile"
              className="rounded-lg w-64 h-64 object-cover border-4 border-blue-100"
            />
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
              className="text-center md:text-left"
            >
              <h1 className="text-4xl font-bold text-white mb-1">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl text-blue-600 font-medium mb-2">
                {personalInfo.title}
              </h2>
              <p className="text-gray-300 mb-4 max-w-lg">{personalInfo.bio}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 ">
                <div className="flex items-center text-gray-300">
                  <MapPin size={19} className="mr-1" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail size={19} className="mr-1" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar size={19} className="mr-1" />
                  <span>{personalInfo.availableDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* tap */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            className="border-b border-gray-200 mb-6"
          >
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("experinces")}
                className={`hover:text-blue-500 cursor-pointer ${
                  ActiveTab === "experinces"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-300"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`hover:text-blue-500 cursor-pointer ${
                  ActiveTab === "skills"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-300"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`hover:text-blue-500 cursor-pointer ${
                  ActiveTab === "education"
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-300"
                }`}
              >
                Education
              </button>
            </nav>
          </div>

          {/* tap content */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            className="mt-6"
          >
            {ActiveTab === "experinces" && (
              <div className="space-y-6">
                <h3 className="flex items-center text-xl font-medium text-gray-200">
                  <BookOpen size={25} className="mr-2 text-blue-600 " />
                  Work Experience
                </h3>
                {experiences.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-blue-200 pl-4 ml-2"
                  >
                    <h4 className="text-lg font-medium text-gray-200">
                      {item.role}
                    </h4>
                    <div className="flex justify-between">
                      <p className="text-blue-600">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.period}</p>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {ActiveTab === "skills" && (
              <div>
                <div className="flex  gap-2">
                  <Award size={25} className="text-blue-600" />
                  <h3 className="text-lg font-medium text-gray-200 mb-4">
                    Technical Skills{" "}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 p-4  rounded-lg hover:bg-gray-800/70 transition-colors"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-20 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-300 mb-1">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
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
                <div className="flex  gap-2">
                  <NotebookPen size={25} className="text-blue-600" />
                  <h3 className="text-lg font-medium text-gray-200 mb-4">
                    Education
                  </h3>
                </div>
                {education.map((item, index) => (
                  <div key={index} className="border-l-2 pl-4 ml-2">
                    <h4 className="text-lg font-medium text-gray-300">
                      {item.degree}
                    </h4>
                    <div className="flex justify-between items-center">
                      <p className="text-blue-600">{item.institution}</p>
                      <p className="text-sm text-gray-400">{item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
