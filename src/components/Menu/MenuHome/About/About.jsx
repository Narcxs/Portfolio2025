export default function About() {
  return (
    <>
      <div>
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
          About Me
        </h1>
        <div className="pb-6 sm:pb-8 border-b-[1px] border-dashed border-gray-600 mb-6 sm:mb-8">
          <button className="w-full sm:w-auto px-3 sm:px-4 py-2.5 sm:py-3 bg-white50 rounded-lg text-black950 font-semibold text-sm">
            <a href="mailto:morello.dev@gmail.com">Get In Touch</a>
          </button>
        </div>
      </div>
      <div className="w-full max-w-xl bg-black900 rounded-lg p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col gap-1.5 md:gap-2 text-center flex-1">
          <span className="text-white text-sm sm:text-base md:text-lg font-medium">
            Based In
          </span>
          <span className="text-gray-400 text-xs sm:text-sm md:text-base">
            Madagascar
          </span>
        </div>

        <div className="hidden sm:block h-10 md:h-12 w-px bg-gray-600" />

        <div className="flex flex-col gap-1.5 md:gap-2 text-center flex-1">
          <span className="text-white text-sm sm:text-base md:text-lg font-bold">
            +2
          </span>
          <span className="text-gray-400 text-xs sm:text-sm md:text-base">
            Years of Experience
          </span>
        </div>

        <div className="hidden sm:block h-10 md:h-12 w-px bg-gray-600" />

        <div className="flex flex-col gap-1.5 md:gap-2 text-center flex-1">
          <span className="text-white text-sm sm:text-base md:text-lg font-bold">
            2
          </span>
          <span className="text-gray-400 text-xs sm:text-sm md:text-base">
            Projects Completed
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-x-16">
        <div className="w-full lg:w-[568px]">
          <h2 className="text-white50 font-medium text-xl sm:text-2xl mb-3 sm:mb-4">
            Hello! I&apos;m Morello,
          </h2>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-400">
            I&apos;m a front-end engineer with 2 years of experience creating
            seamless, dynamic web applications. Driven by a passion for clean,
            efficient, and user-friendly interfaces, I excel at turning complex
            ideas into intuitive experiences.
          </p>
          <p className="text-sm sm:text-base text-gray-400">
            I stay current with the latest front-end trends, ensuring innovative
            and high-performing solutions. Whether it&apos;s building
            components, optimizing performance, or enhancing interactivity,
            I&apos;m committed to delivering code that balances functionality
            and aesthetics.
          </p>
        </div>
        <div className="bg-[url('/About/aboutimg.png')] bg-cover bg-center bg-no-repeat w-full h-auto aspect-[16/9] rounded"></div>
      </div>
    </>
  );
}
