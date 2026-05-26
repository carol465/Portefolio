import { ExternalLink } from 'lucide-react';
import { SiHackerrank, SiCisco } from 'react-icons/si';

const certificates = [
  {
    institution: "Harvard University",
    logo: "/images/logos/harvard.webp",
    logoBg: "bg-white",
    name: "CS50's Introduction to Programming with Python",
    year: "2026",
    pdf: "/certificates/cert_harvard_cs50p.pdf",
  },
  {
    institution: "Harvard University",
    logo: "/images/logos/harvard.webp",
    logoBg: "bg-white",
    name: "Introduction to Databases with SQL",
    year: "2025",
    pdf: "/certificates/cert_harvard_cs50_sql.pdf",
  },
  {
    institution: "HackerRank",
    icon: SiHackerrank,
    iconBg: "bg-[#00EA64] text-[#1a1a1a]",
    name: "JavaScript Basic",
    year: "2026",
    pdf: "/certificates/cert_hackerrank_js.pdf",
  },
  {
    institution: "Cisco Networking Academy",
    icon: SiCisco,
    iconBg: "bg-[#1BA0D7] text-white",
    name: "HTML Essentials",
    year: "2026",
    pdf: "/certificates/cert_cisco_html.pdf",
  },
  {
    institution: "Cisco Networking Academy",
    icon: SiCisco,
    iconBg: "bg-[#1BA0D7] text-white",
    name: "Operating Systems Basics",
    year: "2025",
    pdf: "/certificates/cert_cisco_os_basics.pdf",
  },
  {
    institution: "Citeforma",
    logo: "/images/logos/citeforma.png",
    logoBg: "bg-white",
    name: "Websites with Wordpress and Elementor",
    year: "2025",
    pdf: "/certificates/cert_citeforma_wordpress.pdf",
  },
  {
    institution: "OERN",
    logo: "/images/logos/oern.png",
    logoBg: "bg-white",
    name: "Web & Social Media Content Management",
    year: "2022",
    pdf: "/certificates/cert_oern_social_media.pdf",
  },
];

const InstitutionLogo = ({ cert }) => {
  if (cert.icon) {
    return (
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cert.iconBg}`}>
        <cert.icon size={26} />
      </div>
    );
  }
  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-1.5 overflow-hidden ${cert.logoBg}`}>
      <img
        src={cert.logo}
        alt={cert.institution}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="min-h-screen w-full bg-dark text-white flex flex-col items-center py-20 px-6">
      <h2 className="font-bebas text-5xl md:text-8xl mb-10 text-white flex items-center justify-center gap-3">
        <span className="drop-shadow-[0px_4px_0px_#9747ff]">My</span>
        <span className="text-purple">Certifications</span>
      </h2>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#9747ff]/50 transition-all duration-300 group"
          >
            <InstitutionLogo cert={cert} />

            <div className="flex flex-col gap-1 flex-1">
              <p className="text-white text-base leading-snug group-hover:text-purple transition-colors duration-300">
                {cert.name}
              </p>
              <p className="text-white/50 text-sm">{cert.institution}</p>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                {cert.year}
              </span>

              {cert.pdf && (
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate: ${cert.name}`}
                  className="flex items-center gap-1.5 text-xs text-white/40 hover:text-purple transition-colors duration-200"
                >
                  <ExternalLink size={13} />
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
