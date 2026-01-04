import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Award,
  Database,
  Layers,
  Search,
  Zap,
  Star,
  FileBadge,
  BookOpen,
  Briefcase,
  User,
  Home,
  CheckCircle2,
  Phone,
  MapPin,
  MessageSquare,
} from "lucide-react";

// --- Space Theme Background ---
const SpaceBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#0F172A_0%,_#020617_100%)]">
    <div className="absolute inset-0 opacity-20">
      {[...Array(450)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: Math.random() * 2 + "px",
            height: Math.random() * 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDuration: Math.random() * 3 + 2 + "s",
          }}
        />
      ))}
    </div>
    <div className="night">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="shooting_star" />
      ))}
    </div>
    <style>{`
      .night { position: relative; width: 100%; height: 100%; transform: rotateZ(45deg); }
      .shooting_star {
        position: absolute; left: 50%; top: 50%; height: 2px;
        background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
        border-radius: 999px; filter: drop-shadow(0 0 6px #699bff);
        animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
      }
      @keyframes tail { 0% { width: 0; } 30% { width: 100px; } 100% { width: 0; } }
      @keyframes shooting { 0% { transform: translateX(0); } 100% { transform: translateX(300px); } }
      .shooting_star:nth-child(1) { top: 15%; left: 10%; animation-delay: 500ms; }
      .shooting_star:nth-child(2) { top: 40%; left: 60%; animation-delay: 1200ms; }
      .shooting_star:nth-child(3) { top: 70%; left: 20%; animation-delay: 2500ms; }
      .shooting_star:nth-child(4) { top: 25%; left: 80%; animation-delay: 1800ms; }
      .shooting_star:nth-child(5) { top: 55%; left: 30%; animation-delay: 3000ms; }
      .shooting_star:nth-child(6) { top: 80%; left: 70%; animation-delay: 800ms; }
      .shooting_star:nth-child(7) { top: 10%; left: 45%; animation-delay: 2200ms; }
      .shooting_star:nth-child(8) { top: 65%; left: 15%; animation-delay: 1400ms; }
    `}</style>
  </div>
);

const App = () => {
  const [view, setView] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeView = (newView) => {
    if (newView === view) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setView(newView);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 400);
  };

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: "Home" },
    { id: "about", icon: <User size={18} />, label: "About" },
    { id: "experience", icon: <Briefcase size={18} />, label: "Experience" },
    { id: "projects", icon: <Zap size={18} />, label: "Projects" },
    { id: "skills", icon: <Cpu size={18} />, label: "Skills" },
    { id: "contact", icon: <MessageSquare size={18} />, label: "Contact" },
  ];

  const experience = [
    {
      role: "Full Stack Web Developer & Assistant to Head",
      company: "Daily Delis Pvt Ltd",
      period: "Feb, 2025 - Present",
      details: [
        "Built and maintained full-stack web applications.",
        "Led a development team and ensured timely project delivery.",
        "Assisted the Head in strategic planning and execution.",
        "Drove innovation through new software ideas and solutions.",
        "Coordinated with cross-functional teams to meet business goals.",
      ],
    },
    {
      role: "Project Assistant",
      company: "SafalUday Foundation",
      period: "Feb 2025 - Feb 2025",
      details: [
        "Assisted in planning and execution of foundation projects.",
        "Coordinated with teams to ensure smooth project delivery.",
        "Managed documentation and maintained project records.",
        "Supported event organization and on-site logistics.",
        "Communicated with stakeholders and volunteers as needed.",
      ],
    },
    {
      role: "Graphic Designer & Web Developer Intern",
      company: "SafalUday Foundation",
      period: "April, 2024 - Feb 2025",
      details: [
        "Developed and maintained the official website for the foundation.",
        "Designed flyers, banners, and other promotional materials.",
        "Contributed to the visual branding of events and campaigns.",
        "Assisted in organizing and managing foundation events.",
        "Participated in outreach and on-ground event activities.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "The Media Buddy",
      period: "May 2023 - June 2023",
      details: [
        "Wrote and published blogs on the company website.",
        "Implemented on-page SEO techniques to boost rankings.",
        "Managed and updated content on WordPress websites.",
        "Assisted in optimizing website structure for better performance.",
        "Researched content trends to align blogs with audience interests.",
      ],
    },
  ];

  const education = [
    {
      degree: "Diploma in Computer Science & Engineering",
      school: "Integral University, Lucknow",
      period: "August 2023 - Present",
      status: "Current",
    },
    {
      degree: "Intermediate (High School)",
      school: "City Montessori School, Lucknow",
      period: "April 2020 - July 2021",
      status: "Completed",
    },
  ];

  const projects = [
    {
      title: "VitaSync",
      subtitle: "Google Developers Club’s Solution Challenge 2025",
      desc: "A platform to find nearby doctors, manage user profiles, book appointments, and upload medical documents. Built with strong emphasis on data privacy and user-friendly navigation.",
      tech: ["React", "Google Tech", "Responsive Design"],
      link: "#",
    },
    {
      title: "SafalUday Education & Welfare Society",
      desc: "Developed a responsive, SEO-optimized website with a secure admin panel for managing content and donor data. Enhanced user engagement with dynamic interactions.",
      tech: ["Laravel", "PHP", "Tailwind CSS", "jQuery", "AJAX", "MySQL"],
      link: "http://www.safaluday.org",
    },
    {
      title: "SirusTech",
      desc: "Engineered a fully responsive, SEO-friendly website with dynamic frontend features. Developed a secure Laravel admin panel for course and enrollment management.",
      tech: ["PHP", "MySQL", "Laravel", "jQuery", "AJAX"],
      link: "http://www.sirustech.org",
    },
    {
      title: "Sharma & Sharma Law Chambers",
      desc: "Created a client-facing frontend and admin panel for managing case updates and client inquiries. Focused on fast UX and streamlined management.",
      tech: ["Laravel", "Tailwind CSS", "PHP", "AJAX", "MySQL"],
      link: "http://www.saslawchambers.com",
    },
    {
      title: "AssetSphere",
      desc: "A code-snippet platform with user registration, authentication, and features for posting, browsing, and copying HTML, CSS, and JS snippets.",
      tech: ["Full Stack", "API Design", "Security"],
      link: "#",
    },
    {
      title: "CompanionAround",
      desc: "Responsive travel platform with user registration, profile management, and dynamic search/filtering to find tours based on preferences.",
      tech: ["Laravel", "PHP", "MySQL", "jQuery"],
      link: "#",
    },
    {
      title: "CraftConnect",
      desc: "Connecting freshers with companies to collaborate on real projects. Features project posting, user applications, and secure management.",
      tech: ["Laravel", "PHP", "MySQL", "AJAX", "Tailwind"],
      link: "#",
    },
  ];

  const certifications = [
    { name: "GDC On Campus Solution", issuer: "Google" },
    { name: "Web Analytics", issuer: "Accenture" },
    { name: "TCS ION Career Edge: IT for Non-IT", issuer: "TCS" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp" },
    { name: "Java Programming", issuer: "Great Learnings" },
    { name: "JavaScript Fundamentals", issuer: "Scalar" },
    { name: "Introduction to SEO", issuer: "CareerNinja" },
    { name: "Built a WordPress Website", issuer: "Coursera" },
  ];

  const skills = [
    { name: "JavaScript", icon: <Code2 className="text-yellow-400" /> },
    { name: "PHP", icon: <Terminal className="text-indigo-400" /> },
    { name: "Laravel", icon: <Cpu className="text-red-500" /> },
    { name: "Laravel Vapor", icon: <Layers className="text-pink-400" /> },
    { name: "AWS", icon: <Layers className="text-orange-400" /> },
    { name: "Docker", icon: <Globe className="text-blue-500" /> },
    { name: "MySQL", icon: <Database className="text-blue-400" /> },
    { name: "DBeaver", icon: <Database className="text-blue-200" /> },
    { name: "SEO", icon: <Search className="text-emerald-400" /> },
    { name: "Java", icon: <Cpu className="text-orange-600" /> },
    { name: "HTML/CSS", icon: <Layers className="text-cyan-400" /> },
    { name: "CMS", icon: <Globe className="text-purple-400" /> },
    { name: "Graphic Designing", icon: <Layers className="text-pink-300" /> },
  ];

  const contactDetails = [
    {
      label: "Direct Email",
      value: "khanmuba3@gmail.com",
      link: "mailto:khanmuba3@gmail.com",
      icon: <Mail className="text-blue-400" />,
    },
    {
      label: "Phone Line",
      value: "+91 91612 24477",
      link: "tel:+919161224477",
      icon: <Phone className="text-purple-400" />,
    },
    {
      label: "Current Base",
      value: "Lucknow, Uttar Pradesh, India",
      link: "#",
      icon: <MapPin className="text-emerald-400" />,
    },
  ];

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <SpaceBackground />

      {/* --- Satellite Navigation --- */}
      <header
        className="
    fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50
    flex items-center
    px-2 sm:px-4 py-2 sm:py-3
    bg-slate-900/50 backdrop-blur-3xl
    border border-white/10
    rounded-full shadow-2xl
    max-w-[calc(100%-1rem)] sm:max-w-none
  "
      >
        {/* Scroll container */}
        <nav
          className="
    flex items-center gap-1 sm:gap-2
    overflow-x-auto
    whitespace-nowrap
    no-scrollbar
    sm:overflow-visible
  "
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => changeView(item.id)}
              className={`
          relative group
          flex items-center justify-center
          gap-1.5 sm:gap-2
          px-3 sm:px-4
          py-2 sm:py-2.5
          rounded-full
          text-xs sm:text-sm
          transition-all duration-300
          shrink-0
          ${
            view === item.id
              ? "bg-blue-600 text-white"
              : "text-slate-400 hover:text-white hover:bg-white/10"
          }
        `}
            >
              {/* Icon */}
              <span className="text-base sm:text-lg">{item.icon}</span>

              {/* Label */}
              <span
                className={`
            font-black uppercase tracking-widest
            transition-all duration-300
            overflow-hidden
            ${
              view === item.id
                ? "max-w-[120px] opacity-100 ml-1.5"
                : "max-w-0 opacity-0"
            }
          `}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </header>

      {/* --- Content Area --- */}
      <main
        className={`max-w-7xl mx-auto px-6 pt-32 pb-20 transition-all duration-500 sm:pt-40 ${
          isTransitioning
            ? "opacity-0 scale-95 blur-md"
            : "opacity-100 scale-100 blur-0"
        }`}
      >
        {view === "home" && (
          <div className="min-h-[70vh] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-blue-500"></span>
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">
                Available for Collaboration
              </span>
            </div>
            <h1 className="text-[14vw] leading-[0.8] tracking-tighter font-black text-white sm:text-[11vw] lg:text-[9rem]">
              MUBA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                KHAN.
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-400 max-w-2xl mt-6 mb-10 sm:text-xl lg:text-2xl">
              Young & Passionate Full-Stack Web Developer. Bridging imagination
              with functional, scalable code.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={() => changeView("projects")}
                className="px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 w-full sm:w-auto text-center"
              >
                View Mission
              </button>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/muba-khan-55330a261/"
                  className="p-4 bg-white/5 rounded-full hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:khanmuba3@gmail.com"
                  className="p-4 bg-white/5 rounded-full hover:text-blue-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://github.com/Muba9161"
                  className="p-4 bg-white/5 rounded-full hover:text-blue-400 transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        )}

        {view === "about" && (
          <div className="animate-in fade-in slide-in-from-right-10 duration-700">
            <h2 className="text-5xl font-black text-white mb-12 tracking-tighter sm:text-6xl lg:text-7xl">
              THE ARCHITECT
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-10">
                <div className="space-y-6 text-lg text-slate-400 leading-relaxed sm:text-xl">
                  <p>
                    Recognized for sharp attention to detail and creative
                    problem-solving. I thrive in collaborative environments and
                    lead with initiative.
                  </p>
                  <p>
                    Specializing in{" "}
                    <span className="text-white font-bold">
                      Java, PHP, and JavaScript
                    </span>
                    , I build end-to-end solutions that meet the evolving needs
                    of businesses.
                  </p>
                </div>

                <div className="pt-8">
                  <h3 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8">
                    Education
                  </h3>
                  <div className="space-y-8">
                    {education.map((edu, i) => (
                      <div key={i} className="flex gap-4 sm:gap-6 group">
                        <div className="mt-1 p-3 bg-blue-600/10 rounded-xl flex-shrink-0">
                          <BookOpen className="text-blue-500" size={24} />
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg leading-tight sm:text-xl">
                            {edu.degree}
                          </div>
                          <div className="text-slate-500 text-sm uppercase tracking-widest font-bold mt-1">
                            {edu.school}
                          </div>
                          <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-blue-400/60 text-[10px] font-black uppercase tracking-widest mt-2">
                            {edu.period} • {edu.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em]">
                  Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="p-6 border border-white/5 bg-white/5 rounded-3xl hover:border-blue-500/50 transition-all group"
                    >
                      <FileBadge
                        className="text-blue-500 mb-4 group-hover:scale-110 transition-transform"
                        size={28}
                      />
                      <div className="text-white font-bold text-sm leading-tight mb-1">
                        {cert.name}
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">
                        {cert.issuer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "experience" && (
          <div className="animate-in fade-in slide-in-from-left-10 duration-700 max-w-5xl mx-auto">
            <h2 className="text-5xl font-black text-white mb-12 tracking-tighter sm:text-6xl">
              EXPERIENCE
            </h2>
            <div className="space-y-16">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="relative pl-10 border-l border-white/10 group sm:pl-12"
                >
                  <div className="absolute top-0 left-[-6px] w-3 h-3 bg-blue-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)] sm:left-[-8px] sm:w-4 sm:h-4"></div>
                  <div className="text-blue-400 text-xs font-black tracking-widest uppercase mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1 sm:text-3xl">
                    {exp.role}
                  </h3>
                  <div className="text-slate-500 font-bold mb-6 italic text-lg">
                    {exp.company}
                  </div>
                  <ul className="grid grid-cols-1 gap-4">
                    {exp.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex gap-4 text-slate-400 text-base leading-relaxed items-start"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-blue-500/50 mt-0.5 flex-shrink-0"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "projects" && (
          <div className="animate-in fade-in zoom-in duration-700">
            <h2 className="text-5xl font-black text-white mb-12 tracking-tighter sm:text-6xl">
              MY PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 sm:p-12 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[80px] group-hover:bg-blue-500/20"></div>
                  {project.subtitle && (
                    <div className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
                      {project.subtitle}
                    </div>
                  )}
                  <h3 className="text-3xl font-black text-white mb-4 leading-tight sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-8 text-base">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-white/5 rounded-full border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-blue-400 hover:text-white transition-colors"
                  >
                    Access Link <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "skills" && (
          <div className="animate-in fade-in slide-in-from-top-10 duration-700">
            <h2 className="text-5xl font-black text-white mb-12 tracking-tighter sm:text-6xl">
              MY SKILLS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-10 bg-white/5 border border-white/5 rounded-[3rem] flex flex-col items-center gap-6 hover:bg-blue-600/10 hover:border-blue-500 transition-all duration-500 group"
                >
                  <div className="p-6 bg-slate-950 rounded-3xl group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 shadow-xl shadow-black/40">
                    {React.cloneElement(skill.icon, { size: 36 })}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === "contact" && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h2 className="text-5xl font-black text-white mb-12 tracking-tighter uppercase sm:text-6xl">
              CONTACT ME
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {contactDetails.map((contact, i) => (
                <a
                  key={i}
                  href={contact.link}
                  className="group p-8 sm:p-10 bg-white/5 border border-white/5 rounded-[3rem] hover:border-blue-500/50 hover:bg-blue-600/5 transition-all duration-500 flex flex-col gap-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    {React.cloneElement(contact.icon, { size: 28 })}
                  </div>
                  <div>
                    <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">
                      {contact.label}
                    </h4>
                    <p className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors sm:text-2xl">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-16 sm:mt-20 p-10 sm:p-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-[3rem] sm:rounded-[4rem] border border-white/5 text-center">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter italic sm:text-4xl">
                Let's build the future together.
              </h3>
              <p className="text-slate-400 text-base sm:text-lg mb-8">
                Drop a line or schedule a call to discuss your next mission.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/muba-khan-55330a261/"
                  className="px-8 py-4 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all w-full sm:w-auto text-center"
                >
                  LinkedIn Connect
                </a>
                <a
                  href="mailto:khanmuba3@gmail.com"
                  className="px-8 py-4 border border-white/10 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all w-full sm:w-auto text-center"
                >
                  Direct Signal
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* --- Footer --- */}
      <footer className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
        <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <h4 className="text-2xl font-black text-white mb-2 tracking-tighter">
              MUBA KHAN
            </h4>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600 italic">
              Lucknow &bull; 2025 Station
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
            <a
              href="mailto:khanmuba3@gmail.com"
              className="text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/muba-khan-55330a261/"
              className="text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Muba9161"
              className="text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
