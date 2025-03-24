import React, { useState, useEffect, useRef } from 'react';

interface EducationCardProps {
    title: string;
    period: string;
    institution: string;
    listItems: string[];
    badgeText: string;
    badgeColor: string;
    shadowColor: string;
    hoverShadowColor: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
    title,
    period,
    institution,
    listItems,
    badgeText,
    badgeColor,
    shadowColor,
    hoverShadowColor
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`relative min-w-80 bg-gradient-to-br from-neutral-950 to-blue-950 p-6 rounded-xl shadow-xl ${shadowColor} transition-all duration-300 border border-gray-700 group ${
                hoverShadowColor === 'shadow-blue-500/80' ? 'hover:shadow-blue-500/80' :
                hoverShadowColor === 'shadow-green-500/80' ? 'hover:shadow-green-500/80' :
                hoverShadowColor === 'shadow-purple-500/80' ? 'hover:shadow-purple-500/80' :
                hoverShadowColor === 'shadow-orange-500/80' ? 'hover:shadow-orange-500/80' : ''
            }`}
        >
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-sm mt-1">{period}</p>
            <p className="text-gray-400 mt-1">{institution}</p>
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
                onClick={() => setIsExpanded(!isExpanded)}
                className="md:hidden text-green-400 font-semibold flex items-center justify-center gap-1 mt-4 transition-colors duration-700 mx-auto cursor-pointer"
            >
                {isExpanded ? 'Ocultar' : 'Detalles'}
                <svg
                    className={`w-4 h-4 transform transition-transform duration-700 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <span
                className={`absolute top-2 right-2 ${badgeColor} text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
                {badgeText}
            </span>
        </div>
    );
};

const EducationTimeline: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    const educationData = [
        {
            title: "Grado en Ingeniería Informática",
            period: "2018 - 2022",
            institution: "Universidad de Example",
            listItems: ["- Especialización en Desarrollo Web", "- Proyecto final sobresaliente"],
            badgeText: "Título",
            badgeColor: "bg-blue-600",
            shadowColor: "shadow-blue-500/40",
            hoverShadowColor: "shadow-blue-500/80",
            isLeft: true
        },
        {
            title: "Curso Full Stack Developer",
            period: "2023",
            institution: "Plataforma Online",
            listItems: ["- React y Node.js", "- 120 horas de formación"],
            badgeText: "Certificado",
            badgeColor: "bg-green-800",
            shadowColor: "shadow-green-500/40",
            hoverShadowColor: "shadow-green-500/80",
            isLeft: false
        },
        {
            title: "Máster en Inteligencia Artificial",
            period: "2024",
            institution: "Instituto Tecnológico",
            listItems: ["- Machine Learning avanzado", "- Certificación en IA"],
            badgeText: "Máster",
            badgeColor: "bg-purple-600",
            shadowColor: "shadow-purple-500/40",
            hoverShadowColor: "shadow-purple-500/80",
            isLeft: true
        },
        {
            title: "Bootcamp de Ciberseguridad",
            period: "2025",
            institution: "Cyber Academy",
            listItems: ["- Ethical Hacking", "- 80 horas intensivas"],
            badgeText: "Certificado",
            badgeColor: "bg-orange-600",
            shadowColor: "shadow-orange-500/40",
            hoverShadowColor: "shadow-orange-500/80",
            isLeft: false
        }
    ];

    useEffect(() => {
        if (visibleCards.length !== educationData.length) {
            setVisibleCards(new Array(educationData.length).fill(false));
        }

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsSectionVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.1, rootMargin: "0px" }
        );

        const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (index !== -1) {
                        setVisibleCards((prev) => {
                            const newVisible = [...prev];
                            newVisible[index] = entry.isIntersecting;
                            return newVisible;
                        });
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px" }
        );

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        cardRefs.current.forEach((card) => {
            if (card) cardObserver.observe(card);
        });

        return () => {
            sectionObserver.disconnect();
            cardObserver.disconnect();
        };
    }, [visibleCards.length, educationData.length]);

    return (
        <section
            ref={sectionRef}
            className="min-w-95 md:w-full lg:w-[1024px] w-19/20 p-4 mt-10 mx-auto"
        >
            <h2
                className={`text-5xl font-bold text-blue-400 text-center mb-12 transition-all duration-700 ease-in-out ${
                    isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Formación
            </h2>
            <div className="relative min-h-[100vh]">
                <div
                    className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-950/80 via-blue-950 to-purple-950 h-full transition-all duration-700 ease-in-out ${
                        isSectionVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                ></div>
                <div className="space-y-16">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className={`flex flex-row-reverse md:${edu.isLeft ? 'flex-row' : 'flex-row-reverse'} items-center justify-between`}
                        >
                            <div
                                ref={(el) => {
                                    cardRefs.current[index] = el;
                                }}
                                className={`w-full md:w-5/12 transition-all duration-700 ease-in-out ${
                                    visibleCards[index]
                                        ? 'opacity-100 translate-x-0'
                                        : edu.isLeft
                                            ? 'opacity-0 md:-translate-x-20 translate-x-10'
                                            : 'opacity-0 translate-x-10 md:translate-x-20'
                                }`}
                            >
                                <div
                                    className={`md:transform ${
                                        edu.isLeft ? 'md:origin-left md:scale-x-110 ' : 'md:origin-right md:scale-x-110 '
                                    }`}
                                >
                                    <EducationCard 
                                        title={edu.title}
                                        period={edu.period}
                                        institution={edu.institution}
                                        listItems={edu.listItems}
                                        badgeText={edu.badgeText}
                                        badgeColor={edu.badgeColor}
                                        shadowColor={edu.shadowColor}
                                        hoverShadowColor={edu.hoverShadowColor}
                                    />
                                </div>
                            </div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full z-10"></div>
                            <div className="hidden md:block md:w-5/12"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Portfolio: React.FC = () => {
    return (
        <div className="min-h-screen">
            <EducationTimeline />
        </div>
    );
};

export default Portfolio;