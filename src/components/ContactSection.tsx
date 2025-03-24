import React, { useState, useEffect, useRef } from 'react';

const ContactSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(window.scrollY);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                const currentScrollY = window.scrollY;
                const isScrollingUp = currentScrollY < lastScrollY.current;

                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (isScrollingUp && !entry.isIntersecting) {
                    setIsVisible(false);
                }

                lastScrollY.current = currentScrollY;
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleCancel = () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section
            ref={sectionRef}
            className={`min-w-95 md:w-full md:max-w-[800px] p-4 mt-10 mx-auto transition-all duration-700 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >
            <h2 className="text-5xl font-bold text-blue-400 text-center mb-12">Contáctame</h2>
            <div className="bg-gradient-to-br from-neutral-950 to-blue-950 p-8 rounded-xl shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 active:shadow-blue-500/60 transition-all duration-300 border border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="text-gray-300 text-sm">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 bg-neutral-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                placeholder="Tu nombre"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-gray-300 text-sm">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 bg-neutral-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                placeholder="tu@email.com"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-gray-300 text-sm">Asunto</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 bg-neutral-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                            placeholder="Motivo del contacto"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-gray-300 text-sm">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 bg-neutral-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-y"
                            rows={4}
                            placeholder="Escribe tu mensaje aquí..."
                            required
                        />
                    </div>
                    <div className="flex justify-between sm:justify-end gap-4 mt-6">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="flex items-center justify-center w-32 h-12 bg-gradient-to-br from-gray-950 to-blue-950 border border-cyan-400/30 rounded-full shadow-lg shadow-blue-500/40 hover:shadow-blue-400/60 active:shadow-blue-400/60 transition-all duration-300 cursor-pointer text-white font-semibold"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="flex items-center justify-center w-32 h-12 bg-gradient-to-br from-gray-950 to-blue-950 border border-cyan-400/30 rounded-full shadow-lg shadow-blue-500/40 hover:shadow-blue-400/60 active:shadow-blue-400/60 transition-all duration-300 cursor-pointer text-white font-semibold"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;