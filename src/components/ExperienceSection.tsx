import React from 'react';

const ExperienceSection: React.FC = () => {
    return (
        <section className="min-w-80 p-4 mt-14 mx-auto w-3/5  shadow-lg ">
            <h2 className="text-5xl font-bold text-blue-400 text-center lg:text-center mb-8">Experiencia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Experiencia 1 */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 border border-gray-700 group">
                    <h3 className="text-xl font-semibold text-white">Desarrollador Full-Stack - Proyecto Personal</h3>
                    <p className="text-gray-400 text-sm mt-1">Marzo 2024 - Actualidad</p>
                    <p className="text-gray-400 mt-1">Desarrollador Freelancer</p>
                    <ul className="text-gray-300 text-sm mt-4 space-y-2">
                        <li>- Construí un portfolio responsive con React y Tailwind CSS.</li>
                        <li>- Configuré un entorno en Ubuntu para desarrollo y deploy.</li>
                        <li>- Implementé animaciones y efectos hover para mejorar la UX.</li>
                        <li>- Construí un portfolio responsive con React y Tailwind CSS.</li>
                        <li>- Configuré un entorno en Ubuntu para desarrollo y deploy.</li>
                        <li>- Implementé animaciones y efectos hover para mejorar la UX.</li>
                    </ul>
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Autodidacta
                    </span>
                </div>
                {/* Experiencia 2 */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 border border-gray-700 group">
                    <h3 className="text-xl font-semibold text-white">SDR / AE</h3>
                    <p className="text-gray-400 text-sm mt-1">Agosto 2021 - Agosto 2023</p>
                    <p className="text-gray-400 mt-1">Teimas </p>
                    <ul className="text-gray-300 text-sm mt-4 space-y-2">
                        <li>- Aprendí Java, Python y Oracle SQL por mi cuenta.</li>
                        <li>- Desarrollé pequeños scripts y aplicaciones prácticas.</li>
                        <li>- Exploré Ubuntu para gestionar entornos de desarrollo.</li>
                        <li>- Construí un portfolio responsive con React y Tailwind CSS.</li>
                        <li>- Configuré un entorno en Ubuntu para desarrollo y deploy.</li>
                        <li>- Implementé animaciones y efectos hover para mejorar la UX.</li>
                    </ul>
                    <span className="absolute top-2 right-2 bg-green-800 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Empresa
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;