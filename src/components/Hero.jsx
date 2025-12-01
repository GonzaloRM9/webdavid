import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent -z-10 rounded-bl-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent -z-10 rounded-tr-[100px]" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                        <Sun className="w-4 h-4" />
                        <span>Excelencia en Construcción y Energía</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-tight mb-6">
                        Grandes Obras e <span className="text-primary">Instalaciones</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Especialistas en instalaciones eléctricas, placas solares y obras civiles.
                        Soluciones integrales con la máxima calidad y profesionalidad.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/presupuesto"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Solicitar Presupuesto
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/impacto"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary border-2 border-secondary/10 rounded-full font-semibold hover:bg-gray-50 transition-all"
                        >
                            Nuestro Impacto
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Solar Panels"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-xl">
                                    <Zap className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <p className="font-bold text-xl">Ahorro Energético</p>
                                    <p className="text-white/80 text-sm">Hasta un 70% en tu factura</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pattern opacity-20" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
