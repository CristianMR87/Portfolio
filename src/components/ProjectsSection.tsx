import React from 'react';
import { FaReact, FaJava, FaPython, FaDatabase, FaBootstrap } from 'react-icons/fa';

const ProjectsSection: React.FC = () => {
    return (
        <section className="min-w-80 p-4 mt-16 mx-auto w-3/5 rounded-lg shadow-lg">
            <h2 className="text-5xl font-bold text-blue-400 text-center mb-8">Proyectos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Proyecto 1 */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 border border-gray-700 group flex flex-col">
                    <img
                        src="/src/assets/images/portfolio.png"
                        alt="Portfolio Personal"
                        className="w-full h-32 object-cover rounded-t-xl"
                    />
                    <h3 className="text-xl font-semibold text-white mt-4">Portfolio Personal</h3>
                    <p className="text-gray-400 text-sm mt-1">Marzo 2025</p>
                    <ul className="text-gray-300 text-sm mt-4 space-y-2 flex-1">
                        <li>- Sitio web responsive con React y Tailwind CSS.</li>
                        <li>- Implementé navegación dinámica y sección de contacto.</li>
                        <li>- Desplegado en Ubuntu con configuración manual.</li>
                    </ul>
                    <div className="mt-4 flex justify-center gap-4">
                        <FaReact className="text-blue-400" size={24} />
                        <FaBootstrap className="text-purple-400" size={24} />
                    </div>
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Web
                    </span>
                </div>
                {/* Proyecto 2 */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 border border-gray-700 group flex flex-col">
                    <img
                        src="/src/assets/images/tasks.png"
                        alt="Aplicación de Tareas"
                        className="w-full h-32 object-cover rounded-t-xl"
                    />
                    <h3 className="text-xl font-semibold text-white mt-4">Aplicación de Tareas</h3>
                    <p className="text-gray-400 text-sm mt-1">Diciembre 2024</p>
                    <ul className="text-gray-300 text-sm mt-4 space-y-2 flex-1">
                        <li>- CRUD básico con Java y Oracle SQL.</li>
                        <li>- Interfaz sencilla con Bootstrap.</li>
                        <li>- Gestión local de datos en un entorno Ubuntu.</li>
                    </ul>
                    <div className="mt-4 flex justify-center gap-4">
                        <FaJava className="text-orange-400" size={24} />
                        <FaDatabase className="text-gray-400" size={24} />
                        <FaBootstrap className="text-purple-400" size={24} />
                    </div>
                    <span className="absolute top-2 right-2 bg-green-600 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        App
                    </span>
                </div>
                {/* Proyecto 3 */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 border border-gray-700 group flex flex-col">
                    <img
                        src="/src/assets/images/script.png"
                        alt="Script de Automatización"
                        className="w-full h-32 object-cover rounded-t-xl"
                    />
                    <h3 className="text-xl font-semibold text-white mt-4">Script de Automatización</h3>
                    <p className="text-gray-400 text-sm mt-1">Noviembre 2024</p>
                    <ul className="text-gray-300 text-sm mt-4 space-y-2 flex-1">
                        <li>- Script en Python para tareas repetitivas.</li>
                        <li>- Ejecutado en Ubuntu con cron jobs.</li>
                        <li>- Optimizado para eficiencia básica.</li>
                    </ul>
                    <div className="mt-4 flex justify-center gap-4">
                        <FaPython className="text-yellow-400" size={24} />
                    </div>
                    <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Script
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;