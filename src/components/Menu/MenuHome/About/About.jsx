export default function About() {
  return (
    <>
      <div>
        <h1 className="font-semibold text-5xl mb-8 ">About Me</h1>
        <div className="pb-8 border-b-[1px] border-dashed border-gray-600 mb-8">
          <button className="px-4 py-3 bg-white50 rounded-lg text-black950 font-semibold text-sm">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-black900 rounded-lg p-6 flex justify-between items-center mb-20">
        <div className="flex flex-col gap-2 text-center flex-1 -ml-4">
          <span className="text-white text-xl font-medium">Based In</span>
          <span className="text-gray-400">Madagascar</span>
        </div>

        <div className="h-12 w-px bg-gray-600" />

        <div className="flex flex-col gap-2 text-center flex-1">
          <span className="text-white text-xl font-bold">+2</span>
          <span className="text-gray-400">Years of Experience</span>
        </div>

        <div className="h-12 w-px bg-gray-600" />

        <div className="flex flex-col gap-2 text-center flex-1 ">
          <span className="text-white text-xl font-bold">2</span>
          <span className="text-gray-400">Projects Completed</span>
        </div>
      </div>
      <div className="flex justify-between gap-x-16">
        <div className="w-[568px] h-[288px]">
          <h2 className="text-white50 font-medium text-2xl  mb-4">
            Hello! I'm Morello,
          </h2>
          <p className="text-base mb-4 text-gray-400">
            I'm a front-end engineer with 2 years of experience creating
            seamless, dynamic web applications. Driven by a passion for clean,
            efficient, and user-friendly interfaces, I excel at turning complex
            ideas into intuitive experiences.
          </p>
          <p className="text-base text-gray-400">
            I stay current with the latest front-end trends, ensuring innovative
            and high-performing solutions. Whether it's building components,
            optimizing performance, or enhancing interactivity, I'm committed to
            delivering code that balances functionality and aesthetics.
          </p>
        </div>
        <div className="bg-[url('/About/aboutimg.png')] bg-cover w-[568px] h-[384px]"></div>
      </div>
    </>
  );
}
