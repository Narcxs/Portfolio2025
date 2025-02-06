export default function StacksList() {
  const stacks = [
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
      stack: "GitHub",
      subtitle: "Code Hosting Platform",
      logo: "/StackSvg/Github.svg",
    },
    {
      stack: "Typescript",
      subtitle: "Typed Programming Language",
      logo: "/StackSvg/Typescript.svg",
    },
  ];

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-medium mb-6 sm:mb-8">My Stack</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex items-center gap-x-4 p-3 rounded-lg  transition-colors duration-1000 cursor-pointer"
          >
            <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] flex items-center justify-center border border-dashed border-gray-600 rounded-lg p-2 hover:border-white50 transition duration-300 cursor-pointer">
              {stack.logo ? (
                <img
                  src={stack.logo}
                  alt={`${stack.stack} logo`}
                  className="w-[36px] sm:w-[48px] h-[36px] sm:h-[48px] object-contain"
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
    </>
  );
}
