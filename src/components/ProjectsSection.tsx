import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaPython, FaBootstrap, FaHtml5, FaCss3, FaFlask } from 'react-icons/fa';
import { useLanguage } from '../contextLanguage';
import { translations } from '../i18n';

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
    detailsBtn: string;
    hideBtn: string;
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
    detailsBtn,
    hideBtn,
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
            className={`relative group bg-gradient-to-br from-black to-blue-950 p-6 rounded-xl shadow-lg ${badgeColor.shadow} ${badgeColor.hover} ${badgeColor.active} transition-all duration-700 ease-in-out border border-gray-800 ${getAnimationClasses()} flex flex-col`}
        >
            <div className="relative">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-48 object-cover rounded-xl border border-gray-800 transition-opacity duration-300 group-hover:opacity-30"
                />
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${badgeColor.bg} md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-15 md:right-10 bottom-2 right-2 absolute flex items-center gap-2 rounded-full hover:scale-105 active:scale-105 transition-all duration-300 
                            md:opacity-0 md:group-hover:opacity-100 md:px-3 md:py-1 
                            opacity-100 px-2 py-2`}
                        title="Enlace al proyecto"
                    >
                        <img src="/images/Demo.jpg" className="w-6 h-6" />
                        <span className="text-black font-bold text-sm md:inline hidden">DEMO</span>
                    </a>
                )}
            </div>
            <div className="flex items-center justify-between mt-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-400 text-sm mt-1">{date}</p>
            <ul
                className={`text-gray-300 text-sm mt-4 space-y-1 overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-40' : 'max-h-0 md:max-h-40'
                    }`}
            >
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button
                onClick={toggleExpand}
                className="md:hidden text-green-400 hover:text-green-500 active:text-green-500 font-semibold flex items-center justify-center gap-1 mt-4 transition-colors duration-700 mx-auto cursor-pointer"
            >
                {isExpanded ? hideBtn : detailsBtn}
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
                        className={`shadow-lg ${icon.shadow} ${icon.hover} ${icon.active} transition-all duration-300 p-2 rounded-full`}
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
    const { language } = useLanguage();
    const t = translations[language].projects;

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
            className={`min-w-95 md:w-full lg:w-[1024px] w-4/5 mx-auto p-4 mt-5 ${className || ''} transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
        >
            <h2 className="text-5xl font-bold text-blue-400 text-center mb-8">{t.title}</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 md:gap-3 gap-6">
                {t.details.map((proj, idx) => (
                    <ProjectCard
                        key={idx}
                        title={proj.title}
                        imageSrc={idx === 0 ? "/images/Portfolio.png" : idx === 1 ? "/images/NimbusProject.jpg" : "/images/BootstrapProject.jpg"}
                        imageAlt={proj.title}
                        date={proj.date}
                        listItems={proj.listItems}
                        techIcons={
                            idx === 0 ? [
                                { component: <FaReact className="text-blue-300" size={24} />, shadow: 'shadow-blue-300/40', hover: 'hover:shadow-blue-400/60 hover:scale-115', active: 'active:shadow-blue-400/60 active:scale-115', title: 'React' },
                                { component: <img src="/images/Tail.jpg" className="w-6 h-6" />, shadow: 'shadow-blue-300/40', hover: 'hover:shadow-blue-400/60 hover:scale-115', active: 'active:shadow-blue-400/60 active:scale-115', title: 'TailWindCSS' },
                                { component: <img src="/images/TS.jpg" className="w-6 h-6" />, shadow: 'shadow-blue-500/40', hover: 'hover:shadow-blue-500/60 hover:scale-115', active: 'active:shadow-blue-500/60 active:scale-115', title: 'Typescript' },
                                { component: <FaCss3 className="text-blue-400" size={24} />, shadow: 'shadow-blue-500/40', hover: 'hover:shadow-blue-500/60 hover:scale-115', active: 'active:shadow-blue-500/60 active:scale-115', title: 'CSS' },
                            ] : idx === 1 ? [
                                { component: <FaReact className="text-blue-300" size={24} />, shadow: 'shadow-blue-300/60', hover: 'hover:shadow-blue-400/80 hover:scale-115', active: 'active:shadow-blue-400/80 active:scale-115', title: 'React' },
                                { component: <img src="/images/TS.jpg" className="w-6 h-6" />, shadow: 'shadow-blue-500/60', hover: 'hover:shadow-blue-500/80 hover:scale-115', active: 'active:shadow-blue-500/80 active:scale-115', title: 'Typescript' },
                                { component: <FaPython className="text-yellow-400" size={24} />, shadow: 'shadow-yellow-400/60', hover: 'hover:shadow-yellow-500/80 hover:scale-115', active: 'active:shadow-yellow-500/80 active:scale-115', title: 'Python' },
                                { component: <FaFlask className="text-blue-400" size={24} />, shadow: 'shadow-blue-300/60', hover: 'hover:shadow-blue-400/80 hover:scale-115', active: 'active:shadow-blue-400/80 active:scale-115', title: 'Flask' },
                            ] : [
                                { component: <FaHtml5 className="text-orange-400" size={24} />, shadow: 'shadow-orange-400/60', hover: 'hover:shadow-orange-400/80 hover:scale-115', active: 'active:shadow-orange-400/80 active:scale-115', title: 'HTML' },
                                { component: <FaCss3 className="text-blue-400" size={24} />, shadow: 'shadow-blue-500/60', hover: 'hover:shadow-blue-500/80 hover:scale-115', active: 'active:shadow-blue-500/80 active:scale-115', title: 'CSS' },
                                { component: <FaBootstrap className="text-purple-400" size={24} />, shadow: 'shadow-purple-500/60', hover: 'hover:shadow-purple-500/80 hover:scale-115', active: 'active:shadow-purple-500/80 active:scale-115', title: 'Bootstrap' },
                            ]
                        }
                        link={idx === 0 ? undefined : idx === 1 ? "https://nimbus-weather.vercel.app/" : "https://cristian-estudios.vercel.app/"}
                        badgeText={proj.badgeText}
                        badgeColor={
                            idx === 0 ? { shadow: 'shadow-blue-500/40', hover: 'hover:shadow-blue-500/80', active: 'active:shadow-blue-500/80', bg: 'bg-blue-500', badge: 'bg-blue-600' }
                            : idx === 1 ? { shadow: 'shadow-green-500/40', hover: 'hover:shadow-green-500/80', active: 'active:shadow-green-500/80', bg: 'bg-green-500', badge: 'bg-green-600' }
                            : { shadow: 'shadow-purple-500/40', hover: 'hover:shadow-purple-500/80', active: 'active:shadow-purple-500/80', bg: 'bg-purple-500', badge: 'bg-purple-600' }
                        }
                        isVisible={isVisible}
                        position={idx === 0 ? 'left' : idx === 1 ? 'center' : 'right'}
                        detailsBtn={t.detailsBtn}
                        hideBtn={t.hideBtn}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;