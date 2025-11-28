import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
    return (
        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre Completo</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="Juan Pérez"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="juan@ejemplo.com"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="+34 600 000 000"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Tipo de Servicio</label>
                    <select
                        id="service"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="solar">Instalación Solar</option>
                        <option value="electric">Instalación Eléctrica</option>
                        <option value="maintenance">Mantenimiento</option>
                        <option value="other">Otro</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Cuéntanos más sobre tu proyecto..."
                ></textarea>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-secondary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20"
            >
                Enviar Solicitud
                <Send className="w-5 h-5" />
            </motion.button>
        </form>
    );
};

export default ContactForm;
