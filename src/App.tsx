import './index.css';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import TechnologiesSection from './components/TechnologiesSection';
import EducationTimeline from './components/EducationTimeline';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const technologiesRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col min-w-[100vw]">
            <Navbar
                scrollToSection={scrollToSection}
                refs={{ aboutRef, experienceRef, technologiesRef, projectsRef, educationRef, contactRef }}
            />

            <main className="flex-1 flex flex-col">
                <div ref={aboutRef} id="about">
                    <AboutSection />
                </div>

                <div ref={experienceRef} id="experience">
                    <ExperienceSection />
                </div>

                <div ref={technologiesRef} id="technologies">
                    <TechnologiesSection />
                </div>

                <div ref={projectsRef} id="projects">
                    <ProjectsSection />
                </div>

                <div ref={educationRef} id="education">
                    <EducationTimeline />
                </div>

                <div ref={contactRef} id="contact">
                    <ContactSection />
                </div>
            </main>

            <FooterSection />
        </div>
    );
}

export default App;