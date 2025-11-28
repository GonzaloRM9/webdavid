import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Sun, Zap, Wrench } from 'lucide-react';

const Home = () => {
    const services = [
        {
            icon: Sun,
            title: "Energía Solar",
            description: "Instalación de paneles fotovoltaicos de última generación para máximo rendimiento y ahorro."
        },
        {
            icon: Zap,
            title: "Instalaciones Eléctricas",
            description: "Proyectos eléctricos integrales, desde la planificación hasta la ejecución y certificación."
        },
        {
            icon: Wrench,
            title: "Mantenimiento",
            description: "Servicio técnico especializado para garantizar la operatividad y seguridad de tus instalaciones."
        }
    ];

    return (
        <main>
            <Hero />

            <section id="servicios" className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase">Nuestros Servicios</span>
                        <h2 className="text-4xl font-bold text-secondary mt-2 mb-4">Soluciones Integrales</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Ofrecemos un abanico completo de servicios energéticos adaptados a tus necesidades.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                {...service}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
