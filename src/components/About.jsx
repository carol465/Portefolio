import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-dark text-white flex flex-col items-center py-20 px-6">
        <h2 className="font-bebas text-5xl md:text-7xl mb-10 text-white flex items-center justify-center gap-3">
        <span className="drop-shadow-[0px_4px_0px_#DC92FF]">About</span>
        <span className="text-purple">Me</span>
        </h2>
      
      <p className="opacity-60 font-gentium text-lg md:text-xl mb-12 text-center">
        A glimpse into my journey from Engineering to Tech
      </p>

      <div className="w-full max-w-4xl bg-white/3 border border-white/10 backdrop-blur-md rounded-[32px] p-8 md:p-12 shadow-2xl">
        
        <div className="space-y-8 font-gentium text-white/80 opacity-90 text-lg md:text-xl leading-relaxed text-justify">
          
          <p>
            I’m <span className="font-bold text-white/80">Carolina Pereira</span>, a former Textile Engineer from Portugal transitioning into the world of <span className="text-[#DC92FF]">Data Analytics</span>. My background in R&D and process optimization taught me how to solve complex problems; now, I use code to do it at scale.
          </p>

          <p>
            Every day, I bridge the gap between physical efficiency and digital insights. Having completed a rigorous <span className="text-white font-medium">1,200+ hour</span> software development program, I’ve built a solid foundation in <span className="text-[#A192FF]">Python, SQL and C#</span>, alongside modern front-end technologies like React, HTML and Tailwind CSS.
          </p>

          <p>
            My goal isn’t just to process data—it’s to transform complex variables into <span className="text-[#DC92FF]">actionable, clean, and impactful insights</span>. I’m driven by a logical mindset and the resilience gained from years in high-pressure engineering environments.
          </p>

          <p className="text-purple-400/80 font-medium pt-4 text-center italic">
            "I’m analytical, results-driven, and ready to build the future of data-informed decision-making."
          </p>
          
        </div>
      </div>

    </section>
  );
};

export default About;