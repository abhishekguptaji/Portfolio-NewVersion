import React from "react";

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      items: [
        
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", scale: "scale-125" },
        {name:"C++",icon:"https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"},
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", scale: "scale-125" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      ],
    },
    {
      category: "Frameworks and Libraries",
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Pandas", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
        { name: "Numpy", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1a/NumPy_logo.svg" },
        { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
        { name: "Laravel", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git/GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Dev C++", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Dev-C%2B%2B_Logo.png" },
        {name:"C++",icon:"https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"}
      ],
    },
  ];

  return (
    <>
    <section
  id="skills"
  className="pt-20 pb-20  relative "
>
  <div className="max-w-6xl mx-auto px-6 text-center">
    <p className="text-gray-600 mb-12">
      Here are some of the technologies I’m proficient in.
    </p>

    {skillsData.map((category, index) => (
      <div key={index} className="skills-category mb-14">
        <h3 className="text-2xl font-semibold mb-8 text-indigo-600">
          {category.category}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {category.items.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card bg-gray-100 hover:bg-indigo-50 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`skill-icon w-20 h-20 mb-3 object-contain ${skill.scale || ""}`}
                loading="lazy"
              />
              <p className="text-gray-800 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

    
    </>
  );
};

export default Skills;
