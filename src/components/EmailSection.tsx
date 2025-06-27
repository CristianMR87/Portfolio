import { FaEnvelope, FaCopy, FaPaperPlane } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { useLanguage } from '../contextLanguage';
import { translations } from '../i18n';

interface EmailSectionProps {
    closeOnScroll?: boolean;
}

function EmailSection({ closeOnScroll }: EmailSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const emailSectionRef = useRef<HTMLDivElement>(null);
    const { language } = useLanguage();
    const t = translations[language].email;

    useEffect(() => {
        if (closeOnScroll) {
            setIsOpen(false);
        }
    }, [closeOnScroll]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (emailSectionRef.current && !emailSectionRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('Cristianfmorano@gmail.com').then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
                setIsOpen(false);
            }, 2000);
        });
    };

    return (
        <div
            ref={emailSectionRef}
            className="flex shrink-0 ml-auto lg:ml-0 lg:justify-self-end relative"
            title={t.contacto}
        >
            {/* Botón principal */}
            <Button onClick={toggleOptions}>
                <FaEnvelope
                    size={24}
                    className="text-white hover:text-blue-500 active:text-blue-400 transition-all duration-300"
                />
            </Button>

            {isOpen && (
                <div
                    title={t.copiar}
                    className="absolute top-17 left-1/2 transform -translate-x-1/2 flex space-x-2 animate-slideIn"
                >
                    {/* Opción 1: Copiar email */}
                    <Button onClick={copyEmail}>
                        <FaCopy
                            size={16}
                            className="text-white hover:text-blue-500 active:text-blue-400 shadow-lg hover:shadow-blue-400/60 active:shadow-blue-400/60 transition-all duration-300"
                        />
                        {copied && (
                            <span className="absolute -bottom-12 left-5 transform -translate-x-1/2 bg-blue-950 text-white text-xs py-1 px-2 border border-cyan-400/30 rounded-2xl">
                                {t.copiado}
                            </span>
                        )}
                    </Button>
                    {/* Opción 2: Enviar email */}
                    <a
                        title={t.enviar}
                        href="mailto:Cristianfmorano@gmail.com"
                        className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-black to-blue-950 border border-cyan-400/30 rounded-full shadow-lg shadow-blue-500/40 hover:shadow-blue-400/60 active:shadow-blue-400/60 transition-all duration-300 cursor-pointer"
                        aria-label={t.enviar}
                        onClick={() => setIsOpen(false)}
                    >
                        <FaPaperPlane
                            size={16}
                            className="text-white hover:text-blue-500 active:text-blue-400 transition-all duration-300"
                        />
                    </a>
                </div>
            )}
        </div>
    );
}

export default EmailSection;