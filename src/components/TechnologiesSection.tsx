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

const TechnologiesSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(window.scrollY);

    // Tecnologías con íconos, sombras y efectos redondeados solo para los íconos
    const frontend = [
        { name: '', icon: <FaHtml5 className="text-orange-500" size={35} />, shadow: 'shadow-lg shadow-orange-500/70', hover: 'hover:shadow-xl hover:shadow-orange-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-orange-600/80', title: 'HTML5' },
        { name: '', icon: <FaCss3Alt className="text-blue-500" size={35} />, shadow: 'shadow-lg shadow-blue-500/70', hover: 'hover:shadow-xl hover:shadow-blue-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-blue-600/80', title: 'CSS3' },
        { name: '', icon: <FaReact className="text-cyan-500" size={35} />, shadow: 'shadow-lg shadow-cyan-500/70', hover: 'hover:shadow-xl hover:shadow-cyan-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-cyan-600/80', title: 'React' },
        { name: '', icon: <SiTailwindcss className="text-teal-500" size={35} />, shadow: 'shadow-lg shadow-teal-500/70', hover: 'hover:shadow-xl hover:shadow-teal-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-teal-600/80', title: 'TailwindCSS' },
        { name: '', icon: <SiBootstrap className="text-purple-600" size={35} />, shadow: 'shadow-lg shadow-purple-600/70', hover: 'hover:shadow-xl hover:shadow-purple-700/80 hover:scale-115', active: 'active:shadow-xl active:shadow-purple-700/80', title: 'Bootstrap' },
    ];

    const backend = [
        { name: '', icon: <FaJava className="text-red-600" size={35} />, shadow: 'shadow-lg shadow-red-600/70', hover: 'hover:shadow-xl hover:shadow-red-700/80 hover:scale-115', active: 'active:shadow-xl active:shadow-red-700/80', title: 'JAVA' },
        { name: '', icon: <FaPython className="text-blue-500" size={35} />, shadow: 'shadow-lg shadow-blue-500/70', hover: 'hover:shadow-xl hover:shadow-blue-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-blue-600/80', title: 'Python' },
        { name: '', icon: <SiOracle className="text-red-700" size={35} />, shadow: 'shadow-lg shadow-red-700/70', hover: 'hover:shadow-xl hover:shadow-red-800/80 hover:scale-115', active: 'active:shadow-xl active:shadow-red-800/80', title: 'Oracle' },
    ];

    const complementos = [
        { name: '', icon: <FaGitAlt className="text-orange-600" size={35} />, shadow: 'shadow-lg shadow-orange-600/70', hover: 'hover:shadow-xl hover:shadow-orange-700/80 hover:scale-115', active: 'active:shadow-xl active:shadow-orange-700/80', title: 'Git' },
        { name: '', icon: <FaGithub className="text-gray-300" size={35} />, shadow: 'shadow-lg shadow-gray-300/70', hover: 'hover:shadow-xl hover:shadow-gray-400/80 hover:scale-115', active: 'active:shadow-xl active:shadow-gray-400/80', title: 'GitHub' },
        { name: '', icon: <FaCode className="text-blue-500" size={35} />, shadow: 'shadow-lg shadow-blue-500/70', hover: 'hover:shadow-xl hover:shadow-blue-600/80 hover:scale-115', active: 'active:shadow-xl active:shadow-blue-600/80', title: 'VSCode' },
        { name: '', icon: <FaUbuntu className="text-orange-600" size={35} />, shadow: 'shadow-lg shadow-orange-600/70', hover: 'hover:shadow-xl hover:shadow-orange-700/80 hover:scale-115', active: 'active:shadow-xl active:shadow-orange-700/80', title: 'Ubuntu' },
    ];

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
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const getAnimationClasses = (position: 'left' | 'center' | 'right') => {
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

    return (
        <section
            ref={sectionRef}
            className={`min-w-95 mx-auto lg:w-[860px] w-4/5 p-4 mt-10 text-white transition-all duration-700 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-blue-400 text-center mb-8">Tecnologías</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-7">
                    {/* Columna Frontend (izquierda) */}
                    <div
                        className={`p-6 transition-all duration-700 ease-in-out ${getAnimationClasses('left')}`}
                    >
                        <h3 className="text-xl font-semibold text-white mb-6 text-center">Frontend</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {frontend.map((tech, index) => (
                                <div
                                    key={index}
                                    title={tech.title}
                                    className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
                                >
                                    <span
                                        className={`p-3 rounded-full bg-neutral-950 ${tech.shadow} ${tech.hover} ${tech.active} transition-all duration-300 ease-in-out`}
                                    >
                                        {tech.icon}
                                    </span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Columna Backend (centro) */}
                    <div
                        className={`p-6 transition-all duration-700 ease-in-out ${getAnimationClasses('center')}`}
                    >
                        <h3 className="text-xl font-semibold text-white mb-6 text-center">Backend</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {backend.map((tech, index) => (
                                <div
                                    key={index}
                                    title={tech.title}
                                    className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
                                >
                                    <span
                                        className={`p-3 rounded-full bg-neutral-950 ${tech.shadow} ${tech.hover} ${tech.active} transition-all duration-300 ease-in-out`}
                                    >
                                        {tech.icon}
                                    </span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Columna Complementos (derecha) */}
                    <div
                        className={`p-6 transition-all duration-700 ease-in-out ${getAnimationClasses('right')}`}
                    >
                        <h3 className="text-xl font-semibold text-white mb-6 text-center">Complementos</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {complementos.map((tech, index) => (
                                <div
                                    key={index}
                                    title={tech.title}
                                    className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
                                >
                                    <span
                                        className={`p-3 rounded-full bg-neutral-950 ${tech.shadow} ${tech.hover} ${tech.active} transition-all duration-300 ease-in-out`}
                                    >
                                        {tech.icon}
                                    </span>
                                    <span>{tech.name}</span>
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