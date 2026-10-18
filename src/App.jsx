import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Terminal,
  Cloud,
  Network,
  LockKeyhole,
  Fingerprint,
  ExternalLink,
  Code2,
  Mail,
  ArrowUpRight,
  GraduationCap,
  Award,
  BriefcaseBusiness,
  Target,
} from "lucide-react";
import "./App.css";

export default function App() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const transitionTimerRef = useRef(null);

  const [entered, setEntered] = useState(false);
  const [page, setPage] = useState("intro");
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [page]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return undefined;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= 14) {
        audio.pause();
        audio.currentTime = 0;
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.pause();

      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  async function enterWorld() {
    setEntered(true);

    const audio = audioRef.current;
    const video = videoRef.current;

    if (audio) {
      audio.currentTime = 0;

      try {
        await audio.play();
      } catch {
        // The portfolio still works if audio playback is blocked.
      }
    }

    if (video) {
      video.currentTime = 0;
      video.playbackRate = 0.7;
      try {
        await video.play();
      } catch {
        // The welcome screen remains available if video playback fails.
      }
    }
  }

  function explorePortfolio() {
    if (page !== "intro") return;

    setPage("transitioning");

    transitionTimerRef.current = window.setTimeout(() => {
      setPage("about");
    }, 650);
  }

  function continueFromAbout() {
    setPage("projects");
  }

  function continueFromProjects() {
    setPage("career");
  }

  function continueFromCareer() {
    setPage("contact");
  }

  return (
    <>
      {(page === "intro" || page === "transitioning") && (
        <main
          className={`portfolio ${
            entered ? "entered" : ""
          } ${page === "transitioning" ? "transition-out" : ""}`}
        >
          <div className="ambient ambient-one" />
          <div className="ambient ambient-two" />

          <video
            ref={videoRef}
            className={`intro-video ${entered ? "visible" : ""}`}
            src={`${import.meta.env.BASE_URL}videos/intro.mp4`}
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
          />

          <audio
            ref={audioRef}
            src={`${import.meta.env.BASE_URL}audios/into%20music%202.mp3`}
            preload="metadata"
          />

          <div
            className={`scanlines ${
              entered && page === "intro" ? "hidden" : ""
            }`}
          />

          {!entered && (
            <section className="entry-screen">
              <div className="status">
                <span className="status-dot" />
                SYSTEM ONLINE
              </div>

              <div className="shield">
                <ShieldCheck size={35} strokeWidth={1.3} />
              </div>

              <p className="eyebrow">A CYBERSECURITY EXPERIENCE</p>

              <h1>
                ENTER THE
                <span> DIGITAL WORLD</span>
              </h1>

              <p className="description">
                Exploring cybersecurity. Building a safer digital future.
              </p>

              <button className="enter-button" onClick={enterWorld}>
                <span>ENTER THE WORLD</span>
                <ArrowRight size={18} />
              </button>

              <p className="hint">CLICK TO BEGIN YOUR EXPERIENCE</p>

              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />
            </section>
          )}

          {entered && (
            <section className="welcome-content">
              <p className="eyebrow">WELCOME TO MY DIGITAL WORLD</p>

              <p className="signature-name">Hemanth Venkata Ayyangar</p>

              <p>Cybersecurity &amp; Cloud Security Enthusiast</p>

              <button
                className="enter-button"
                onClick={explorePortfolio}
                disabled={page === "transitioning"}
              >
                <span>EXPLORE PORTFOLIO</span>
                <ArrowRight size={18} />
              </button>
            </section>
          )}
        </main>
      )}

      {/* ABOUT SCREEN */}
      {page === "about" && (
        <section id="about" className="about-section about-visible">
          <div className="about-grid-bg" />
          <div className="about-glow about-glow-one" />
          <div className="about-glow about-glow-two" />

          <nav className="cyber-nav">
            <a className="cyber-logo" href="#about">
              <ShieldCheck size={23} />
              <span>
                HVA<span className="gold">.SECURITY</span>
              </span>
            </a>

            <div className="cyber-nav-status">
              <span className="status-dot" />
              PORTFOLIO SYSTEM ONLINE
            </div>

            <span className="nav-index">01 / ABOUT</span>
          </nav>

          <div className="about-layout">
            <div className="about-copy">
              <div className="section-kicker">
                <span className="kicker-line" />
                PERSONAL PROFILE
              </div>

              <h1 className="about-heading">
                BEYOND
                <br />
                THE <span className="gold-text">SCREEN.</span>
              </h1>

              <p className="about-lead">
                Hi I'm Hemanth Venkata Ayyangar Narayanam
              </p>

              <p className="about-role">
                COMPUTER SCIENCE ENGINEERING STUDENT
                <span className="role-divider"> / </span>
                CYBERSECURITY ENTHUSIAST
              </p>

              <div className="about-rule" />

              <p className="about-description">
                I'm a third-year Computer Science and Engineering student at
                S.R.K. Institute of Technology, exploring the world of
                cybersecurity, cloud security, and computer networks.
              </p>

              <p className="about-description">
                Through continuous learning and hands-on projects, I'm working
                towards building secure digital solutions and gaining practical
                experience with real-world challenges.
              </p>

              <div className="about-tags">
                <span>
                  <LockKeyhole size={14} />
                  CYBERSECURITY
                </span>

                <span>
                  <Cloud size={14} />
                  CLOUD SECURITY
                </span>

                <span>
                  <Network size={14} />
                  NETWORKING
                </span>
              </div>

              <button className="cyber-continue" onClick={continueFromAbout}>
                <span>VIEW MY PROJECTS</span>
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="about-visual">
              <div className="visual-topline">
                <span>SECURITY MODULE</span>
                <span>SYS.001</span>
              </div>

              <div className="security-core">
                <div className="core-ring ring-outer" />
                <div className="core-ring ring-middle" />
                <div className="core-ring ring-inner" />

                <div className="core-crosshair crosshair-horizontal" />
                <div className="core-crosshair crosshair-vertical" />

                <div className="core-center">
                  <Fingerprint size={74} strokeWidth={1} />
                  <span>IDENTITY VERIFIED</span>
                </div>

                <span className="orbit-label orbit-label-top">ENCRYPTION</span>

                <span className="orbit-label orbit-label-right">DEFENCE</span>

                <span className="orbit-label orbit-label-bottom">SECURITY</span>

                <span className="orbit-label orbit-label-left">NETWORK</span>
              </div>

              <div className="terminal-panel">
                <div className="terminal-header">
                  <Terminal size={15} />
                  <span>HEMANTH@PORTFOLIO:~</span>
                  <span className="terminal-live">LIVE</span>
                </div>

                <div className="terminal-content">
                  <p>
                    <span className="terminal-green">root@hva</span>:~$ whoami
                  </p>

                  <p className="terminal-output">Cybersecurity Learner</p>

                  <p>
                    <span className="terminal-green">root@hva</span>:~$ focus
                    --list
                  </p>

                  <p className="terminal-output">[+] Cloud Security</p>
                  <p className="terminal-output">[+] Network Defence</p>
                  <p className="terminal-output">[+] Secure Systems</p>

                  <p>
                    <span className="terminal-green">root@hva</span>:~${" "}
                    <span className="terminal-cursor">_</span>
                  </p>
                </div>
              </div>

              <div className="visual-corner visual-corner-one" />
              <div className="visual-corner visual-corner-two" />
              <div className="visual-corner visual-corner-three" />
              <div className="visual-corner visual-corner-four" />
            </div>
          </div>

          <footer className="cyber-footer">
            <span>HVA // DIGITAL PORTFOLIO</span>
            <span>LEARN. BUILD. SECURE.</span>
            <span>EST. {new Date().getFullYear()}</span>
          </footer>
        </section>
      )}

      {/* PROJECTS SCREEN */}
      {page === "projects" && (
        <section className="projects-section">
          <div className="about-grid-bg" />
          <div className="about-glow about-glow-one" />
          <div className="about-glow about-glow-two" />

          <nav className="cyber-nav">
            <a
              className="cyber-logo"
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                setPage("about");
              }}
            >
              <ShieldCheck size={23} />
              <span>
                HVA<span className="gold">.SECURITY</span>
              </span>
            </a>

            <div className="cyber-nav-status">
              <span className="status-dot" />
              PROJECT MODULE ONLINE
            </div>

            <span className="nav-index">02 / PROJECTS</span>
          </nav>

          <div className="projects-content" id="projects">
            <div className="section-kicker">
              <span className="kicker-line" />
              PROJECTS
            </div>

            <h1 className="projects-heading">
              BUILDING
              <br />
              <span className="gold-text">THE FUTURE.</span>
            </h1>

            <p className="projects-intro">
              Projects driven by curiosity, technology, and the goal of solving
              real-world problems.
            </p>

            <div className="project-grid">
              <article className="project-card">
                <div className="project-card-top">
                  <div className="project-icon">
                    <ShieldCheck size={30} />
                  </div>
                  <span className="project-number">PROJECT_01</span>
                </div>

                <p className="project-category">
                  CYBERSECURITY / WEB DEVELOPMENT
                </p>

                <h2>Awareness on Cyber Safety</h2>

                <p className="project-description">
                  An awareness website designed to help people recognize
                  phishing attacks, OTP fraud, malware, fake websites, and
                  common online scams.
                </p>

                <div className="project-tags">
                  <span>Cyber Safety</span>
                  <span>Web Development</span>
                  <span>Awareness</span>
                </div>

                <a
                  className="project-link"
                  href="https://hemanthayyangar-lgtm.github.io/cyber-safety-awareness/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>EXPLORE PROJECT</span>
                  <ExternalLink size={16} />
                </a>
              </article>

              <article className="project-card">
                <div className="project-card-top">
                  <div className="project-icon">
                    <Code2 size={30} />
                  </div>
                  <span className="project-number">PROJECT_02</span>
                </div>

                <p className="project-category">
                  ARTIFICIAL INTELLIGENCE / ROBOTICS
                </p>

                <h2>AI-Based Smart Firefighting and Rescue Robot</h2>

                <p className="project-description">
                  A smart robotics concept focused on assisting firefighting and
                  rescue operations through intelligent fire detection, rapid
                  response, and support in hazardous environments.
                </p>

                <div className="project-tags">
                  <span>Artificial Intelligence</span>
                  <span>Robotics</span>
                  <span>Fire Safety</span>
                </div>

                <div className="project-link project-link-static">
                  <span>PROJECT OVERVIEW</span>
                  <ArrowRight size={16} />
                </div>
              </article>
            </div>

            <div className="projects-bottom">
              <button
                className="projects-back"
                onClick={() => setPage("about")}
              >
                <ArrowLeft size={16} />
                <span>BACK TO ABOUT</span>
              </button>

              <button
                className="projects-back"
                onClick={() => setPage("career")}
              >
                <ShieldCheck size={16} />
                <span>CAREER PROFILE</span>
                <ArrowRight size={16} />
              </button>

              <button
                className="projects-back"
                onClick={() => setPage("contact")}
              >
                <span>CONTACT ME</span>
                <ArrowUpRight size={15} />
              </button>

              <span className="projects-footer-note">
                MORE IDEAS. MORE BUILDS. MORE IMPACT.
              </span>
            </div>
          </div>

          <footer className="cyber-footer">
            <span>HVA // DIGITAL PORTFOLIO</span>
            <span>LEARN. BUILD. SECURE.</span>
            <span>EST. {new Date().getFullYear()}</span>
          </footer>
        </section>
      )}

      {/* CAREER PROFILE SCREEN */}
      {page === "career" && (
        <section className="career-section">
          <div className="about-grid-bg" />

          <nav className="cyber-nav">
            <a
              className="cyber-logo"
              href="#career"
              onClick={(event) => {
                event.preventDefault();
                setPage("about");
              }}
            >
              <ShieldCheck size={23} />
              <span>
                HVA<span className="gold">.SECURITY</span>
              </span>
            </a>

            <div className="cyber-nav-status">
              <span className="status-dot" />
              CAREER MODULE ONLINE
            </div>

            <span className="nav-index">03 / CAREER</span>
          </nav>

          <div className="career-content" id="career">
            <div className="section-kicker">
              <span className="kicker-line" />
              PROFESSIONAL JOURNEY
            </div>

            <h1 className="career-heading">
              MY CAREER
              <br />
              <span>PROFILE.</span>
            </h1>

            <p className="career-intro">
              My education, technical interests, and continuous learning journey
              as a Computer Science and Engineering student.
            </p>

            <div className="career-grid">
              <article className="career-card">
                <div className="career-card-icon">
                  <GraduationCap size={32} />
                </div>

                <h2>Education</h2>

                <p>
                  <strong>B.Tech — Computer Science and Engineering</strong>
                </p>

                <p>S.R.K. Institute of Technology</p>
                <p>Andhra Pradesh, India</p>
                <p>Currently pursuing third year.</p>
              </article>

              <article className="career-card">
                <div className="career-card-icon">
                  <Code2 size={30} />
                </div>

                <h2>Technical Interests &amp; Skills</h2>

                <p>
                  Developing my knowledge through coursework, hands-on learning,
                  and personal projects.
                </p>

                <div className="career-list">
                  <span>Cybersecurity</span>
                  <span>Cloud Security</span>
                  <span>Computer Networking</span>
                </div>
              </article>

              <article className="career-card">
                <div className="career-card-icon">
                  <Award size={32} />
                </div>

                <h2>Certifications &amp; Courses</h2>

                <p>
                  <strong>Cisco</strong> — Introduction to Cybersecurity
                </p>

                <p>
                  <strong>Cisco</strong> — Networking Basics
                </p>

                <p>
                  <strong>Google Cloud</strong> — Generative AI course
                </p>

                <p>
                  <strong>Google Cloud</strong> — Cybersecurity Certificate
                  [course in progress...]
                </p>
              </article>

              <article className="career-card">
                <div className="career-card-icon">
                  <Target size={32} />
                </div>

                <h2>Career Goal</h2>

                <span className="career-status">LEARN // BUILD // GROW</span>

                <p>
                  Working towards a career in cybersecurity and cloud security
                  by strengthening my technical skills and gaining practical
                  experience.
                </p>

                <p>
                  <strong>
                    Interested in internships, collaborative projects, and
                    opportunities to solve real-world security challenges.
                  </strong>
                </p>
              </article>
            </div>

            <div className="career-bottom">
              <button
                className="projects-back"
                onClick={() => setPage("projects")}
              >
                <ArrowLeft size={16} />
                <span>BACK TO PROJECTS</span>
              </button>

              <button
                className="projects-back"
                onClick={() => setPage("contact")}
              >
                <span>CONTACT ME</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <footer className="cyber-footer">
            <span>HVA // DIGITAL PORTFOLIO</span>
            <span>LEARN. BUILD. SECURE.</span>
            <span>EST. {new Date().getFullYear()}</span>
          </footer>
        </section>
      )}

      {/* CONTACT SCREEN */}
      {page === "contact" && (
        <section className="contact-section">
          <div className="about-grid-bg" />
          <div className="about-glow about-glow-one" />
          <div className="about-glow about-glow-two" />

          <nav className="cyber-nav">
            <a
              className="cyber-logo"
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                setPage("about");
              }}
            >
              <ShieldCheck size={23} />
              <span>
                HVA<span className="gold">.SECURITY</span>
              </span>
            </a>

            <div className="cyber-nav-status">
              <span className="status-dot" />
              CONTACT MODULE ONLINE
            </div>

            <span className="nav-index">04 / CONTACT</span>
          </nav>

          <div className="contact-content" id="contact">
            <div className="section-kicker">
              <span className="kicker-line" />
              ESTABLISH CONNECTION
            </div>

            <h1 className="contact-heading">
              LET'S
              <br />
              <span className="gold-text">CONNECT.</span>
            </h1>

            <p className="contact-intro">
              Interested in cybersecurity, cloud security, or technology? Let's
              connect, share ideas, and explore opportunities to learn and build
              meaningful projects together.
            </p>
            <div className="contact-availability">
              <span className="status-dot" />
              <span>OPEN TO INTERNSHIPS & COLLABORATIONS</span>
            </div>

            <div className="contact-grid">
              <a
                className="contact-card"
                href="https://www.linkedin.com/in/hemanth-venkata-ayyangar-n-164a66387/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="LinkedIn"
                    role="img"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.19 0 22.21 0Z" />
                  </svg>
                </div>

                <div className="contact-card-copy">
                  <span className="contact-label">PROFESSIONAL NETWORK</span>
                  <h2>LinkedIn</h2>
                  <p>Connect with me professionally.</p>
                </div>

                <ArrowUpRight className="contact-arrow" size={21} />
              </a>

              <a
                className="contact-card"
                href="https://github.com/hemanthayyangar-lgtm?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="GitHub"
                    role="img"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                </div>

                <div className="contact-card-copy">
                  <span className="contact-label">CODE &amp; PROJECTS</span>
                  <h2>GitHub</h2>
                  <p>Explore my repositories and projects.</p>
                </div>

                <ArrowUpRight className="contact-arrow" size={21} />
              </a>

              <a
                className="contact-card contact-card-email"
                href="mailto:hemanthayyangar@gmail.com"
              >
                <div className="contact-card-icon">
                  <Mail size={27} />
                </div>

                <div className="contact-card-copy">
                  <span className="contact-label">DIRECT CONTACT</span>
                  <h2>Email Me</h2>
                  <p>hemanthayyangar@gmail.com</p>
                </div>

                <ArrowUpRight className="contact-arrow" size={21} />
              </a>
            </div>

            <div className="contact-bottom">
              <button
                className="projects-back"
                onClick={() => setPage("projects")}
              >
                <ArrowLeft size={16} />
                <span>BACK TO PROJECTS</span>
              </button>

              <button
                className="projects-back"
                onClick={() => setPage("about")}
              >
                <ArrowLeft size={16} />
                <span>BACK TO ABOUT</span>
              </button>
            </div>
          </div>

          <footer className="cyber-footer">
            <span>HVA // DIGITAL PORTFOLIO</span>
            <span>LEARN. BUILD. SECURE.</span>
            <span>EST. {new Date().getFullYear()}</span>
          </footer>
        </section>
      )}
    </>
  );
}
