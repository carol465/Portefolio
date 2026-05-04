const paragraphs = [
  <>
    I'm <span className="font-bold text-white">Carolina Pereira</span>, a Textile Engineer from Portugal with a{' '}
    <span className="font-bold text-white">Master's degree from the University of Minho</span>, now building a career in{' '}
    <span className="font-bold text-purple">Software Development</span>. Years of R&D and process optimization taught me
    how to break down complex problems — I just do it with code now.
  </>,
  <>
    I've completed a <span className="text-purple font-medium">1,200+ hour</span> software development programme, where I
    built a solid foundation in <span className="font-bold text-purple">Python, SQL, ASP.NET and C#</span>, alongside
    front-end technologies like <span className="font-bold text-purple">React, HTML and Tailwind CSS</span>. Every project
    I take on, I bring the same rigour I applied in engineering.
  </>,
  <>
    What drives me is turning messy, complex data into something{' '}
    <span className="font-bold text-purple">clear and actionable</span>. I'm methodical by nature and resilient by
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
