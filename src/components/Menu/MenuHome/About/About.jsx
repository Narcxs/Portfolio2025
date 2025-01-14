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
      <div>
        <div>
          <h2 className="text-white50 font-medium text-2xl tracking-tighter">
            Hello! I'm Morello,
          </h2>
          <p>
            a passionate front-end engineer with 2 years of experience in
            creating seamless, engaging, and dynamic web applications. My
            journey in front-end development is driven by a strong passion for
            crafting clean, efficient, and user-friendly interfaces that enhance
            the digital experience. In these two years, I’ve gained valuable
            expertise in modern front-end technologies, building responsive web
            designs, and collaborating with cross-functional teams to deliver
            exceptional digital solutions. I excel at translating complex ideas
            into intuitive, interactive interfaces that not only meet but exceed
            user expectations.
          </p>
          <p>
            I take pride in staying updated with the latest trends and
            advancements in front-end development, ensuring my work is always
            innovative and cutting-edge. Whether it's building components,
            optimizing performance, or enhancing user interactivity, I’m
            dedicated to delivering code that drives both functionality and
            aesthetics.
          </p>
        </div>
      </div>
    </>
  );
}
