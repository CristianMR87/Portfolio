import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
    return (
        <div className={`relative min-w-80 bg-gradient-to-br from-neutral-950 to-blue-950 p-6 rounded-xl shadow-lg ${shadowColor} hover:${hoverShadowColor} transition-all duration-300 border border-gray-700 group h-full`}>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-sm mt-1">{period}</p>
            <p className="text-gray-400 mt-1">{company}</p>
            <ul className="text-gray-300 text-sm mt-4 space-y-2">
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <span className={`absolute top-2 right-2 ${badgeColor} text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                {badgeText}
            </span>
        </div>
    );
};

const experienceData = [
    {
        title: "Desarrollador Full-Stack",
        period: "Marzo 2024 - Actualidad",
        company: "Desarrollador Freelancer",
        listItems: [
            '- Formación continua en tecnologías web.',
            '- Desarrollo de proyectos full-stack aplicando buenas prácticas.',
            '- Especialización en Java y Python.',
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
            '- Experiencia en software en la nube (SaaS).',
            '- Colaboración con equipos técnicos.',
            '- Análisis de necesidades del cliente.',
        ],
        badgeText: "Empresa",
        badgeColor: "bg-green-800",
        shadowColor: "shadow-green-500/40",
        hoverShadowColor: "shadow-green-500/80",
        isLeft: false,
    },
];

const ExperienceSection: React.FC = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    const lastScrollY = useRef<number>(0); // To detect scroll direction

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
            { threshold: 0.5 }
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

    return (
        <section ref={sectionRef} className="min-w-95 md:w-full lg:w-[1024px] w-4/5 p-4 mt-5 mx-auto">
            {/* Animación del Título */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-5xl font-bold text-blue-400 text-center mb-8"
            >
                Experiencia
            </motion.h2>

            {/* Animación de las Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: exp.isLeft ? -100 : 100 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <ExperienceCard {...exp} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
