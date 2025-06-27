import React from 'react';
import { FaLinkedin, FaGithub, FaCopy } from 'react-icons/fa';
import Button from './Button';
import { useState } from 'react';
import { useLanguage } from '../contextLanguage';
import { translations } from '../i18n';

const AboutSection: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const { language } = useLanguage();
    const t = translations[language].about;

    const copyEmail = () => {
        navigator.clipboard.writeText('Cristianfmorano@gmail.com').then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        });
    };

    return (
        <section className="min-w-95 lg:w-[1024px] p-4 lg:mt-50 mt-40 mb-10 mx-auto w-3/4 rounded-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 md:gap-8 lg:gap-12">
                <div className="flex-1 text-white lg:text-left text-center">
                    <p className="text-4xl font-bold text-blue-400">{t.hello}</p>
                    <p className="text-4xl font-bold">{t.role}</p>
                    <p className="text-gray-300 text-lg mt-8 text-justify">
                        {t.desc}
                    </p>
                    <div className="inline-block border-2 border-green-600 text-green-600 text-sm mt-7 font-semibold py-3 px-7 rounded-full">
                        {t.available}
                    </div>
                    <br />
                    <div className="position:relative flex flex-row items-center justify-center lg:justify-start gap-2">
                        <p className="my-3 mr-2">Cristianfmorano@gmail.com</p>
                        <div className="relative" title="Copiar email">
                            <Button onClick={copyEmail} className="!w-8 !h-8">
                                <FaCopy size={14} className="hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg transition-all duration-300" />
                            </Button>
                            {copied && (
                                <span className="absolute -bottom-11 left-1/2 transform -translate-x-1/2 bg-blue-950 text-white text-xs py-1 px-2 border border-gray-700 rounded-2xl">
                                    {t.emailCopied}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row text-sm font-semibold rounded-full lg:justify-start justify-center">
                        <a
                            title="Linkedin"
                            href="https://www.linkedin.com/in/cristianmoranorodriguez/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} className="hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg mr-4 transition-all duration-300" />
                        </a>
                        <a
                            title="GitHub"
                            href="https://github.com/CristianMR87"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} className="text-white hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg rounded-full transition-all duration-300" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col shrink-0 items-center justify-center lg:mt-10 mt-5">
                    <div className="neon-bg w-56 h-56 md:w-64 md:h-64 lg:w-[320px] lg:h-[320px] rounded-full flex items-center justify-center">
                        <img
                            src="/images/Perfil2.png"
                            alt="Foto de Cristian"
                            className="w-56 h-56 md:w-64 md:h-64 lg:w-[320px] lg:h-[320px] rounded-full object-cover "
                        />
                    </div>
                    <div className="group">
                        <a
                            href={language === 'en' ? '/CV Cristian Morano EN.pdf' : '/CV Cristian Morano SP.pdf'}
                            download={language === 'en' ? 'CV Cristian Morano EN.pdf' : 'CV Cristian Morano SP.pdf'}
                            title={t.cvTitle}
                            className="mt-8 inline-block bg-gradient-to-br from-black to-blue-950 border border-cyan-400/30 rounded-full shadow-lg shadow-blue-500/40 hover:shadow-blue-500/80 transition-all duration-300 cursor-pointer px-4 py-2 gradient-text"
                        >
                            {t.downloadCV}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;