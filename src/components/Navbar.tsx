import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, } from 'react-icons/fa';
import EmailSection from './EmailSection'
import Button from './Button';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detectar el scroll y cambiar el estado
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Cambia a "encogido" después de 50px de scroll
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Limpieza del evento
    }, []);

    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`min-w-80 p-4 mt-6 mx-auto w-3/5 rounded-2xl shadow-lg sticky top-6 z-50 border-2 border-gray-700 shadow-purple-500/10 dark:shadow-rose-800/5 transition-all duration-300 ${isScrolled ? 'scale-90 ' : 'scale-100 py-4'}`}>            
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
                    <div className="lg:block hidden text-white text-2xl font-bold ">
                        Cristian
                    </div>
                </div>

                {/* Columna central: Menú de navegación */}
                <ul
                    className={`${isOpen ? 'left-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 bg-opacity-90 mt-4 scale-100' : '-left-full opacity-0 scale-100'} lg:flex lg:space-x-6 fixed lg:static top-[4.5rem] h-auto w-40 lg:w-auto lg:bg-transparent rounded-2xl p-4 lg:p-0 transition-all duration-300 ease-in-out z-40 space-y-4 lg:space-y-0 lg:justify-self-center lg:text-center lg:whitespace-nowrap lg:opacity-100`}
                    >
                    <li>
                        <a href="#home" className="text-white hover:text-gray-300 block lg:inline">Inicio</a>
                    </li>
                    <li>
                        <a href="#about" className="text-white hover:text-gray-300 block lg:inline">Sobre mí</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-white hover:text-gray-300 block lg:inline">Proyectos</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white hover:text-gray-300 block lg:inline">Contacto</a>
                    </li>
                </ul>

                {/* Columna derecha: Íconos sociales */}
                <div className="flex space-x-4 shrink-0 ml-auto lg:ml-0 lg:justify-self-end items-center justify-center">
                    <a
                        href="https://linkedin.com/in/tu-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/CristianMR87"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                    >
                        <FaGithub size={24} />
                    </a>
                    <EmailSection />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;