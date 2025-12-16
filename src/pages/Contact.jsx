import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User } from 'lucide-react';

const Contact = () => {
    const contacts = [
        {
            name: "David García",
            role: "Administrador",
            phone: "+34 614 809 365",
            email: "dgarcia@vpgproyectos.es"
        },
        {
            name: "Daniel Prieto",
            role: "Administrador",
            phone: "+34 614 818 204",
            email: "dprieto@vpgproyectos.es"
        },
        {
            name: "José María Ventura",
            role: "Operaciones",
            phone: "+34 614 805 553",
            email: "jmventura@vpgproyectos.es"
        }
    ];

    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-semibold tracking-wider uppercase">Contacto</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6">
                        Estamos aquí para ayudarte
                    </h1>
                    <p className="text-lg text-gray-600">
                        Ponte en contacto con nuestro equipo directivo para cualquier consulta o propuesta.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-accent hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <User className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-secondary text-center mb-1">{contact.name}</h3>
                            <p className="text-accent font-medium text-center mb-6">{contact.role}</p>

                            <div className="space-y-4">
                                <a
                                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                    className="flex items-center justify-center gap-3 text-gray-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-50"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="font-medium">{contact.phone}</span>
                                </a>

                                <a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-center justify-center gap-3 text-gray-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-50"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span className="font-medium break-all">{contact.email}</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
