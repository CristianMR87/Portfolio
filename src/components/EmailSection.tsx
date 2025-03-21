import { FaEnvelope, FaCopy, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';


function EmailSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('tuemail@example.com').then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
                setIsOpen(false); // Cierra las opciones tras copiar
            }, 2000);
        });
    };

    return (
        <div className="flex shrink-0 ml-auto lg:ml-0 lg:justify-self-end relative">
            {/* Botón principal */}
            <button
                onClick={toggleOptions}
                className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-gray-950 to-blue-950 border border-b-cyan-400/30 rounded-full shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40"
                aria-label="Opciones de email"
            >
                <FaEnvelope size={24} className="text-white" />
            </button>

            {/* Opciones que aparecen al hacer clic */}
            {isOpen && (
                <div
                    className="absolute top-14 left-1/2 transform -translate-x-1/2 flex space-x-4 animate-slideIn"
                >
                    {/* Opción 2: Copiar email */}
                    <button
                        onClick={copyEmail}
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-950 to-blue-950 border border-b-cyan-400/30 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"
                        aria-label="Copiar email"
                    >
                        <FaCopy size={16} className="text-white" />
                        {copied && (
                            <span className="absolute -bottom-11 left-6 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                                ¡Email Copiado!
                            </span>
                        )}
                    </button>
                                        {/* Opción 1: Enviar email */}
                                        <a
                        href="mailto:Cristian.morano@hotmail.com"
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-950 to-blue-950 border border-b-cyan-400/30 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                        aria-label="Enviar email"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaPaperPlane size={16} className="text-white" />
                    </a>
                </div>
            )}
        </div>
    );
}

export default EmailSection;