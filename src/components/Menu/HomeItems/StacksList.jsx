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
      <h2 className="text-2xl font-medium mb-8">My Stack</h2>

      <div className="flex flex-wrap gap-6">
        {stacks.map((stack, index) => (
          <div key={index} className="flex items-center gap-x-4 w-[220px]">
            <div className="min-w-[72px] min-h-[72px] w-[72px] h-[72px] flex items-center justify-center border border-dashed border-gray-600 rounded-lg p-2">
              {stack.logo ? (
                <img
                  src={stack.logo}
                  alt={`${stack.stack} logo`}
                  className="w-[48px] h-[48px] object-contain"
                />
              ) : (
                <span className="text-xs text-gray-500">No logo</span>
              )}
            </div>

            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-white">
                {stack.stack}
              </h4>
              <p className="text-xs text-gray-400">{stack.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
