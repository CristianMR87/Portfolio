import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../contextLanguage';
import { translations } from '../i18n';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;
    return (
        <footer className="text-gray-300 p-5 mt-10">
            <div className="max-w-[1024px] mx-auto flex flex-col items-center gap-2 text-sm">
                <div className="flex gap-6">
                    <a
                        title="Linkedin"
                        href="https://www.linkedin.com/in/cristianmoranorodriguez/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={20} className="hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg transition-all duration-300" />
                    </a>
                    <a
                        title="GitHub"
                        href="https://github.com/CristianMR87"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={20} className="text-white hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg rounded-full transition-all duration-300" />
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-semibold text-white">Cristian Morano</p>
                    <p>© {new Date().getFullYear()} {t.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;