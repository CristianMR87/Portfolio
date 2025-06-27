import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contextLanguage';
import { translations } from '../i18n';

const ExperienceSection: React.FC = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();
    const t = translations[language].experience;
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
            {/* Title Animation */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-5xl font-bold text-blue-400 text-center mb-8"
            >
                {t.title}
            </motion.h2>

            {/* Cards Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {t.items.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="relative min-w-80 bg-gradient-to-br from-black to-blue-950 p-6 rounded-xl shadow-lg shadow-blue-500/40 hover:shadow-blue-500/80 transition-all duration-300 border border-gray-700 group h-full">
                            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                            <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                            <p className="text-gray-400 mt-1">{exp.company}</p>
                            <ul className="text-gray-300 text-sm mt-4 space-y-2">
                                {exp.listItems.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {exp.badgeText}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
