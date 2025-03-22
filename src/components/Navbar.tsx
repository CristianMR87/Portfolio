import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, } from 'react-icons/fa';
import EmailSection from './EmailSection'
import Button from './Button';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detectar el scroll y cambiar el estado
    useEffect(() => {
        // Detectar scroll
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
    
        const handleResize = () => {
            if (window.innerWidth >= 1024) { 
                setIsOpen(false); 
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize(); 
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, 
[]);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`min-w-80 lg:min-w-240 mt-6 mx-auto w-3/5 p-4 rounded-2xl shadow-lg sticky top-6 z-50 border-2 border-gray-700 shadow-blue-500/20 hover:shadow-blue-500/60 transition-all duration-300 ${isScrolled ? 'scale-90 py-3 -translate-y-4' : 'scale-100 py-3 translate-y-0'}`}>
            <div className="flex items-center justify-between max-w-7xl mx-auto lg:grid lg:grid-cols-3">
                {/* Columna izquierda: Botón hamburguesa y nombre */}
                <div className="flex items-center space-x-4 shrink-0 lg:shrink lg:justify-self-start">
                <Button onClick={toggleMenu} className="lg:hidden">
                    <svg 
                        stroke="currentColor" 
                        fill="currentColor" 
                        stroke-width="0" 
                        viewBox="0 0 24 24" 
                        className="w-6 h-6 text-white" 
                        height="1em" width="1em" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
                    </svg>
                </Button>
                    <img 
                        src="/images/1.png"
                        className="hidden lg:block lg:w-[50px] lg:h-[50px] rounded-full object-cover border-2 border-gray-700" />
                </div>

                {/* Columna central: Menú de navegación */}
                <ul
                    className={`${isOpen ? 'left-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 bg-opacity-0 mt-1 scale-90' : '-left-full opacity-0 scale-100'} lg:flex lg:border-hidden border border-gray-700 -ml-2 lg:space-x-6 fixed lg:static top-[4.5rem] h-auto w-40 lg:w-auto lg:bg-transparent rounded-2xl p-4 lg:p-0 transition-all duration-300 ease-in-out z-40 space-y-4  lg:space-y-0 lg:justify-self-center lg:text-center lg:whitespace-nowrap lg:opacity-100 `}
                >
                    <li className="group relative">
                        <a href="#home" className="text-white shadow-lg shadow-blue-500/20 transition-all duration-400 block lg:inline underline-from-left gradient-text">Inicio</a>
                    </li>
                    <li className="group relative">
                        <a href="#about" className="text-white shadow-lg shadow-blue-500/20 transition-all duration-400 block lg:inline underline-from-left gradient-text">Experiencia</a>
                    </li>
                    <li className="group relative">
                        <a href="#projects" className="text-white shadow-lg shadow-blue-500/20 transition-all duration-400 block lg:inline underline-from-left gradient-text">Proyectos</a>
                    </li>
                    <li className="group relative">
                        <a href="#contact" className="text-white shadow-lg shadow-blue-500/20 transition-all duration-400 block lg:inline underline-from-left gradient-text">Formación</a>
                    </li>
                    <li className="group relative">
                        <a href="#contact" className="text-white shadow-lg shadow-blue-500/20 transition-all duration-400 block lg:inline underline-from-left gradient-text">Contacto</a>
                    </li>
                </ul>


                {/* Columna derecha: Íconos sociales */}
                <div className="flex space-x-4 shrink-0 ml-auto lg:ml-0 lg:justify-self-end items-center justify-center">
                    <a
                        title="Linkedin"
                        href="https://linkedin.com/in/tu-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                    >
                        <FaLinkedin size={24} className="text-white hover:text-blue-500 shadow-lg hover:shadow-blue-500/40 transition-all duration-300"/>
                    </a>
                    <a
                        title="GitHub"
                        href="https://github.com/CristianMR87"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                    >
                        <FaGithub size={24} className="text-white hover:text-blue-500 shadow-lg hover:shadow-blue-500/40 transition-all duration-300"/>
                    </a>
                    <EmailSection />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;