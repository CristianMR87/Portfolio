import React from 'react';
import { FaReact, FaPython, FaBootstrap, FaHtml5, FaCss3, FaFlask} from 'react-icons/fa';

const ProjectsSection: React.FC = () => {
    return (
        <section className="min-w-95 md:min-w-[600px] md:max-w-[500px] lg:min-w-[1024px] p-4 mt-16 mx-auto w-4/5">
            <h2 className="text-5xl font-bold text-blue-400 text-center mb-8">Proyectos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Proyecto 1 */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/60 active:shadow-blue-500/60 transition-all duration-300 border border-gray-700 group flex flex-col">
                    <img
                        src="/images/Portfolio.jpg"
                        alt="Portfolio Personal"
                        className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <h3 className="text-xl font-semibold text-white">Portfolio Personal</h3>
                        {/*<a
                            href="https://tu-portfolio.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:shadow-blue-500/60 hover:scale-110 active:shadow-blue-500/60 active:scale-110 transition-all duration-300 p-1 rounded-full"
                            title="Enlace al proyecto"
                        >
                            <div className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/60 hover:scale-110 active:shadow-blue-500/60 active:scale-110 transition-all duration-300 rounded-full " title="DEMO">
                                <img src="/images/Demo.jpg" className="w-7 h-7" />
                            </div>
                        </a>*/}
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Marzo 2025</p>
                    <ul className="text-gray-300 text-sm mt-4 space-y-1 flex-1">
                        <li>- Sitio web responsivo hecho con React, TypeScript y Tailwind CSS.</li>
                        <li>- Apliqué TypeScript para asegurar un código robusto y tipado.</li>
                        <li>- Diseñé la interfaz con Tailwind CSS para un estilo responsivo.</li>
                        <li>- Integré las tres tecnologías para un proyecto sólido y escalable.</li>
                    </ul>
                    <div className="mt-4 flex justify-center gap-4">
                        <div className="shadow-lg shadow-blue-300/20 hover:shadow-blue-400/60 hover:scale-115 transition-all duration-300 p-2 rounded-full active:shadow-blue-400/60 active:scale-115" title="React">
                            <FaReact className="text-blue-300" size={24} />
                        </div>
                        <div className="shadow-lg shadow-blue-300/20 hover:shadow-blue-400 hover:scale-115 transition-all duration-300 p-2 rounded-full active:shadow-blue-400 active:scale-115" title="TailWindCSS">
                            <img src="/images/Tail.jpg" className="w-6 h-6" />
                        </div>
                        <div className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/60 hover:scale-115 transition-all duration-300 p-2 rounded-full active:shadow-blue-500/60 active:scale-115" title="Typescript">
                            <img src="/images/TS.jpg" className="w-6 h-6" />
                        </div>
                        <div className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/60 hover:scale-115 transition-all duration-300 p-2 rounded-full active:shadow-blue-500/60 active:scale-115"  title="CSS">      
                            <FaCss3 className="text-blue-400 " size={24} />
                        </div>
                    </div>
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                        Website
                    </span>
                </div>
                {/* Proyecto 2 */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/60 active:shadow-green-500/60 transition-all duration-300 border border-gray-700 group flex flex-col">
                    <img
                        src="/images/NimbusProject.jpg"
                        alt="App consulta clima"
                        className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <h3 className="text-xl font-semibold text-white">App Web consulta clima</h3>
                        <a
                            href="https://nimbus-weather.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:shadow-green-500/60 hover:scale-110 active:shadow-green-500/60 active:scale-110 transition-all duration-200 p-1 rounded-full"
                            title="Enlace al proyecto"
                        >
                            <div className="shadow-lg shadow-green-700 hover:shadow-green-500/60 hover:scale-110 active:shadow-green-500/60 active:scale-110 transition-all duration-200 rounded-full" title="DEMO">
                                <img src="/images/Demo.jpg" className="w-7 h-7" />
                            </div>
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Noviembre 2024</p>
                    <ul className="text-gray-300 text-sm mt-4 space-y-1 flex-1">
                        <li>- Aplicación web funcional para consulta del tiempo.</li>
                        <li>- Diseño responsivo hecho con React, TS y Tailwind CSS.</li>
                        <li>- Back-End con Python y Flask.</li>
                        <li>- Conexión a BBDD mediante API.</li>
                    </ul>
                    <div className="mt-4 flex justify-center gap-4">
                        <div className="shadow-lg shadow-blue-300/20 hover:shadow-blue-400/60 hover:scale-115 active:shadow-blue-400/60 active:scale-115 transition-all duration-300 p-2 rounded-full " title="React">
                            <FaReact className="text-blue-300" size={24} />
                        </div>
                        <div className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/60 hover:scale-115 active:shadow-blue-500/60 active:scale-115 transition-all duration-300 p-2 rounded-full " title="Typescript">
                            <img src="/images/TS.jpg" className="w-6 h-6" />
                        </div>
                        <div className="shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/80 hover:scale-115 active:shadow-yellow-500/80 hovactiveer:scale-115 transition-all duration-300 p-2 rounded-full " title="Python">
                            <FaPython className="text-yellow-400" size={24} />
                        </div>
                        <div className="shadow-lg shadow-blue-300/20 hover:shadow-blue-400 hover:scale-115 active:shadow-blue-400 active:scale-115 transition-all duration-300 p-2 rounded-full " title="Flask">
                            <FaFlask className="text-blue-400" size={24} />
                        </div>
                    </div>
                    <span className="absolute top-2 right-2 bg-green-600 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                        App web
                    </span>
                </div>
                {/* Proyecto 3 */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/60 active:shadow-purple-500/60 transition-all duration-300 border border-gray-700 group flex flex-col">
                    <img
                        src="/images/BootstrapProject.jpg"
                        alt="Diseño de website"
                        className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <h3 className="text-xl font-semibold text-white">Diseño de website</h3>
                        <a
                            href="https://cristian-estudios.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-500 hover:shadow-purple-500/60 hover:scale-110 active:shadow-purple-500/60 active:scale-110 transition-all duration-200 p-1 rounded-full"
                            title="Enlace al proyecto"
                        >
                            <div className="shadow-lg shadow-purple-500/20 hover:shadow-purple-500/60 hover:scale-110 active:shadow-purple-500/60 active:scale-110 transition-all duration-200 rounded-full" title="DEMO">
                                <img src="/images/Demo.jpg" className="w-7 h-7" />
                            </div>
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Febrero 2025</p>
                    <ul className="text-gray-300 text-sm mt-4 space-y-1 flex-1">
                        <li>- Sitio web responsivo hecho con Bootstrap.</li>
                        <li>- Diseño limpio y minimalista.</li>
                    </ul>
                    <div className="mt-4 flex justify-center gap-4 ">
                        <div className="shadow-lg shadow-orange-500/20 hover:shadow-orange-500/60 hover:scale-115 active:shadow-orange-500/60 active:scale-115 transition-all duration-300 p-2 rounded-full " title="HTML">                            
                            <FaHtml5 className="text-orange-400 " size={24} />
                        </div>
                        <div className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/60 hover:scale-115 active:shadow-blue-500/60 active:scale-115 transition-all duration-300 p-2 rounded-full"  title="CSS">      
                            <FaCss3 className="text-blue-400 " size={24} />
                        </div>
                        <div className="shadow-lg shadow-purple-500/20 hover:shadow-purple-500/60 hover:scale-115 active:shadow-purple-500/60 active:scale-115 transition-all duration-300 p-2 rounded-full" title="Bootstrap">      
                            <FaBootstrap className="text-purple-400" size={24} />
                        </div>
                    </div>
                    <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                        Website
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;