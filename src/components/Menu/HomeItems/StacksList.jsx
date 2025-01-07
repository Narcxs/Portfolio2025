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
  ];
  return (
    <>
      <h2 className="mb-8 text-2xl font-medium">My Stack</h2>
      <div className="flex items-center gap-6 flex-wrap">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex items-center gap-x-4 w-[193px] cursor-pointer"
          >
            <div className="w-[72px] h-[72px] flex items-center justify-center border-dashed border-[1px] rounded-lg border-gray-600 p-2 box-border hover:border-white50  transition duration-500">
              {stack.logo ? (
                <img
                  src={stack.logo}
                  className="w-full h-full object-contain"
                  alt={`${stack.stack} logo`}
                />
              ) : (
                <span className="text-xs text-gray-500">No logo</span>
              )}
            </div>

            <div className="flex flex-col">
              <h4 className="font-semibold text-white text-sm">
                {stack.stack}
              </h4>
              <h6 className="text-gray-400 text-xs">{stack.subtitle}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
