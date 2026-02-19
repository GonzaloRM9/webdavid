import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';

const Contact = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const teamMembers = [
        {
            name: 'David García',
            role: 'Administrador',
            phone: '+34 614 809 365',
            email: 'dgarcia@vpgproyectos.es'
        },
        {
            name: 'Daniel Prieto',
            role: 'Administrador',
            phone: '+34 614 818 204',
            email: 'dprieto@vpgproyectos.es'
        },
        {
            name: 'José María Ventura',
            role: 'Operaciones',
            phone: '+34 614 805 553',
            email: 'jmventura@vpgproyectos.es'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="bg-vpg-navy text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-vpg-yellow diagonal-accent opacity-90"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-4"
                    >
                        Contacto
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-200"
                    >
                        Estamos aquí para ayudarte con tu proyecto
                    </motion.p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Nuestro Equipo</h2>
                        <p className="section-subtitle">Profesionales a tu servicio</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card p-8 text-center"
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-vpg-navy to-vpg-navy-light rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <FaUser className="text-4xl text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-vpg-navy mb-2">{member.name}</h3>
                                <p className="text-vpg-yellow font-semibold mb-4">{member.role}</p>

                                <div className="space-y-3 text-left">
                                    <div className="flex items-center space-x-3">
                                        <FaPhone className="text-vpg-yellow flex-shrink-0" />
                                        <a href={`tel:${member.phone}`} className="text-gray-700 hover:text-vpg-navy transition-colors">
                                            {member.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FaEnvelope className="text-vpg-yellow flex-shrink-0" />
                                        <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-vpg-navy transition-colors break-all">
                                            {member.email}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8"
                    >
                        <h3 className="text-3xl font-bold text-vpg-navy mb-6 text-center">Envíanos un Mensaje</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Nombre *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                        placeholder="Nombre de tu empresa"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Teléfono *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                        placeholder="+34 XXX XXX XXX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Asunto *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                    placeholder="Asunto de tu consulta"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Mensaje *
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all resize-none"
                                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary text-center"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
