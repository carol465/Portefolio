import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const yourEmail = "carolina.r.pereira98@gmail.com";

const handleEmailClick = () => {
  const subject = encodeURIComponent("Contato via Portfólio");
  const body = encodeURIComponent("Olá Carolina, ...");
  
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${body}`;
  
  window.open(gmailUrl, '_blank');
};

  const GithubIcon = () => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
    </svg>
  );

  return (
    <section id="contact" className="min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center py-20 px-6 font-sans">
        <h2 className="font-bebas text-5xl md:text-8xl mb-10 text-white flex items-center justify-center gap-3">
        <span className="drop-shadow-[0px_4px_0px_#9747ff]">GET IN</span>
        <span className="text-purple">TOUCH</span>
        </h2>

      <img 
        src="/images/contact.svg" 
        alt="contact" 
        className="mx-auto h-auto w-full max-w-[90%] md:max-w-[1000px] mb-16"    
      />

      <div className="flex justify-center mb-12">
        <button onClick={handleEmailClick} className="flex items-center font-bebas gap-3 bg-violet hover:bg-purple transition-all px-8 py-4 rounded-xl text-xl shadow-lg">
          <Send className="w-5 h-5 -rotate-45" />
          Send Me an Email
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-12 border-t border-white/5 w-full max-w-4xl">
        <SocialCard icon={<GithubIcon />} label="GitHub" link="https://github.com/carol465" />
        <SocialCard icon={<LinkedinIcon />} label="LinkedIn" link="https://www.linkedin.com/in/carolina-r-pereira" />
        <SocialCard icon={<Mail />} label="Email" onClick={handleEmailClick} />
      </div>
    </section>
  );
};

const SocialCard = ({ icon, label, link, onClick }) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all group cursor-pointer h-full">
      <span className="text-2xl text-gray-400 group-hover:text-white">{icon}</span>
      <span className="text-sm font-medium text-gray-300">{label}</span>
    </div>
  );
  
  return onClick ? (
    <button className="w-full" onClick={onClick}>{content}</button>
  ) : (
    <a href={link} target="_blank" rel="noreferrer" className="w-full">{content}</a>
  );
};

export default Contact;