import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Globe, Heart } from 'lucide-react';

const Impact = () => {
    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent font-semibold tracking-wider uppercase">Sostenibilidad</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6">
                        Nuestro Compromiso con el Planeta
                    </h1>
                    <p className="text-lg text-gray-600">
                        En VPG Energy, no solo instalamos paneles; construimos un futuro más limpio.
                        Cada proyecto contribuye a la reducción de la huella de carbono global.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: Leaf, title: "Energía Limpia", value: "100%", desc: "Renovable y libre de emisiones" },
                        { icon: Globe, title: "CO2 Evitado", value: "500T", desc: "Toneladas anuales reducidas" },
                        { icon: Heart, title: "Hogares Verdes", value: "1000+", desc: "Familias ahorrando energía" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-accent text-center"
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                            <div className="text-xl font-semibold text-gray-800 mb-2">{stat.title}</div>
                            <p className="text-gray-500">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Impact;
