import { Github, ExternalLink, Star, Calendar, User } from "lucide-react";

export default function ProjectSec() {
  const projects = [
    {
      title: "TVC Movie Entertainment",
      description:
        "This is a description of an amazing project with cutting-edge features and stunning design.",
      imageUrl: "https://i.imghippo.com/files/kGAJ4606VZs.png",
      tags: ["React", "Tailwind"],
      githubUrl: "https://github.com/Limhai12-OB/MovieProjectForFinal",
      demoUrl: "https://tvcmovieintertaiment.vercel.app/",
      stars: 128,
      lastUpdated: "May 2025",
      contributors: 12,
    },
    {
      title: "Cambotrip",
      description:
        "Cambotrip is a website that allows users to look for the best travel destination in Cambodia. ( still in progress )",
      imageUrl: "https://i.imghippo.com/files/yLFj7037CDo.png",
      tags: ["React", "Tailwind"],
      githubUrl: "https://github.com/Limhai12-OB/Final-Project",
      demoUrl: "https://cambotrip-limhais-projects.vercel.app/",
      stars: 100,
      lastUpdated: "April 2024",
      contributors: 1,
    },
    {
      title: "Weather Check",
      description:
        "This will let you to check the real Weather all of your city or country all around the world",
      imageUrl: "https://i.imghippo.com/files/Oao5424Ick.png",
      tags: ["React", "Tailwind"],
      githubUrl: "https://github.com/Limhai12-OB/WeatherCheck",
      demoUrl: "https://weather-check-cd93zrg0g-limhais-projects.vercel.app/",
      stars: 128,
      lastUpdated: "May 2025",
      contributors: 12,
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="mx-auto max-w-7xl mt-44 mb-10 p-6 bg-cover bg-image text-white bg-center"
      >
        <div>
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            className="text-4xl font-bold uppercase text-center mb-16 "
            style={{ color: "var(--theme-text-black)" }}
          >
            Projects
          </h1>
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              key={index}
              className="group bg-gray-800/50 rounded-xl transition-all duration-500 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-blue-500/20  "
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src={project.imageUrl}
                  alt="MovieProject"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-blue-600/50 px-2 py-1 rounded-full group-hover:bg-blue-500/70 group-hover:scale-105 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-gray-400 mb-4 flex gap-4 group-hover:text-gray-300 transition-colors duration-300">
                  <div className="flex items-center gap-1">
                    <Star
                      size={19}
                      className="group-hover:text-yellow-400 transition-colors duration-300"
                    />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User
                      size={19}
                      className="group-hover:text-green-400 transition-colors duration-300"
                    />
                    <span>{project.contributors}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar
                      size={19}
                      className="group-hover:text-purple-400 transition-colors duration-300"
                    />
                    <span>{project.lastUpdated}</span>
                  </div>
                </div>

                <div className="flex gap-5">
                  <a
                    className="flex gap-2 items-center group-hover:text-blue-400 hover:scale-110 transition-all duration-300"
                    href={project.githubUrl}
                    target="_blank"
                  >
                    <Github
                      size={20}
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                    <p className="text-lg">Code</p>
                  </a>
                  <a
                    className="flex gap-2 items-center group-hover:text-green-400 hover:scale-110 transition-all duration-300"
                    href={project.githubUrl}
                    target="_blank"
                  >
                    <ExternalLink
                      size={20}
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                    <p className="text-lg">Live Demo</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </main>
      </section>
    </>
  );
}
