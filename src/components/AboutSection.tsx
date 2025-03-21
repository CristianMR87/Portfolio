import React from 'react';
import fotoCristian from '../assets/images/Perfil1.jpg'
import { FaLinkedin, FaGithub, FaCopy} from 'react-icons/fa';
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
        <section className="min-w-80 p-4 mt-16 mx-auto w-3/5 rounded-lg shadow-lg">           
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 md:gap-8 lg:gap-12">                
                {/* Texto */}
                <div className="flex-1 text-white lg:text-left text-center">
                    <p className="text-4xl font-bold text-blue-400">¡Hola! Soy Cristian.</p>
                    <p className="text-4xl font-bold">Desarrollador Full-Stack.</p>
                    <p className="text-gray-300 text-lg mt-8 text-justify">
                        ¡Hola! Soy Cristian, estudiante de DAW y futuro desarrollador Full-Stack.
                        Apasionado por la tecnología y el mundo del desarrollo web. Con más de un año de formación autodidacta y actualmente estudiando DAW, centro mis conocimientos en tecnologías como Java, Python, Oracle SQL, React, Bootstrap, Ubuntu. He desarrollado varios proyectos personales aplicando estas tecnologías, desde su creación hasta su despliegue final.
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
                                <FaCopy size={14} className="text-white" />
                            </Button>
                            {copied && (
                                <span className="absolute -bottom-11 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
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
                            className="text-white hover:text-gray-300 shadow-lg mr-5 shadow-blue-500/20 hover:shadow-blue-500/40"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            title="GitHub"
                            href="https://github.com/CristianMR87"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
                {/* Imagen */}
                <div className="shrink-0">
                    <img
                        src={fotoCristian}
                        alt="Foto de Cristian"
                        className="w-60 h-60 lg:w-[300px] lg:h-[300px] rounded-full object-cover border-2 border-gray-700"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;