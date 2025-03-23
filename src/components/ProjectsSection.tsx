import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaPython, FaBootstrap, FaHtml5, FaCss3, FaFlask } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    date: string;
    listItems: string[];
    techIcons: { component: React.ReactNode; shadow: string; hover: string; active: string; title: string }[];
    link?: string;
    badgeText: string;
    badgeColor: { shadow: string; hover: string; active: string; bg: string; badge: string };
    position?: 'left' | 'center' | 'right';
}

const ProjectCard: React.FC<ProjectCardProps & { isVisible?: boolean }> = ({
    title,
    imageSrc,
    imageAlt,
    date,
    listItems,
    techIcons,
    link,
    badgeText,
    badgeColor,
    isVisible,
    position,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardVisible, setCardVisible] = useState(false);
    const lastScrollY = useRef(window.scrollY);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const currentScrollY = window.scrollY;
                const isScrollingUp = currentScrollY < lastScrollY.current;

                if (entry.isIntersecting) {
                    setCardVisible(true);
                } else if (isScrollingUp && !entry.isIntersecting) {
                    setCardVisible(false);
                }

                lastScrollY.current = currentScrollY;
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
    }, []);

    const shouldAnimate = window.innerWidth < 768 ? cardVisible : isVisible;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const getAnimationClasses = () => {
        if (window.innerWidth >= 768) {
            switch (position) {
                case 'left':
                    return shouldAnimate ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:-translate-x-20';
                case 'center':
                    return shouldAnimate ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-20';
                case 'right':
                    return shouldAnimate ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:translate-x-20';
                default:
                    return '';
            }
        }
        return shouldAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20';
    };

    return (
        <div
            ref={cardRef}
            className={`relative bg-gradient-to-br from-neutral-950 to-blue-950 p-6 rounded-xl shadow-xl ${badgeColor.shadow} hover:${badgeColor.hover} active:${badgeColor.active} transition-all duration-700 ease-in-out ${getAnimationClasses()} flex flex-col`}
        >
            <div className="relative group">
                <img 
                    src={imageSrc} 
                    alt={imageAlt} 
                    className="w-full h-48 object-cover rounded-xl border border-blue-950 transition-opacity duration-300 group-hover:opacity-50" 
                />
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${badgeColor.bg} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1 rounded-full hover:shadow-purple-500/80 hover:scale-105 active:shadow-purple-500/80 active:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100`}
                        title="Enlace al proyecto"
                    >
                        <img src="/images/Demo.jpg" className="w-6 h-6" />
                        <span className="text-white font-semibold text-sm">DEMO</span>
                    </a>
                )}
            </div>
            <div className="flex items-center justify-between mt-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-400 text-sm mt-1">{date}</p>
            <ul
                className={`text-gray-300 text-sm mt-4 space-y-1 overflow-hidden transition-all duration-700 ease-in-out ${
                    isExpanded ? 'max-h-40' : 'max-h-0 md:max-h-40'
                }`}
            >
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button
                onClick={toggleExpand}
                className="md:hidden text-green-400 hover:text-green-500 font-semibold flex items-center justify-center gap-1 mt-4 transition-colors duration-700 w-full"
            >
                {isExpanded ? 'Ocultar' : 'Detalles'}
                <svg
                    className={`w-4 h-4 transform transition-transform duration-700 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className="mt-auto flex justify-center gap-4 pt-4">
                {techIcons.map((icon, index) => (
                    <div
                        key={index}
                        className={`shadow-lg ${icon.shadow} hover:${icon.hover} hover:scale-115 active:${icon.active} active:scale-115 transition-all duration-300 p-2 rounded-full`}
                        title={icon.title}
                    >
                        {icon.component}
                    </div>
                ))}
            </div>
            <span
                className={`absolute top-2 right-2 ${badgeColor.badge} text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300`}
            >
                {badgeText}
            </span>
        </div>
    );
};

interface ProjectsSectionProps {
    className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(window.scrollY);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const currentScrollY = window.scrollY;
                const isScrollingUp = currentScrollY < lastScrollY.current;

                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (isScrollingUp && !entry.isIntersecting) {
                    setIsVisible(false);
                }

                lastScrollY.current = currentScrollY;
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

    }, []);

    return (
        <section
            ref={sectionRef}
            className={`min-w-95 md:w-full lg:w-[1024px] w-4/5 mx-auto p-4 mt-16 ${className || ''} transition-all duration-700 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >
            <h2 className="text-5xl font-bold text-blue-400 text-center mb-8">Proyectos</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-3">
                <ProjectCard
                    title="Portfolio Personal"
                    imageSrc="/images/Portfolio.jpg"
                    imageAlt="Portfolio Personal"
                    date="Marzo 2025"
                    listItems={[
                        '- Sitio web responsivo hecho con React, TypeScript y Tailwind CSS.',
                        '- Diseño de la interfaz con Tailwind CSS para un estilo responsivo.',
                        '- Integración de las tres tecnologías para un proyecto sólido y escalable.',
                    ]}
                    techIcons={[
                        { component: <FaReact className="text-blue-300" size={24} />, shadow: 'shadow-blue-300/40', hover: 'shadow-blue-400/60', active: 'shadow-blue-400/80', title: 'React' },
                        { component: <img src="/images/Tail.jpg" className="w-6 h-6" />, shadow: 'shadow-blue-300/40', hover: 'shadow-blue-400', active: 'shadow-blue-400', title: 'TailWindCSS' },
                        { component: <img src="/images/TS.jpg" className="w-6 h-6" />, shadow: 'shadow-blue-500/40', hover: 'shadow-blue-500/60', active: 'shadow-blue-500/80', title: 'Typescript' },
                        { component: <FaCss3 className="text-blue-400" size={24} />, shadow: 'shadow-blue-500/40', hover: 'shadow-blue-500/60', active: 'shadow-blue-500/80', title: 'CSS' },
                    ]}
                    badgeText="Website"
                    badgeColor={{ shadow: 'shadow-blue-500/40', hover: 'shadow-blue-500/80', active: 'shadow-blue-500/80', bg: 'bg-blue-500', badge: 'bg-blue-600' }}
                    isVisible={isVisible}
                    position="left"
                />
                <ProjectCard
                    title="App Web meteo"
                    imageSrc="/images/NimbusProject.jpg"
                    imageAlt="App consulta clima"
                    date="Noviembre 2024"
                    listItems={[
                        '- Aplicación web funcional para consulta del tiempo.',
                        '- Diseño responsivo hecho con React, TS y Tailwind CSS.',
                        '- Back-End con Python y Flask.',
                        '- Conexión a BBDD mediante API.',
                    ]}
                    techIcons={[
                        { component: <FaReact className="text-blue-300" size={24} />, shadow: 'shadow-blue-300/60', hover: 'shadow-blue-400/80', active: 'shadow-blue-400/60', title: 'React' },
                        { component: <img src="/images/TS.jpg" className="w-6 h-6" />, shadow: 'shadow-blue-500/60', hover: 'shadow-blue-500/80', active: 'shadow-blue-500/60', title: 'Typescript' },
                        { component: <FaPython className="text-yellow-400" size={24} />, shadow: 'shadow-yellow-400/60', hover: 'shadow-yellow-500', active: 'shadow-yellow-500/80', title: 'Python' },
                        { component: <FaFlask className="text-blue-400" size={24} />, shadow: 'shadow-blue-300/60', hover: 'shadow-blue-400', active: 'shadow-blue-400', title: 'Flask' },
                    ]}
                    link="https://nimbus-weather.vercel.app/"
                    badgeText="App web"
                    badgeColor={{ shadow: 'shadow-green-500/40', hover: 'shadow-green-500/80', active: 'shadow-green-500/80', bg: 'bg-green-500', badge: 'bg-green-600' }}
                    isVisible={isVisible}
                    position="center"
                />
                <ProjectCard
                    title="Diseño de website"
                    imageSrc="/images/BootstrapProject.jpg"
                    imageAlt="Diseño de website"
                    date="Febrero 2025"
                    listItems={[
                        '- Sitio web responsivo hecho con Bootstrap.',
                        '- Diseño limpio y minimalista.',
                    ]}
                    techIcons={[
                        { component: <FaHtml5 className="text-orange-400" size={24} />, shadow: 'shadow-orange-400/60', hover: 'shadow-orange-400/80', active: 'shadow-orange-400/80', title: 'HTML' },
                        { component: <FaCss3 className="text-blue-400" size={24} />, shadow: 'shadow-blue-500/60', hover: 'shadow-blue-500/80', active: 'shadow-blue-500/80', title: 'CSS' },
                        { component: <FaBootstrap className="text-purple-400" size={24} />, shadow: 'shadow-purple-500/60', hover: 'shadow-purple-500/80', active: 'shadow-purple-500/80', title: 'Bootstrap' },
                    ]}
                    link="https://cristian-estudios.vercel.app/"
                    badgeText="Website"
                    badgeColor={{ shadow: 'shadow-purple-500/40', hover: 'shadow-purple-500/80', active: 'shadow-purple-500/80', bg: 'bg-purple-500', badge: 'bg-purple-600' }}
                    isVisible={isVisible}
                    position="right"
                />
            </div>
        </section>
    );
};

export default ProjectsSection;