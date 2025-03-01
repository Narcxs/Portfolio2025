export default function Projects() {
  const project = {
    id: 1,
    title: "Weather app",
    image: "./projects/Havandra.png",
    description:
      "Havandra is an intuitive weather application designed for Madagascar's provinces. Using a free API, it provides accurate and up-to-date weather forecasts for each region. Simple and practical, it allows users to easily check local weather conditions.",
    technologies: ["React", "Tailwind", "typescript"],
    link: "https://havandra.vercel.app/",
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white50">
            My Projet
          </h2>
          <div className="w-20 h-1 bg-active mx-auto mb-5 rounded-full"></div>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Discover my most recent and representative work
          </p>
        </div>

        <div className="bg-black900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="md:grid md:grid-cols-2">
            <div className="relative h-72 md:h-auto overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <a
                    href={project.link}
                    className="inline-block px-5 py-2 bg-white50 text-black950 font-medium rounded-lg transform translate-y-4 hover:translate-y-0 transition-transform duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white50 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-black900 text-gray-400 text-xs sm:text-sm rounded-lg border border-dashed border-gray-600 hover:border-white50 transition-colors duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-2">
                <a
                  href={project.link}
                  className="inline-block px-6 py-3 bg-white50 text-black950 font-semibold text-sm rounded-lg hover:bg-white40 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
