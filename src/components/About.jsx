const paragraphs = [
  <>
    I'm <span className="text-white">Carolina Pereira</span>, a Textile Engineer from Portugal with a{' '}
    <span className="text-white">Master's degree from the University of Minho</span>, now building a career in{' '}
    <span className="text-purple">Software Development</span>. Years of R&D and process optimization taught me
    how to break down complex problems — I just do it with code now.
  </>,
  <>
    My engineering path spans <span className="text-white">6 years</span>: a Master's at Minho (2016–2022)
    focused on textile materials and product development, followed by{' '}
    <span className="text-white">2+ years as a Textile Engineer at Lameirinho</span>. There I optimized dyeing
    processes for <span className="text-purple">32 production batches</span>, achieving an{' '}
    <span className="text-purple">18% improvement in reproducibility</span> between lab and production scales,
    and provided technical support to{' '}
    <span className="text-purple">5 textile startups</span> through the{' '}
    <em>Test Beds — Textile of the Future</em> initiative.
  </>,
  <>
    I've completed a <span className="text-purple">1,200+ hour</span> software development programme, where I
    built a solid foundation in <span className="text-purple">Python, SQL, ASP.NET and C#</span>, alongside
    front-end technologies like <span className="text-purple">React, HTML and Tailwind CSS</span>. Every project
    I take on, I bring the same rigour I applied in engineering.
  </>,
  <>
    What drives me is turning messy, complex data into something{' '}
    <span className="text-purple">clear and actionable</span>. I'm methodical by nature and resilient by
    experience — two things that transfer well from the factory floor to the codebase.
  </>,
];

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-dark text-white flex flex-col items-center py-20 px-6">
      <h2 className="font-bebas text-5xl md:text-8xl mb-10 text-white flex items-center justify-center gap-3">
        <span className="drop-shadow-[0px_4px_0px_#9747ff]">About</span>
        <span className="text-purple">Me</span>
      </h2>

      <img
        src="/images/about.svg"
        alt="Ilustração sobre Carolina Pereira"
        className="mx-auto h-auto w-full max-w-[90%] md:max-w-[1000px] mb-8 md:mb-16"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      <div className="w-full max-w-4xl bg-white/3 border border-white/10 backdrop-blur-md rounded-[32px] p-8 md:p-12 shadow-2xl">
        <div className="space-y-8 font-gentium text-white/80 opacity-90 text-lg md:text-xl leading-relaxed text-justify">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
