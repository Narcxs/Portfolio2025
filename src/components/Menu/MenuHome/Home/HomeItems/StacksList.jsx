export default function StacksList() {
  const frontEndStacks = [
    {
      stack: "React JS",
      subtitle: "Javascript Framework",
      logo: "/StackSvg/React.svg",
    },
    {
      stack: "Javascript",
      subtitle: "Programming Language",
      logo: "/StackSvg/Javascript.svg",
    },
    {
      stack: "Tailwind CSS",
      subtitle: "CSS Framework",
      logo: "/StackSvg/Tailwind.svg",
    },
    {
      stack: "Typescript",
      subtitle: "Typed Programming Language",
      logo: "/StackSvg/Typescript.svg",
    },
    {
      stack: "Next JS",
      subtitle: "React Framework",
      logo: "/StackSvg/nextjs2.svg",
    },
  ];

  const backEndStacks = [
    {
      stack: "Node JS",
      subtitle: "Javascript Runtime",
      logo: "/StackSvg/nodejs.svg",
    },
    {
      stack: "MongoDB",
      subtitle: "NoSQL Database",
      logo: "/StackSvg/mongodb.svg",
    },
    {
      stack: "GitHub",
      subtitle: "Code Hosting Platform",
      logo: "/StackSvg/Github.svg",
    },
  ];

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-medium mb-6 sm:mb-8">My Stack</h2>

      {/* Front-End Stack */}
      <div className="mb-8">
        <h3 className="text-lg sm:text-xl font-medium mb-4 text-white50 border-l-4 border-blue-500 pl-3">
          Front-End Technologies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {frontEndStacks.map((stack, index) => (
            <div
              key={index}
              className="flex items-center gap-x-4 p-3 rounded-lg transition-colors duration-1000 cursor-pointer w-full overflow-hidden"
            >
              <div className="min-w-[69px] min-h-[69px] w-[69px] h-[69px] flex-shrink-0 flex items-center justify-center border border-dashed border-gray-600 rounded-lg p-2 hover:border-white50 transition duration-300 cursor-pointer">
                {stack.logo ? (
                  <img
                    src={stack.logo}
                    alt={`${stack.stack} logo`}
                    className="w-[41px] h-[41px] object-contain"
                  />
                ) : (
                  <span className="text-xs text-gray-500">No logo</span>
                )}
              </div>

              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  {stack.stack}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  {stack.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back-End Stack */}
      <div>
        <h3 className="text-lg sm:text-xl font-medium mb-4 text-white50 border-l-4 border-green-500 pl-3">
          Back-End Technologies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {backEndStacks.map((stack, index) => (
            <div
              key={index}
              className="flex items-center gap-x-4 p-3 rounded-lg transition-colors duration-1000 cursor-pointer w-full overflow-hidden"
            >
              <div className="min-w-[69px] min-h-[69px] w-[69px] h-[69px] flex-shrink-0 flex items-center justify-center border border-dashed border-gray-600 rounded-lg p-2 hover:border-white50 transition duration-300 cursor-pointer">
                {stack.logo ? (
                  <img
                    src={stack.logo}
                    alt={`${stack.stack} logo`}
                    className="w-[41px] h-[41px] object-contain"
                  />
                ) : (
                  <span className="text-xs text-gray-500">No logo</span>
                )}
              </div>

              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  {stack.stack}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  {stack.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
