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
            className={`relative min-w-80 bg-gradient-to-br from-neutral-950 to-blue-950 p-6 rounded-xl shadow-lg ${shadowColor} hover:${hoverShadowColor} active:${hoverShadowColor} transition-all duration-300 border border-gray-700 group h-full`}
        >
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-sm mt-1">{period}</p>
            <p className="text-gray-400 mt-1">{company}</p>
            <ul
                className={`text-gray-300 text-sm mt-4 space-y-2 transition-all duration-700 ease-in-out ${
                    isExpanded ? 'max-h-none' : 'max-h-0 md:max-h-none'
                } overflow-hidden`}
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
    const sectionRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
    const lastScrollY = useRef(window.scrollY);

    const experienceData = [
        {
            title: "Desarrollador Full-Stack",
            period: "Marzo 2024 - Actualidad",
            company: "Desarrollador Freelancer",
            listItems: [
                '- Formación continua en tecnologías web a través del FP de DAW y cursos avanzados, con enfoque en front-end y back-end.',
                '- Desarrollo de proyectos full-stack aplicando principios de arquitectura y buenas prácticas.',
                '- Conocimientos en bases de datos, lógica de programación, despliegue de aplicaciones web y frameworks, con especialización en Java y Python.',
            ],
            badgeText: "Autodidacta",
            badgeColor: "bg-blue-600",
            shadowColor: "shadow-blue-500/40",
            hoverShadowColor: "shadow-blue-500/80",
            isLeft: true,
        },
        {
            title: "SDR / AE",
            period: "Agosto 2021 - Agosto 2023",
            company: "Teimas",
            listItems: [
                '- Experiencia en el sector tecnológico, trabajando con software en la nube (SaaS)',
                '- Colaboración con equipos técnicos para la comercialización y demostración de software.',
                '- Conocimiento del ciclo de vida del producto digital, desde su desarrollo hasta su implementación.',
                '- Análisis de necesidades del cliente y adaptación de soluciones tecnológicas.',
                '- Habilidades en comunicación, gestión de clientes y resolución de problemas.',
            ],
            badgeText: "Empresa",
            badgeColor: "bg-green-800",
            shadowColor: "shadow-green-500/40",
            hoverShadowColor: "shadow-green-500/80",
            isLeft: false,
        },
    ];

    useEffect(() => {
        if (visibleCards.length !== experienceData.length) {
            setVisibleCards(new Array(experienceData.length).fill(false));
        }

        const cardObserver = new IntersectionObserver(
            (entries) => {
                const currentScrollY = window.scrollY;
                const isScrollingUp = currentScrollY < lastScrollY.current;

                entries.forEach((entry) => {
                    const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (index !== -1) {
                        if (entry.isIntersecting) {
                            setVisibleCards((prev) => {
                                const newVisible = [...prev];
                                newVisible[index] = true;
                                return newVisible;
                            });
                        } else if (isScrollingUp && !entry.isIntersecting) {
                            setVisibleCards((prev) => {
                                const newVisible = [...prev];
                                newVisible[index] = false;
                                return newVisible;
                            });
                        }
                    }
                });

                lastScrollY.current = currentScrollY;
            },
            { threshold: 0.3, rootMargin: "0px" }
        );

        cardRefs.current.forEach((card) => {
            if (card) cardObserver.observe(card);
        });

        return () => {
            cardObserver.disconnect();
        };
    }, [visibleCards.length, experienceData.length]);

    return (
        <section
            ref={sectionRef}
            className={`min-w-95 md:w-full lg:w-[1024px] w-4/5 p-4 lg:mt-25 mt-5 mx-auto ${className || ''}`}
        >
            <h2 className="text-5xl font-bold text-blue-400 text-center lg:text-center mb-8">Experiencia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {experienceData.map((exp, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }}
                        className={`transition-all duration-700 ease-in-out ${
                            visibleCards[index]
                                ? 'opacity-100 translate-x-0'
                                : exp.isLeft
                                ? 'opacity-0 -translate-x-20'
                                : 'opacity-0 translate-x-20'
                        }`}
                    >
                        <ExperienceCard
                            title={exp.title}
                            period={exp.period}
                            company={exp.company}
                            listItems={exp.listItems}
                            badgeText={exp.badgeText}
                            badgeColor={exp.badgeColor}
                            shadowColor={exp.shadowColor}
                            hoverShadowColor={exp.hoverShadowColor}
                            isLeft={exp.isLeft}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;