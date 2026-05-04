const About = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-dark text-white flex flex-col items-center py-20 px-6">
        <h2 className="font-bebas text-5xl md:text-8xl mb-10 text-white flex items-center justify-center gap-3">
        <span className="drop-shadow-[0px_4px_0px_#9747ff]">About</span>
        <span className="text-purple">Me</span>
        </h2>
    

      <img
        src="/images/about.svg"
        alt="Decorative illustration for the About section"
        className="mx-auto h-auto w-full max-w-[90%] md:max-w-[1000px] mb-16"
      />

      <div className="w-full max-w-4xl bg-white/3 border border-white/10 backdrop-blur-md rounded-[32px] p-8 md:p-12 shadow-2xl">
        
        <div className="space-y-8 font-gentium text-white/80 opacity-90 text-lg md:text-xl leading-relaxed text-justify">
          
          <p>
            I’m <span className="font-bold text-white">Carolina Pereira</span>, a former Textile Engineer from Portugal transitioning into the world of <span className="font-bold text-purple">Programming Development</span>. I hold a <span className="font-bold text-white">Master’s degree in Textile Engineering</span> from the <span className="font-bold text-white">University of Minho</span>, and my background in R&D and process optimization taught me how to solve complex problems; now, I use code to do it at scale.
          </p>

          <p>
            Every day, I bridge the gap between physical efficiency and digital insights. Having completed a rigorous <span className="text-purple font-medium">1,200+ hour</span> software development program, I’ve built a solid foundation in <span className="font-bold text-purple">Python, SQL, ASP.NET and C#</span>, alongside modern front-end technologies like <span className="font-bold text-purple">React, HTML and Tailwind CSS</span> .
          </p>

          <p>
            My goal isn’t just to process data—it’s to transform complex variables into <span className="font-bold text-purple">actionable, clean, and impactful insights</span>. I’m driven by a logical mindset and the resilience gained from years in high-pressure engineering environments.
          </p>
          
        </div>
      </div>

    </section>
  );
};

export default About;