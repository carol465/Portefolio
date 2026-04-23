import React from 'react';
import SkillCard from './Skills/SkillCard';
import { BookOpen, BowArrow, Handshake, ScrollText, Swords, Shield } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    { 
      icon: <BookOpen size={90} strokeWidth={1.5} color="white"/>, 
      level: "INT",
      subSkills: ["PYTHON", "JAVASCRIPT", "C#", "ASP.NET MVC", "MYSQL"] 
    },
    { 
      icon: <BowArrow size={90} strokeWidth={1.5} color="white"/>, 
      level: "DEX",
      subSkills: ["REACT", "FIGMA", "HTML", "TAILWIND CSS"]
    },
    { 
      icon: <Handshake size={90} strokeWidth={1.5} color="white"/>, 
      level: "CHA",
      subSkills: ["SCRUM", "ENGLISH B2", "UI/UX"]
    },
    { 
      icon: <ScrollText size={90} strokeWidth={1.5} color="white"/>, 
      level: "WIS",
      subSkills: ["ENGINEERING", "TEXTILE", "SOCIAL MEDIA"]
    },
    { 
      icon: <Swords size={90} strokeWidth={1.5} color="white"/>, 
      level: "STR",
      subSkills: [ "GIT/GITHUB", "EXCEL", "COMPUTER HARDWARE"]
    },
    { 
      icon: <Shield size={90} strokeWidth={1.5} color="white"/>, 
      level: "CON",
      subSkills: ["BSIDE SOFT SKILLS", "INDUSTRIAL EXPERIENCE"]
    },
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] py-20 px-10 flex flex-col items-center">
        <h2 className="font-bebas text-5xl md:text-8xl mb-10 text-white flex items-center justify-center gap-3">
        <span className="drop-shadow-[0px_4px_0px_#9747ff]">Technical</span>
        <span className="text-purple">Skills</span>
        </h2>

      <img 
      src="/images/skills.svg" 
      alt="skills" 
      className="mx-auto h-auto w-full max-w-[90%] md:max-w-[1100px] -mt-3 md:-mt-5 mb-14"    
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px]">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index} 
            icon={skill.icon} 
            level={skill.level}
            subSkills={skill.subSkills} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;