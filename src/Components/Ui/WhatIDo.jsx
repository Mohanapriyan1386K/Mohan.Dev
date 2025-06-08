import { Code, DesignServices, Speed, Groups } from "@mui/icons-material";

function WhatIDo() {
  const items = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-500 text-4xl" />,
      description: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS",
    },
    {
      title: "UI/UX Design",
      icon: <DesignServices className="text-pink-500 text-4xl" />,
      description: "Figma, Adobe XD, responsive layouts",
    },
    {
      title: "Performance Optimization",
      icon: <Speed className="text-green-500 text-4xl" />,
      description: "Lazy loading, code splitting, Lighthouse audits",
    },
    {
      title: "Collaboration",
      icon: <Groups className="text-orange-500 text-4xl" />,
      description: "Git, GitHub, Agile, cross-functional teamwork",
    },
  ];

  return (
    <div className="bg-[#0d1117] py-16 px-4 md:px-20 ">
      <h2 className="text-3xl font-bold text-white text-center mb-12">What I Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#161b22] text-white text-center p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div>{item.icon}</div>
            <h3 className="text-lg font-bold mt-4">{item.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatIDo;
