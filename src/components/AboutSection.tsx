import React from 'react';
import { FaLinkedin, FaGithub, FaCopy } from 'react-icons/fa';
import Button from './Button';
import { useState } from 'react';

const AboutSection: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('Cristian.morano@hotmail.com').then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        });
    };

    return (
        <section className="min-w-95 lg:w-[1024px] p-4 md:mt-30 mt-20 mx-auto w-3/4 rounded-lg ">           
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 md:gap-8 lg:gap-12">                
                <div className="flex-1 text-white lg:text-left text-center">
                    <p className="text-4xl font-bold text-blue-400">¡Hola! Soy Cristian.</p>
                    <p className="text-4xl font-bold">Desarrollador Full-Stack.</p>
                    <p className="text-gray-300 text-lg mt-8 text-justify">
                        Actualmente estudiante de DAW y futuro desarrollador Full-Stack.
                        Apasionado por la tecnología y el mundo del desarrollo web. Con más de un año de formación autodidacta y actualmente estudiando DAW, centro mis conocimientos en tecnologías como Java, Python, Oracle SQL, React, Bootstrap, Ubuntu. He desarrollado varios proyectos personales aplicando estas tecnologías, desde su creación hasta su despliegue final.
                    </p>
                    <p className="text-gray-300 text-lg mt-8 text-justify">
                        Siéntete libre de contactarme para cualquier información extra.
                    </p>
                    {/* Banner "Disponible" */}
                    <div className="inline-block border-2 border-green-600 text-green-600 text-sm mt-7 font-semibold py-3 px-7 rounded-full">
                        Disponible para trabajar
                    </div>
                    <br/>
                    <div className="position:relative flex flex-row items-center justify-center lg:justify-start gap-2">
                        <p className="my-3 mr-2">Cristian.morano@hotmail.com</p>
                        <div className="relative" title="Copiar email">
                            <Button onClick={copyEmail} className="!w-8 !h-8">
                                <FaCopy size={14} className="hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg transition-all duration-300" />
                            </Button>
                            {copied && (
                                <span className="absolute -bottom-11 left-1/2 transform -translate-x-1/2 bg-blue-950 text-white text-xs py-1 px-2 border border-gray-700 rounded-2xl">
                                    ¡Email Copiado!
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-row text-sm font-semibold rounded-full lg:justify-start justify-center">
                        <a
                            title="Linkedin"
                            href="https://linkedin.com/in/tu-linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} className="hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg mr-4 transition-all duration-300"/>
                        </a>
                        <a
                            title="GitHub"
                            href="https://github.com/CristianMR87"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} className="text-white hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 shadow-lg rounded-full transition-all duration-300"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col shrink-0 items-center justify-center lg:mt-10 mt-5">
                    <img
                        src="/images/Perfil1.jpg"
                        alt="Foto de Cristian"
                        className="w-50 h-50 md:w-60 md:h-60 lg:w-[300px] lg:h-[300px] rounded-full object-cover border-2 border-gray-700"
                    />
                    <a
                        href="/cv.pdf"
                        download="CV_CristianMorano.pdf"
                        className="mt-8 inline-block text-white bg-gradient-to-br from-gray-950 to-blue-950 border border-cyan-400/30 rounded-full shadow-lg shadow-blue-500/40 hover:shadow-blue-500/80 transition-all duration-300 cursor-pointer px-4 py-2 underline-from-left gradient-text"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;