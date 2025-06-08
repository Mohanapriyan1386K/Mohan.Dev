import {
  Code,
  Build,
  Brush,
  Settings,
  IntegrationInstructions,
} from "@mui/icons-material"; // If you want, replace these with Heroicons or another Tailwind-compatible icon set

function SkillsTech() {
  const skills = [
    {
      title: "Languages",
      icon: <Code style={{ fontSize: 40, color: "#2e7d32" }} />,
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      title: "Frameworks",
      icon: <Build style={{ fontSize: 40, color: "#0288d1" }} />,
      items: ["React", "Next.js", "Vue (optional)"],
    },
    {
      title: "Styling",
      icon: <Brush style={{ fontSize: 40, color: "#d81b60" }} />,
      items: ["Tailwind CSS", "Sass", "Styled Components"],
    },
    {
      title: "Tools",
      icon: <Settings style={{ fontSize: 40, color: "#f57c00" }} />,
      items: ["Git", "Figma", "Vite", "Webpack", "VS Code"],
    },
    {
      title: "Other",
      icon: (
        <IntegrationInstructions style={{ fontSize: 40, color: "#8e24aa" }} />
      ),
      items: ["API integration", "REST", "GraphQL basics"],
    },
  ];

  return (
    <section className="bg-white px-4 md:px-16 py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-9xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl w-full max-w-[600px] h-44 flex flex-col items-center text-center shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="mb-2">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{skill.title}</h3>
            <p className="text-sm text-gray-600 mt-2">
              {skill.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsTech;
