import React, { useState, useEffect, useRef } from 'react';

interface ExperienceCardProps {
    title: string;
    period: string;
    company: string;
    listItems: string[];
    badgeText: string;
    badgeColor: string;
    shadowColor: string;
    hoverShadowColor: string;
    isLeft?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, period, company, listItems, badgeText, badgeColor, shadowColor, hoverShadowColor }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`relative min-w-80 bg-gradient-to-br from-neutral-950 to-blue-950 p-6 rounded-xl shadow-xl ${shadowColor} hover:${hoverShadowColor} active:${hoverShadowColor} transition-all duration-300 border border-gray-700 group`}
        >
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-sm mt-1">{period}</p>
            <p className="text-gray-400 mt-1">{company}</p>
            <ul
                className={`text-gray-300 text-sm mt-4 space-y-2 overflow-hidden transition-all duration-700 ease-in-out ${
                    isExpanded ? 'max-h-48' : 'max-h-0 md:max-h-48'
                }`}
            >
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button
                onClick={toggleExpand}
                className="md:hidden text-green-400 font-semibold flex items-center justify-center gap-1 mt-4 transition-colors duration-700 mx-auto cursor-pointer"
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
            <span
                className={`absolute top-2 right-2 ${badgeColor} text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300`}
            >
                {badgeText}
            </span>
        </div>
    );
};

interface ExperienceSectionProps {
    className?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ className }) => {
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
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

    }, []);

    return (
        <section
            ref={sectionRef}
            className={`min-w-95 md:w-full lg:w-[1024px] w-4/5 p-4 lg:mt-25 mt-1 mx-auto ${className || ''} transition-all duration-700 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >
            <h2 className="text-5xl font-bold text-blue-400 text-center lg:text-center mb-8">Experiencia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                    className={`md:transition-all md:duration-700 md:ease-in-out ${
                        isVisible ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:-translate-x-20'
                    }`}
                >
                    <ExperienceCard
                        title="Desarrollador Full-Stack"
                        period="Marzo 2024 - Actualidad"
                        company="Desarrollador Freelancer"
                        listItems={[
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                        ]}
                        badgeText="Autodidacta"
                        badgeColor="bg-blue-600"
                        shadowColor="shadow-blue-500/40"
                        hoverShadowColor="shadow-blue-500/80"
                        isLeft={true}
                    />
                </div>
                <div
                    className={`md:transition-all md:duration-700 md:ease-in-out ${
                        isVisible ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:translate-x-20'
                    }`}
                >
                    <ExperienceCard
                        title="SDR / AE"
                        period="Agosto 2021 - Agosto 2023"
                        company="Teimas"
                        listItems={[
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                            '- bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla .',
                        ]}
                        badgeText="Empresa"
                        badgeColor="bg-green-800"
                        shadowColor="shadow-green-500/40"
                        hoverShadowColor="shadow-green-500/80"
                        isLeft={false}
                    />
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;