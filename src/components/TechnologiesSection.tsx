import React, { useState, useEffect, useRef } from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJava,
    FaPython,
    FaGitAlt,
    FaGithub,
    FaCode,
    FaUbuntu,
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiBootstrap,
    SiOracle,
} from 'react-icons/si';

// Interfaz para las propiedades del ícono
interface IconProps {
    className?: string;
    size?: number | string;
}

// Interfaz para las propiedades de cada tecnología
interface Technology {
    icon: React.ReactNode;
    shadow: string;
    hover: string;
    active: string;
    title: string;
}

const TechnologiesSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const sectionRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef<number>(window.scrollY);

    // Tecnologías con tipado
    const frontend: Technology[] = [
        { icon: <FaHtml5 className="text-orange-500" size={35} />, shadow: 'shadow-lg shadow-orange-500/70', hover: 'hover:shadow-xl hover:shadow-orange-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-orange-600/80', title: 'HTML5' },
        { icon: <FaCss3Alt className="text-blue-500" size={35} />, shadow: 'shadow-lg shadow-blue-500/70', hover: 'hover:shadow-xl hover:shadow-blue-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-blue-600/80', title: 'CSS3' },
        { icon: <FaReact className="text-cyan-500" size={35} />, shadow: 'shadow-lg shadow-cyan-500/70', hover: 'hover:shadow-xl hover:shadow-cyan-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-cyan-600/80', title: 'React' },
        { icon: <SiTailwindcss className="text-teal-500" size={35} />, shadow: 'shadow-lg shadow-teal-500/70', hover: 'hover:shadow-xl hover:shadow-teal-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-teal-600/80', title: 'TailwindCSS' },
        { icon: <SiBootstrap className="text-purple-600" size={35} />, shadow: 'shadow-lg shadow-purple-600/70', hover: 'hover:shadow-xl hover:shadow-purple-700/80 hover:scale-115', active: 'active:shadow-xl active:shadow-purple-700/80', title: 'Bootstrap' },
    ];

    const backend: Technology[] = [
        { icon: <FaJava className="text-red-600" size={35} />, shadow: 'shadow-lg shadow-red-600/70', hover: 'hover:shadow-xl hover:shadow-red-700/80 hover:scale-115', active: 'active:shadow-xl active:shadow-red-700/80', title: 'Java' },
        { icon: <FaPython className="text-blue-500" size={35} />, shadow: 'shadow-lg shadow-blue-500/70', hover: 'hover:shadow-xl hover:shadow-blue-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-blue-600/80', title: 'Python' },
        { icon: <SiOracle className="text-red-700" size={35} />, shadow: 'shadow-lg shadow-red-700/70', hover: 'hover:shadow-xl hover:shadow-red-800/80 hover:scale-115', active: 'active:shadow-xl active:shadow-red-800/80', title: 'Oracle' },
    ];

    const complementos: Technology[] = [
        { icon: <FaGitAlt className="text-orange-600" size={35} />, shadow: 'shadow-lg shadow-orange-600/70', hover: 'hover:shadow-xl hover:shadow-orange-700/80 hover:scale-115', active: 'active:shadow-xl active:shadow-orange-700/80', title: 'Git' },
        { icon: <FaGithub className="text-gray-300" size={35} />, shadow: 'shadow-lg shadow-gray-300/70', hover: 'hover:shadow-xl hover:shadow-gray-400/80 hover:scale-115', active: 'active:shadow-xl active:shadow-gray-400/80', title: 'GitHub' },
        { icon: <FaCode className="text-blue-500" size={35} />, shadow: 'shadow-lg shadow-blue-500/70', hover: 'hover:shadow-xl hover:shadow-blue-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-blue-600/80', title: 'VSCode' },
        { icon: <FaUbuntu className="text-orange-600" size={35} />, shadow: 'shadow-lg shadow-orange-600/70', hover: 'hover:shadow-xl hover:shadow-orange-700/80 hover:scale-115', active: 'active:shadow-xl active:shadow-orange-700/80', title: 'Ubuntu' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    }, []);

    const getAnimationClasses = (position: 'left' | 'center' | 'right'): string => {
        if (window.innerWidth >= 768) {
            switch (position) {
                case 'left':
                    return isVisible ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:-translate-x-20';
                case 'center':
                    return isVisible ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-20';
                case 'right':
                    return isVisible ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:translate-x-20';
                default:
                    return '';
            }
        }
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20';
    };

    const getTextColor = (icon: React.ReactNode): string => {
        if (React.isValidElement<IconProps>(icon)) {
            const className = icon.props.className;
            return className?.match(/text-[a-z]+-\d{3}/)?.[0] || 'text-gray-300';
        }
        return 'text-gray-300';
    };

    return (
        <section
            ref={sectionRef}
            className={`min-w-95 mx-auto lg:w-[860px] md:w-[760px] w-4/5 p-4 mt-10 text-white transition-all duration-700 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-blue-400 text-center mb-8">Tecnologías</h2>
                <div className="gap-3 grid md:grid-cols-3 justify-center">
                    {/* Columna Frontend (izquierda) */}
                    <div className={`p-4 transition-all duration-700 ease-in-out mx-auto ${getAnimationClasses('left')}`}>
                        <h3 className="text-xl font-semibold text-white mb-6 text-center">Frontend</h3>
                        <div className="flex flex-wrap justify-center gap-8 min-w-45 max-w-64">
                            {frontend.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center group transition-all duration-300 relative"
                                >
                                    <span
                                        className={`p-3 rounded-full bg-neutral-950 ${tech.shadow} ${tech.hover} ${tech.active} transition-all duration-300 ease-in-out`}
                                    >
                                        {tech.icon}
                                    </span>
                                    <span
                                        className={`${getTextColor(tech.icon)} text-sm absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-gray-900 px-2 py-1 rounded border ${getTextColor(tech.icon).replace('text-', 'border-')} z-10 whitespace-nowrap`}
                                    >
                                        {tech.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Columna Backend (centro) */}
                    <div className={`p-4 transition-all duration-700 ease-in-out mx-auto ${getAnimationClasses('center')}`}>
                        <h3 className="text-xl font-semibold text-white mb-6 text-center">Backend</h3>
                        <div className="flex flex-wrap justify-center gap-8 min-w-45 max-w-64">
                            {backend.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center group transition-all duration-300 relative"
                                >
                                    <span
                                        className={`p-3 rounded-full bg-neutral-950 ${tech.shadow} ${tech.hover} ${tech.active} transition-all duration-300 ease-in-out`}
                                    >
                                        {tech.icon}
                                    </span>
                                    <span
                                        className={`${getTextColor(tech.icon)} text-sm absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-gray-900 px-2 py-1 rounded border ${getTextColor(tech.icon).replace('text-', 'border-')} z-10 whitespace-nowrap`}
                                    >
                                        {tech.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Columna Complementos (derecha) */}
                    <div className={`p-4 transition-all duration-700 ease-in-out mx-auto ${getAnimationClasses('right')}`}>
                        <h3 className="text-xl font-semibold text-white mb-6 text-center">Complementos</h3>
                        <div className="flex flex-wrap justify-center gap-8 min-w-45 max-w-64">
                            {complementos.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center group transition-all duration-300 relative"
                                >
                                    <span
                                        className={`p-3 rounded-full bg-neutral-950 ${tech.shadow} ${tech.hover} ${tech.active} transition-all duration-300 ease-in-out`}
                                    >
                                        {tech.icon}
                                    </span>
                                    <span
                                        className={`${getTextColor(tech.icon)} text-sm absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-gray-900 px-2 py-1 rounded border ${getTextColor(tech.icon).replace('text-', 'border-')} z-10 whitespace-nowrap`}
                                    >
                                        {tech.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;