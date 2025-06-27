import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contextLanguage';
import { translations } from '../i18n';

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const { language } = useLanguage();
    const t = translations[language].contact;

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        const serviceID = 'service_v3y7fdh';
        const templateIDAuto = 'template_j1s77ro';
        const templateIDNotif = 'template_kporxfp';
        const publicKey = 'du9rumdEVCYsSxF4F';

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            };

            await emailjs.send(serviceID, templateIDAuto, templateParams, publicKey);

            await emailjs.send(serviceID, templateIDNotif, templateParams, publicKey);

            setSubmitMessage('¡Mensaje enviado con éxito! Te contactaré pronto.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitMessage('');
    };

    return (
        <section
            ref={sectionRef}
            className={`min-w-95 md:w-full md:max-w-[800px] p-4 mt-10 mx-auto transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
        >
            <h2 className="text-5xl font-bold text-blue-400 text-center mb-12">{t.title}</h2>
            <div className="bg-gradient-to-br from-black to-blue-950 p-8 rounded-xl shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 active:shadow-blue-500/60 transition-all duration-300 border border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="text-gray-100 text-sm">{t.name}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 bg-neutral-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                placeholder={t.namePlaceholder}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-gray-100 text-sm">{t.email}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 bg-neutral-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                placeholder={t.emailPlaceholder}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-gray-100 text-sm">{t.subject}</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 bg-neutral-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                            placeholder={t.subjectPlaceholder}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-gray-100 text-sm">{t.message}</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 bg-neutral-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-y"
                            rows={4}
                            placeholder={t.messagePlaceholder}
                            required
                        />
                    </div>
                    <div className="flex justify-between sm:justify-end gap-4 mt-6">
                        <div className='group2'>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="flex items-center justify-center w-32 h-12 bg-gradient-to-br from-black to-blue-950 border border-cyan-400/30 rounded-full shadow-lg shadow-blue-500/40 hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 cursor-pointer font-semibold text-white transition-all duration-400 lg:inline gradient-text"
                                disabled={isSubmitting}
                            >
                                {t.cancel}
                            </button>
                        </div>
                        <div className='group2'>
                            <button
                                type="submit"
                                className="flex items-center justify-center w-32 h-12 bg-gradient-to-br from-black to-blue-950 border border-cyan-400/30 rounded-full shadow-lg shadow-blue-500/40 hover:text-blue-500 hover:shadow-blue-500/40 active:text-blue-500 active:shadow-blue-500/40 cursor-pointer font-semibold text-white transition-all duration-400 lg:inline gradient-text"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? t.sending : t.send}
                            </button>
                        </div>
                    </div>
                    {submitMessage && (
                        <p className={`text-center mt-4 ${submitMessage.includes('éxito') || submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                            {submitMessage.includes('éxito') || submitMessage.includes('successfully') ? t.success : t.error}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactSection;