import React, { useEffect, useState, useRef } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import EmailSection from './EmailSection';
import Button from './Button';
import { useLanguage } from '../contextLanguage';
import { translations } from '../i18n';

interface NavbarProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
    refs: {
        aboutRef: React.RefObject<HTMLDivElement | null>;
        experienceRef: React.RefObject<HTMLDivElement | null>;
        technologiesRef: React.RefObject<HTMLDivElement | null>;
        projectsRef: React.RefObject<HTMLDivElement | null>;
        educationRef: React.RefObject<HTMLDivElement | null>;
        contactRef: React.RefObject<HTMLDivElement | null>;
    };
}

const LanguageSelector: React.FC<{ isMobile?: boolean }> = () => {
    const { language, setLanguage } = useLanguage();
    // Alterna entre 'en' y 'es' al hacer click
    const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en');
    return (
        <button
            onClick={toggleLanguage}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-950 border border-gray-700 text-2xl shadow-lg hover:shadow-blue-400/60 active:shadow-blue-400/60 transition-all duration-300 cursor-pointer ml-4"
            title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            aria-label="Toggle language"
        >
            {language === 'en' ? '🇬🇧' : '🇪🇸'}
        </button>
    );
};

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, refs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [shouldCloseEmail, setShouldCloseEmail] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const { language } = useLanguage();
    const t = translations[language].navbar;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
            if (scrollY > 0 && (isMenuOpen || !shouldCloseEmail)) {
                setIsMenuOpen(false);
                setShouldCloseEmail(true);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
                setShouldCloseEmail(true);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, shouldCloseEmail]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        setShouldCloseEmail(false);
    };

    return (
        <nav
            className={`lg:max-w-[1000px] w-9/10 mt-2 mx-auto p-4 bg-blue-950/30 backdrop-blur-lg rounded-2xl shadow-lg fixed top-0 left-0 right-0 z-50 border-2 border-gray-700 shadow-blue-500/40 hover:shadow-blue-500/60 active:shadow-blue-500/60 transition-all duration-300 ${isScrolled ? 'scale-90 py-3 translate-y-2' : 'scale-100 py-3 translate-y-4'
                }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto lg:grid lg:grid-cols-3">
                <div className="flex items-center space-x-4 shrink-0 lg:shrink lg:justify-self-start">
                    {/* Botón de idioma a la izquierda */}
                    <LanguageSelector />
                    <Button onClick={toggleMenu} className="lg:hidden">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
                        </svg>
                    </Button>
                </div>
                <ul
                    ref={menuRef}
                    className={`${isMenuOpen
                            ? 'left-0 bg-gradient-to-br from-black to-blue-950 shadow-lg shadow-blue-500/40 mt-1 scale-90'
                            : '-left-full bg-transparent scale-100'
                        } lg:flex lg:border-hidden border border-gray-700 -ml-2 lg:space-x-6 fixed lg:static top-15 h-auto w-40 lg:w-auto rounded-2xl p-4 lg:p-0 transition-all duration-500 ease-in-out z-40 space-y-4 lg:space-y-0 lg:justify-self-center lg:text-center lg:whitespace-nowrap lg:opacity-100`}
                >
                    <li className="group relative">
                        <a
                            href="#about"
                            className="text-white transition-all duration-400 block lg:inline underline-from-left gradient-text"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(refs.aboutRef);
                                setIsMenuOpen(false);
                            }}
                        >
                            {t.about}
                        </a>
                    </li>
                    <li className="group relative bg-transparent">
                        <a
                            href="#experience"
                            className="text-white transition-all duration-400 block lg:inline underline-from-left gradient-text"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(refs.experienceRef);
                                setIsMenuOpen(false);
                            }}
                        >
                            {t.experience}
                        </a>
                    </li>
                    <li className="group relative bg-transparent">
                        <a
                            href="#technologies"
                            className="text-white transition-all duration-400 block lg:inline underline-from-left gradient-text"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(refs.technologiesRef);
                                setIsMenuOpen(false);
                            }}
                        >
                            {t.technologies}
                        </a>
                    </li>
                    <li className="group relative bg-transparent">
                        <a
                            href="#projects"
                            className="text-white transition-all duration-400 block lg:inline underline-from-left gradient-text"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(refs.projectsRef);
                                setIsMenuOpen(false);
                            }}
                        >
                            {t.projects}
                        </a>
                    </li>
                    <li className="group relative bg-transparent">
                        <a
                            href="#education"
                            className="text-white transition-all duration-400 block lg:inline underline-from-left gradient-text"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(refs.educationRef);
                                setIsMenuOpen(false);
                            }}
                        >
                            {t.education}
                        </a>
                    </li>
                    <li className="group relative bg-transparent">
                        <a
                            href="#contact"
                            className="text-white transition-all duration-400 block lg:inline underline-from-left gradient-text"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(refs.contactRef);
                                setIsMenuOpen(false);
                            }}
                        >
                            {t.contact}
                        </a>
                    </li>
                </ul>
                <div className="flex space-x-4 shrink-0 ml-auto lg:ml-0 lg:justify-self-end items-center justify-center">
                    <a
                        title="Linkedin"
                        href="https://www.linkedin.com/in/cristianmoranorodriguez/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin
                            size={24}
                            className="text-white hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg transition-all duration-300"
                        />
                    </a>
                    <a
                        title="GitHub"
                        href="https://github.com/CristianMR87"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub
                            size={24}
                            className="text-white hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg rounded-full transition-all duration-300"
                        />
                    </a>
                    <EmailSection closeOnScroll={shouldCloseEmail} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;