import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaGitAlt, FaGithub, FaUbuntu, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiSpring, SiApachekafka, SiDocker } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useLanguage } from '../contextLanguage';
import { translations } from '../i18n';
import azurelogo from '../assets/azure.svg';

interface Technology {
    icon: React.ReactNode;
    shadow: string;
    hover: string;
    active: string;
    title: string;
    textColor: string;
}


const TechnologyIcon: React.FC<{ tech: Technology }> = ({ tech }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const timeoutRef = useRef<number | null>(null);


    const handleTouch = () => {
        setShowTooltip(true);
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => setShowTooltip(false), 1500);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        };
    }, []);

    const zoomClass = showTooltip ? 'scale-115 ' + tech.shadow : '';

    return (
        <div
            className="flex flex-col items-center md:-mt-5 justify-center group transition-all duration-300 relative"
            onTouchStart={handleTouch}
        >
            <span className={`p-3 rounded-full bg-neutral-950 shadow-lg transition-all duration-500 ease-in-out ${tech.shadow} ${zoomClass} ${tech.hover} ${tech.active}`.trim()}>
                {tech.icon}
            </span>
            <span
                className={`text-sm absolute bottom-[-2rem] transition-opacity duration-300 bg-gray-900 px-2 py-1 rounded border border-gray-500 z-10 whitespace-nowrap ${tech.textColor} ` +
                    (showTooltip ? 'opacity-100' : 'opacity-0') +
                    ' group-hover:opacity-100 group-active:opacity-100'}
            >
                {tech.title}
            </span>
        </div>
    );
};

const TechnologiesSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const lastScrollY = useRef<number>(0);
    const { language } = useLanguage();
    const t = translations[language].technologies;

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                const entry = entries[0];
                const currentScrollY = window.scrollY;
                const isScrollingUp = currentScrollY < lastScrollY.current;

                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (isScrollingUp) {
                    setIsVisible(false);
                }

                lastScrollY.current = currentScrollY;
            },
            { threshold: 0.2 }
        );

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const frontend: Technology[] = [
        { icon: <FaHtml5 className="text-orange-500" size={35} />, shadow: 'shadow-orange-500/70', hover: 'hover:shadow-orange-600/80 hover:scale-115', active: 'active:scale-115', title: 'HTML5', textColor: 'text-orange-500' },
        { icon: <FaCss3Alt className="text-blue-500" size={35} />, shadow: 'shadow-blue-500/70', hover: 'hover:shadow-blue-600/80 hover:scale-115', active: 'active:scale-115', title: 'CSS3', textColor: 'text-blue-500' },
        { icon: <FaReact className="text-cyan-500" size={35} />, shadow: 'shadow-cyan-500/70', hover: 'hover:shadow-cyan-600/80 hover:scale-115', active: 'active:scale-115', title: 'React', textColor: 'text-cyan-500' },
        { icon: <SiTailwindcss className="text-teal-500" size={35} />, shadow: 'shadow-teal-500/70', hover: 'hover:shadow-teal-600/80 hover:scale-115', active: 'active:scale-115', title: 'TailwindCSS', textColor: 'text-teal-500' },
        { icon: <SiBootstrap className="text-purple-600" size={35} />, shadow: 'shadow-purple-600/70', hover: 'hover:shadow-purple-700/80 hover:scale-115', active: 'active:scale-115', title: 'Bootstrap', textColor: 'text-purple-600' },
    ];

    const backend: Technology[] = [
        { icon: <FaJava className="text-red-600" size={35} />, shadow: 'shadow-red-600/70', hover: 'hover:shadow-red-700/80 hover:scale-115', active: 'active:scale-115', title: 'Java', textColor: 'text-red-600' },
        { icon: <FaPython className="text-blue-500" size={35} />, shadow: 'shadow-blue-500/70', hover: 'hover:shadow-blue-600/80 hover:scale-115', active: 'active:scale-115', title: 'Python', textColor: 'text-blue-500' },
        { icon: <SiSpring className="text-lime-600" size={35} />, shadow: 'shadow-lime-600/70', hover: 'hover:shadow-lime-700/80 hover:scale-115', active: 'active:scale-115', title: 'Sprin Boot', textColor: 'text-lime-600' },
        { icon: <FaDatabase className="text-blue-700" size={35} />, shadow: 'shadow-blue-700/70', hover: 'hover:shadow-blue-800/80 hover:scale-115', active: 'active:scale-115', title: 'SQL', textColor: 'text-blue-700' },
        { icon: <SiApachekafka className="text-gray-50" size={35} />, shadow: 'shadow-gray-50/70', hover: 'hover:shadow-gray-50/80 hover:scale-115', active: 'active:scale-115', title: 'Kafka', textColor: 'text-white-600' },
    ];

    const complementos: Technology[] = [
        { icon: <FaGitAlt className="text-orange-600" size={35} />, shadow: 'shadow-orange-600/70', hover: 'hover:shadow-orange-700/80 hover:scale-115', active: 'active:scale-115', title: 'Git', textColor: 'text-orange-600' },
        { icon: <FaGithub className="text-gray-50" size={35} />, shadow: 'shadow-gray-50/70', hover: 'hover:shadow-gray-50/80 hover:scale-115', active: 'active:scale-115', title: 'GitHub', textColor: 'text-white-600' },
        { icon: <SiDocker className="text-cyan-300" size={35} />, shadow: 'shadow-cyan-300/70', hover: 'hover:shadow-cyan-400/80 hover:scale-115', active: 'active:scale-115', title: 'Docker', textColor: 'text-cyan-300' },
        { icon: <img src={azurelogo} alt="Azure" width={35} height={35} className="text-blue-600" />, shadow: 'shadow-blue-500/70', hover: 'hover:shadow-blue-600/80 hover:scale-115', active: 'active:scale-115', title: 'Azure', textColor: 'text-blue-500' },
        { icon: <FaUbuntu className="text-orange-600" size={35} />, shadow: 'shadow-orange-600/70', hover: 'hover:shadow-orange-700/80 hover:scale-115', active: 'active:scale-115', title: 'Ubuntu', textColor: 'text-orange-600' },
    ];

    return (
        <section ref={sectionRef} className="min-w-95 mx-auto lg:w-[860px] md:w-[760px] w-4/5 p-4 mt-10 text-white">
            <h2
                className={`text-5xl font-bold text-blue-400 text-center mb-8 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
            >
                {t.title}
            </h2>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }} className="gap-3 grid md:grid-cols-3 justify-center">
                {[t.frontend, t.backend, t.complement].map((catTitle, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: i === 0 ? -100 : i === 1 ? 0 : 100,
                            y: i === 2 ? 100 : 0,
                        }}
                        animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="flex flex-col items-center"
                    >
                        <h3 className="text-xl font-semibold text-white md:mb-12 mb-8">{catTitle}</h3>
                        <div className="flex flex-wrap justify-center md:gap-10 gap-8 mb-5 min-w-45 max-w-64">
                            {(i === 0 ? frontend : i === 1 ? backend : complementos).map((tech, index) => (
                                <TechnologyIcon key={index} tech={tech} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default TechnologiesSection;