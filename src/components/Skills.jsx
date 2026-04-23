import React from 'react';
import SkillCard from './Skills/SkillCard';

const Skills = () => {
  // Lista de skills, cada uma com seu próprio ícone
  const skillsData = [
    { icon: "⚛️", level: "INT"},
    { icon: "🟢", level: "DEX"},
    { icon: "🟨", level: "CHA"},
    { icon: "🌊" , level: "WIS"},
    { icon: "🎨", level: "STR"},
    { icon: "🧡", level: "CON"},
  ];

  return (
    <section id="skills" className="min-h-screen w-full bg-dark text-white flex flex-col items-center py-20 px-6">
      
      <h2 className="font-bebas text-5xl md:text-8xl mb-16 text-white flex items-center justify-center gap-3">
        <span className="drop-shadow-[0px_4px_0px_#DC92FF]">Technical</span>
        <span className="text-purple">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index} 
            icon={skill.icon}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;