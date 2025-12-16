import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardList, Shield, Award, Briefcase, Zap, HardHat, TrendingUp, Settings, FileCheck } from 'lucide-react';

import img1 from '../assets/1.avif';
import img2 from '../assets/2.avif';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.avif';
import img7 from '../assets/7.avif';
import img8 from '../assets/8.avif';

const Home = () => {
    return (
        <main className="bg-white">
            {/* 1. Quiénes Somos Section */}
            <section className="relative w-full min-h-[600px] flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-[#0a192f] p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
                    {/* Decorative slant */}
                    <div className="hidden md:block absolute top-0 right-0 w-24 h-full bg-white transform skew-x-12 translate-x-12"></div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            {/* Logo placeholder if needed, or just text */}
                            {/* <img src="/logo-icon.png" alt="" className="h-10" /> */}
                            <h2 className="text-4xl text-white font-bold">VPG</h2>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                            Quiénes<br />somos
                        </h1>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                            VPG Proyectos y Obras nace como una empresa joven, pero con una dirección que viene curtida en primera línea de obra.
                        </p>
                    </motion.div>
                </div>
                <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
                    <img
                        src={img1}
                        alt="Excavator construction"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* 2. Services / Areas Section */}
            <section className="py-20 container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <Link to="/presupuesto" className="group relative h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer block">
                        <img
                            src={img2}
                            alt="Instalaciones Eléctricas"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 to-transparent flex items-end p-6">
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Instalaciones Eléctricas</h3>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link to="/presupuesto" className="group relative h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer block">
                        <img
                            src={img3}
                            alt="Fotovoltaica"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 to-transparent flex items-end p-6">
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Fotovoltaica</h3>
                        </div>
                    </Link>

                    {/* Card 3 */}
                    <Link to="/presupuesto" className="group relative h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer block">
                        <img
                            src={img4}
                            alt="Obra Civil"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 to-transparent flex items-end p-6">
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Obra Civil</h3>
                        </div>
                    </Link>
                </div>
            </section>

            {/* 3. Propuesta de Valor */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-col items-center mb-16">
                        <div className="flex items-center gap-2 mb-4">
                            {/* Small VPG Logo or text if needed */}
                            <h3 className="text-2xl font-bold text-[#0a192f]">VPG</h3>
                            <span className="text-sm tracking-widest text-gray-500 uppercase">Proyectos y Obras</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0a192f] uppercase">Propuesta de Valor</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Value 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 mb-6 text-[#0a192f]">
                                <ClipboardList className="w-full h-full stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0a192f] mb-4 uppercase">Control Documental</h3>
                            <p className="text-gray-600 leading-relaxed max-w-sm">
                                Aseguramos una exhaustiva gestión documental en todos los proyectos.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 mb-6 text-[#0a192f]">
                                <Shield className="w-full h-full stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0a192f] mb-4 uppercase">Seguridad</h3>
                            <p className="text-gray-600 leading-relaxed max-w-sm">
                                Cumplimos estrictamente los estándares de seguridad laborales.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 mb-6 text-[#0a192f]">
                                <Award className="w-full h-full stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0a192f] mb-4 uppercase">Calidad</h3>
                            <p className="text-gray-600 leading-relaxed max-w-sm">
                                Priorizamos la excelencia en cada etapa de ejecución.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Images strip below Value Proposition */}
                <div className="w-full grid grid-cols-3 h-64 mt-20">
                    <img src={img5} alt="" className="w-full h-full object-cover" />
                    <img src={img6} alt="" className="w-full h-full object-cover" />
                    <img src={img7} alt="" className="w-full h-full object-cover" />
                </div>
            </section>

            {/* 4. Experience Section */}
            <section className="relative w-full flex flex-col md:flex-row min-h-[600px]">
                <div className="w-full md:w-1/2 p-12 md:p-20 bg-[#0a192f] text-white flex flex-col justify-center relative order-2 md:order-1">
                    {/* Decorative slant reversed */}
                    <div className="hidden md:block absolute top-0 right-0 w-24 h-full bg-[#0a192f] transform skew-x-12 translate-x-12 z-20"></div>

                    <div className="relative z-30">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-12 h-12">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-yellow-500">
                                    <path d="M12 2L2 22h20L12 2zm0 3.5L18.5 19H5.5L12 5.5z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </div>
                            <span className="text-3xl font-bold">VPG</span>
                        </div>

                        <h2 className="text-5xl font-bold mb-8 items-center flex gap-4">
                            Experiencia
                            <div className="h-1 flex-grow bg-yellow-500 ml-4 max-w-[100px]"></div>
                        </h2>

                        <ul className="space-y-8 text-lg md:text-xl">
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                                <p>La dirección de VPG cuenta con 20 años de experiencia en electricidad y parques fotovoltaicos.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                                <p>En el ámbito de la obra civil, contamos con más de 25 años en el sector.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-white mt-2.5 flex-shrink-0"></div>
                                <p>Disponemos de todo tipo de maquinaria para excavaciones, etc.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative min-h-[400px] order-1 md:order-2">
                    <img
                        src={img8}
                        alt="Engineer on site"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
            </section>

            {/* 5. Lo que nos diferencia */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a192f] mb-16 uppercase">
                        Lo que nos diferencia
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
                        {[
                            { icon: Briefcase, title: "Experiencia", sub: "20 años en el sector" },
                            { icon: Zap, title: "Dirección con 20 años en FV", sub: "Sólida trayectoria en energía solar" },
                            { icon: Shield, title: "Fiabilidad", sub: "Proyectos entregados a tiempo" },
                            { icon: Award, title: "Calidad y seguridad", sub: "Compromiso con la excelencia" },
                            { icon: Settings, title: "Adaptabilidad", sub: "Soluciones flexibles para cada cliente" },
                            { icon: FileCheck, title: "Control documental en obra", sub: "Gestión y trazabilidad en ejecución" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-[#0a192f] rounded-full flex items-center justify-center text-yellow-500 mb-6">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0a192f] mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
