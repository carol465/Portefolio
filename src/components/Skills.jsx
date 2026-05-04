import SkillCard from './Skills/SkillCard';
import { BookOpen, BowArrow, Handshake, ScrollText, Swords, Shield } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    { 
      title: <>Back-end <br/> & Data</>,
      icon: <BookOpen size={80} strokeWidth={1.5} color="white"/>, 
      level: "INT",
      subSkills: ["PYTHON", "JAVASCRIPT", "C#", "ASP.NET MVC", "MYSQL"] 
    },
    { 
      title: <>Front-end</>,
      icon: <BowArrow size={80} strokeWidth={1.5} color="white"/>, 
      level: "DEX",
      subSkills: ["REACT", "FIGMA", "HTML", "TAILWIND CSS"]
    },
    { 
      title: <>Soft Skills</>,
      icon: <Handshake size={80} strokeWidth={1.5} color="white"/>, 
      level: "CHA",
      subSkills: ["SCRUM", "ENGLISH B2","BSIDE SOFT SKILLS", "UI/UX"]
    },
    { 
      title: <>Engineering</>,
      icon: <ScrollText size={80} strokeWidth={1.5} color="white"/>, 
      level: "WIS",
      subSkills: ["ENGINEERING", "TEXTILE", "QUALITY PRODUCTION" ]
    },
    { 
      title: <>Core Tools</>,
      icon: <Swords size={80} strokeWidth={1.5} color="white"/>, 
      level: "STR",
      subSkills: [ "GIT/GITHUB", "EXCEL", "COMPUTER HARDWARE"]
    },
    { 
      title: <>Experience</>,
      icon: <Shield size={80} strokeWidth={1.5} color="white"/>, 
      level: "CON",
      subSkills: ["TEXTILE INDUSTRY", "SOCIAL MEDIA MANAGER"]
    },
  ];

return (
  <section className="min-h-screen bg-[#0a0a0a] pt-20 pb-20 px-6 md:px-20 flex flex-col items-center overflow-hidden">
      
      <h2 className="font-bebas text-5xl md:text-8xl mb-10 text-white flex items-center justify-center gap-3">
        <span className="drop-shadow-[0px_4px_0px_#9747ff]">Technical</span>
        <span className="text-purple">Skills</span>
      </h2>

      <img
        src="/images/skills.svg"
        alt="Decorative illustration for the Technical Skills section"
        className="mx-auto h-auto w-full max-w-[90%] md:max-w-[1000px] mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-0 max-w-[1200px] justify-items-center">
        {skillsData.map((skill) => (
          <div key={skill.level} className="transform scale-75 md:scale-90 origin-center">
            <SkillCard 
              title={skill.title}
              icon={skill.icon} 
              level={skill.level}
              subSkills={skill.subSkills} 
            />
          </div>
        ))}
      </div>
  </section>
);
};

export default Skills;