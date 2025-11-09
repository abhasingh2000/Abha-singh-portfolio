"use client";
import { motion, AnimatePresence } from "framer-motion";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail,Copy, Phone, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronDown , X } from 'lucide-react';
import './portfolio.css';
import ContactForm from "./Contactform";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [showContact, setShowContact] = useState(false);
  const [contactType, setContactType] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => {
  setShowContactForm(true);
};
const closeContactForm = () => {
  setShowContactForm(false);
};


  const closeContact = () => setShowContact(false);

const contactDetails = {
  call: {
    icon: <Phone size={40} className="text-green-400" />,
    title: "Call Me",
    info: "+91 9756010067",
    link: "tel:+919756010067",
  },
  email: {
    icon: <Mail size={40} className="text-blue-400" />,
    title: "Email Me",
    info: "abhasingh00522@gmail.com",
    link: "mailto:abhasingh00522@gmail.com",
  },
};

const openContact = (type) => {
  setContactType(type);
  setShowContact(true);
};
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h3 className="nav-logo">Abha Singh</h3>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('experience')}>Experience</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="background-blur blur-1"></div>
        <div className="background-blur blur-2"></div>

        <div className={`hero-content ${isVisible.hero ? 'visible' : ''}`}>
          <h1 className="hero-title">Abha Singh</h1>
          <p className="hero-subtitle">Fullstack Developer</p>
          <p className="hero-tagline">Building User-Centric Web Experiences</p>
          <p className="hero-description">
            Dedicated Fullstack Developer with 3+ years of experience in building and optimizing user-centric web applications.
            Proficient in React.js, Next.js and Node js with a strong background in crafting responsive, high-performance interfaces.
          </p>

          <div className="social-links">
               <button className="social-btn" onClick={() => openContact("call")}>
        <Phone size={20} />
        <span>Call Me</span>
      </button>

      <button className="social-btn" onClick={() => openContact("email")}>
        <Mail size={20} />
        <span>Email Me</span>
      </button>
           
            <a href="https://linkedin.com/in/abhasingh" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/abhasingh" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
           <AnimatePresence>
              {showContact && (
                <motion.div
                  className="contact-modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="contact-modal"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    <button className="close-btn" onClick={closeContact}>
                      <X size={22} />
                    </button>

                    <div className="contact-icon">
                      {contactDetails[contactType].icon}
                    </div>
                    <h2 className="contact-title">{contactDetails[contactType].title}</h2>
                    <p className="contact-info">{contactDetails[contactType].info}</p>

                    <div className="contact-actions">
                      <button
                        className="contact-action-btn secondary"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            contactDetails[contactType].info
                          );
                          alert("Copied to clipboard!");
                        }}
                      >
                        <Copy size={18} />
                        Copy
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          {/* Resume View & Download Buttons */}
          <div className="resume-buttons">
            <a
              href="https://drive.google.com/file/d/133ChKHb1nS6rVNZWel_v3EA-Bl4pGZQ6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn view-btn"
            >
              <ExternalLink size={20} />
              <span>View Resume</span>
            </a>

            <a
              href="https://drive.google.com/file/d/133ChKHb1nS6rVNZWel_v3EA-Bl4pGZQ6/view?usp=sharing"
              download="Abha_Singh_Resume.pdf"
              className="resume-btn download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          <button className="scroll-indicator" onClick={() => scrollToSection('about')}>
            <ChevronDown size={32} className="bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className={`section-content ${isVisible.about ? 'visible' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <p className="about-text">
              Dedicated Frontend Developer with 3+ years of experience in building and optimizing user-centric web applications.
              Proficient in React.js and Next.js, with a strong background in crafting responsive, high-performance interfaces.
              Skilled in modern state management, component-based architecture, and integrating with RESTful APIs to deliver
              seamless user experiences.
            </p>
            <p className="about-text">
              My expertise spans across micro-frontend architectures, AI-powered workflow automation, and full-stack development.
              I specialize in translating complex technical requirements into intuitive, accessible interfaces that drive business
              value and enhance user satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section dark-section">
        <div className={`section-content ${isVisible.experience ? 'visible' : ''}`}>
          <h2 className="section-title">
            <Briefcase className="title-icon" size={40} />
            Professional Experience
          </h2>

          {/* Birdeye */}
          <div className="experience-card featured">
            <div className="experience-header">
              <div>
                <h3 className="company-name">1. Birdeye</h3>
                <p className="role-name">Software Frontend Developer</p>
              </div>
              <div className="experience-meta">
                <p className="period">Nov 2022 - Ongoing</p>
                <p className="location">Gurgaon, India</p>
              </div>
            </div>

            <div className="experience-intro">
              <h4 className="subsection-title">AI Innovation & Full-Stack Excellence</h4>
              <p className="experience-description">
                As a core member of the Campaign and Workflow AI team at Birdeye, I'm driving innovation in AI-powered
                automation and micro-frontend architecture. My role extends beyond traditional frontend development to
                encompass full-stack contributions, performance optimization, and technical leadership.
              </p>
            </div>

            <div className="experience-grid">
              <div className="experience-item">
                <h5 className="item-title">Micro-Frontend Architecture</h5>
                <p>Led development of complex frontend within Micro-frontend architecture, optimizing code for seamless
                  integration and maintainability. Built and maintained server-side APIs for data fetching and processing.</p>
              </div>

              <div className="experience-item">
                <h5 className="item-title">AI Workflow Automation</h5>
                <p>Designed interactive UIs translating sophisticated AI logic into intuitive automated workflows using
                  Next.js and ReactFlow for visual, no-code campaign management.</p>
              </div>

              <div className="experience-item">
                <h5 className="item-title">Browser Automation</h5>
                <p>Utilized Puppeteer to automate browser-based data scraping for new product features, streamlining
                  data collection processes.</p>
              </div>

              <div className="experience-item highlight">
                <h5 className="item-title">State Management Revolution</h5>
                <p>Drove adoption of Zustand for modern state management, replacing Redux to eliminate excessive boilerplate
                  and solve deep prop drilling across nested components. This simplification reduced cognitive load for developers
                  and enabled faster state sharing across micro-frontends, resulting in improved application performance, reduced
                  bundle size, and enhanced code maintainability.</p>
              </div>

              <div className="experience-item highlight">
                <h5 className="item-title">Component Library Leadership</h5>
                <p>Developed reusable UI component library and contributed to centralized commonComponents repository used
                  across multiple teams. Integrated components with Storybook for interactive documentation and visual testing,
                  streamlining development workflows and ensuring design consistency. Integrated Grapes.js to create custom
                  content editor, empowering non-technical users to independently manage campaign content.</p>
              </div>
            </div>
          </div>

          {/* Zimyo */}
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="company-name">2. Zimyo HR Solutions</h3>
                <p className="role-name">Software Developer</p>
              </div>
              <div className="experience-meta">
                <p className="period">Jan 2021 - Oct 2022</p>
                <p className="location">Gurgaon, Haryana</p>
              </div>
            </div>

            <div className="experience-intro">
              <h4 className="subsection-title">Transforming HR Technology</h4>
              <p className="experience-description">
                At Zimyo HR Solutions, I led critical system migrations and feature enhancements that dramatically improved
                user engagement and operational efficiency. My work spanned multiple HR products including HRMS, Payroll,
                and Performance Management Systems, delivering measurable business impact through modern frontend architecture
                and user-centric design.
              </p>
            </div>

            <div className="experience-grid">
              <div className="experience-item">
                <h5 className="item-title">System Migration</h5>
                <p>Led complete frontend migration of Performance Management System from PHP to modern React.js architecture,
                  resulting in 40% increase in user engagement and significantly enhanced scalability.</p>
              </div>

              <div className="experience-item">
                <h5 className="item-title">Component Standardization</h5>
                <p>Championed component-based approach with Material-UI, creating reusable component library that reduced
                  development time by 30% and ensured consistent user experience.</p>
              </div>

              <div className="experience-item">
                <h5 className="item-title">Business Impact</h5>
                <p>Built comprehensive helpdesk solution with integrated onboarding dashboards, reducing customer onboarding
                  from 3 weeks to 1 week and improving response times by 50%.</p>
              </div>
            </div>

            <div className="key-achievement">
              <strong>Key Achievement:</strong> Designed and developed responsive user interfaces for suite of HR products
              including HRMS and Payroll, establishing design patterns that became standard across the organization.
            </div>
          </div>

          {/* Microchip Payments */}
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="company-name">3. Microchip Payments Pvt Ltd.</h3>
                <p className="role-name">Frontend Developer</p>
              </div>
              <div className="experience-meta">
                <p className="period">Jun 2020 - Dec 2020</p>
                <p className="location">Remote</p>
              </div>
            </div>

            <div className="experience-intro">
              <h4 className="subsection-title">Performance & Accessibility</h4>
              <p className="experience-description">
                At Microchip Payments, I focused on performance optimization and accessibility, delivering measurable
                improvements in user experience through advanced React.js techniques and cross-functional collaboration.
              </p>
            </div>

            <ul className="highlights-list">
              <li><span className="bullet">▹</span><strong>Performance Optimization:</strong> Achieved 25% reduction in page loading times through code-splitting and efficient state management</li>
              <li><span className="bullet">▹</span><strong>Accessibility Compliance:</strong> Ensured WCAG standards compliance to broaden accessibility and increase user satisfaction</li>
              <li><span className="bullet">▹</span><strong>Agile Delivery:</strong> Participated in all phases of agile development lifecycle, consistently meeting project timelines</li>
              <li><span className="bullet">▹</span><strong>Cross-Functional Collaboration:</strong> Worked closely with UX designers and backend engineers to translate wireframes into interactive features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className={`section-content ${isVisible.skills ? 'visible' : ''}`}>
          <h2 className="section-title">
            <Code className="title-icon" size={40} />
            Technical Expertise
          </h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3 className="skill-category">Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Core Java</span>
                <span className="skill-tag">Python</span>

              </div>
            </div>

            <div className="skill-card">
              <h3 className="skill-category">Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Zustand</span>
                <span className="skill-tag">ReactFlow</span>
                <span className="skill-tag">Grapes.js</span>
              </div>
            </div>

            <div className="skill-card">
              <h3 className="skill-category">Styling</h3>
              <div className="skill-tags">
                <span className="skill-tag">Material-UI</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">SASS</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>

            <div className="skill-card">
              <h3 className="skill-category">Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Webpack</span>
                <span className="skill-tag">Babel</span>
              </div>
            </div>

            <div className="skill-card">
              <h3 className="skill-category">Concepts</h3>
              <div className="skill-tags">
                <span className="skill-tag">Micro-frontends</span>
                <span className="skill-tag">Component Architecture</span>
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Performance Optimization</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Puppeteer</span>
              </div>
            </div>

            <div className="skill-card">
              <h3 className="skill-category">Backend & Database</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">MySQL</span>
              </div>
            </div>

            <div className="skill-card">
              <h3 className="skill-category">Additional Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Mixpanel</span>
                <span className="skill-tag">WebSocket</span>
                <span className="skill-tag">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section dark-section">
        <div className={`section-content ${isVisible.projects ? 'visible' : ''}`}>
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-name">E-Commerce Platform</h3>
              <div className="project-tech">
                <span className="tech-badge">React.js</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Material-UI</span>
                <span className="tech-badge">MySQL</span>
              </div>
              <p className="project-description">
                Engineered a full-stack e-commerce platform with intuitive product listings and user authentication,
                achieving high user satisfaction rate.
              </p>
              <ul className="project-features">
                <li>Developed responsive frontend using React.js and Material-UI for seamless browsing experience</li>
                <li>Built Node.js and Express APIs to handle all backend logic, including user and order management</li>
              </ul>
            </div>

            <div className="project-card">
              <h3 className="project-name">Project Management Tool</h3>
              <div className="project-tech">
                <span className="tech-badge">React.js</span>
                <span className="tech-badge">Antd</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">MySQL</span>
              </div>
              <p className="project-description">
                Created a collaborative project management system with real-time updates and task tracking to enhance
                team efficiency.
              </p>
              <ul className="project-features">
                <li>Implemented user-friendly UI with drag-and-drop functionality using React.js and Antd</li>
                <li>Designed scalable backend with Node.js and MySQL to manage user accounts and project data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className={`section-content ${isVisible.education ? 'visible' : ''}`}>
          <h2 className="section-title">
            <GraduationCap className="title-icon" size={40} />
            Education & Certifications
          </h2>

          <div className="education-section">
            <h3 className="education-subtitle">Academic Background</h3>
            <div className="education-list">
              <div className="education-card">
                <h4 className="degree-name">Master of Computer Application</h4>
                <p className="institution-name">Banaras Hindu University, Varanasi</p>
              </div>

              <div className="education-card">
                <h4 className="degree-name">Bachelor of Science in Computer Science</h4>
                <p className="institution-name">St. John's College, Agra</p>
              </div>
            </div>

            <h3 className="education-subtitle">Professional Certifications</h3>
            <div className="certifications-list">
              <div className="cert-card">
                <Award className="cert-icon" size={24} />
                <div>
                  <h4 className="cert-name">Big Data Computing</h4>
                  <p className="cert-issuer">NPTEL Online Certification</p>
                </div>
              </div>

              <div className="cert-card">
                <Award className="cert-icon" size={24} />
                <div>
                  <h4 className="cert-name">Social Networks</h4>
                  <p className="cert-issuer">NPTEL Online Certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section dark-section">
        <div className={`section-content contact-content ${isVisible.contact ? 'visible' : ''}`}>
          <h2 className="section-title">Let's Build Something Amazing Together</h2>
          <p className="contact-description">
            I'm passionate about creating exceptional web experiences that combine cutting-edge technology with
            user-centric design. Whether you're looking to build a new product, optimize existing systems, or explore
            innovative solutions, I'd love to connect.
          </p>
          <p className="contact-description">
            With expertise spanning micro-frontends, AI-powered workflows, and full-stack development, I bring a
            comprehensive approach to solving complex technical challenges. Let's discuss how we can work together
            to bring your vision to life.
          </p>

          <div className="contact-buttons">
            <a href="https://www.linkedin.com/in/abha-singh-979164197/" target="_blank" rel="noopener noreferrer" className="contact-btn secondary">
              <Linkedin size={24} />
              <span>Connect on LinkedIn</span>
            </a>
            <a href="https://github.com/abhasingh" target="_blank" rel="noopener noreferrer" className="contact-btn secondary">
              <Github size={24} />
              <span>View GitHub</span>
            </a>
             <button className="contact-btn primary" onClick={openContactForm}>
        <Mail size={24} />
        <span>Get In Touch</span>
      </button>
          </div>
        </div>
         <AnimatePresence>
    {showContactForm && (
      <motion.div
        className="contact-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="contact-modal large"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <button className="close-btn" onClick={closeContactForm}>
            <X size={22} />
          </button>
          <h2 className="contact-modal-title">Get In Touch</h2>
          <p className="contact-modal-subtitle">
            Fill in the details below — your message will be sent directly to me.
          </p>
          <ContactForm />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

      </section>

      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Abha Singh. All rights reserved.</p>
          <div className="footer-links">
            <a href="mailto:abhasingh@gmail.com">abhasingh00522@gmail.com</a>
            <span className="separator">•</span>
            <a href="https://github.com/abhasingh" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="separator">•</span>
            <a href="https://www.linkedin.com/in/abha-singh-979164197/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;