import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaClipboardCheck,
    FaHardHat,
    FaAward,
    FaBriefcase,
    FaSolarPanel,
    FaCheckCircle,
    FaLightbulb,
    FaCogs,
    FaWater
} from 'react-icons/fa';
import SEO from '../components/SEO';
import heroImage from '../assets/images/hero.png';
import electricalImage from '../assets/images/electrical.png';
import solarImage from '../assets/images/solar.png';
import civilImage from '../assets/images/civil.png';
import plumbingImage from '../assets/images/plumbing.png';
import constructionImage from '../assets/images/construction.jpg';

const Home = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen">
            <SEO
                title="VPG Proyectos y Obras | Electricidad, Fotovoltaica y Obra Civil en Granada"
                description="VPG Proyectos: Expertos en instalaciones eléctricas, placas solares, fotovoltaica y obra civil en Granada. Solicita presupuesto sin compromiso."
                canonical="/"
                image={heroImage}
                pageType="WebPage"
            />
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-vpg-navy bg-opacity-70"></div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-shadow"
                    >
                        VPG Proyectos y Obras en Granada
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl mb-8 text-gray-200"
                    >
                        Líderes en Instalaciones Eléctricas, Placas Solares y Reforma Integral en Granada
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/presupuesto" className="btn-primary">
                            Solicitar Presupuesto
                        </Link>
                        <Link to="/contacto" className="btn-secondary">
                            Contactar
                        </Link>
                    </motion.div>
                </div>

                {/* Diagonal Accent */}
                <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-vpg-yellow diagonal-accent"></div>
            </section>

            {/* Quiénes Somos Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title">Quiénes Somos</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                <strong>VPG Proyectos y Obras</strong> nace como una empresa joven, pero con una
                                dirección que viene curtida en primera línea de obra.
                            </p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Nos especializamos en proyectos de gran envergadura, combinando experiencia,
                                tecnología y compromiso para ofrecer soluciones integrales en el sector de la construcción.
                            </p>
                            <div className="flex items-center space-x-4 text-vpg-navy">
                                <FaBriefcase className="text-4xl text-vpg-yellow" />
                                <div>
                                    <p className="font-bold text-xl">20 años</p>
                                    <p className="text-gray-600">de experiencia en el sector</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                src={constructionImage}
                                alt="Construcción"
                                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-vpg-yellow opacity-50 rounded-lg -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Servicios Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Nuestros Servicios</h2>
                        <p className="section-subtitle">Soluciones integrales para tus proyectos</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {/* Instalaciones Eléctricas */}
                        <motion.div variants={fadeInUp} className="card group">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={electricalImage}
                                    alt="Instalaciones Eléctricas"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-vpg-navy to-transparent opacity-70"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <FaLightbulb className="text-4xl text-vpg-yellow mb-2" />
                                    <h3 className="text-2xl font-bold">Instalaciones Eléctricas</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700">
                                    Diseño, instalación y mantenimiento de sistemas eléctricos para proyectos
                                    industriales y residenciales en toda la provincia de Granada.
                                </p>
                            </div>
                        </motion.div>

                        {/* Fotovoltaica */}
                        <motion.div variants={fadeInUp} className="card group">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={solarImage}
                                    alt="Fotovoltaica"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-vpg-navy to-transparent opacity-70"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <FaSolarPanel className="text-4xl text-vpg-yellow mb-2" />
                                    <h3 className="text-2xl font-bold">Fotovoltaica</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700">
                                    Instalación de placas solares fotovoltaicas en Granada. Ahorra energía con
                                    nuestros sistemas de autoconsumo expertos.
                                </p>
                            </div>
                        </motion.div>

                        {/* Obra Civil */}
                        <motion.div variants={fadeInUp} className="card group">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={civilImage}
                                    alt="Obra Civil"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-vpg-navy to-transparent opacity-70"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <FaCogs className="text-4xl text-vpg-yellow mb-2" />
                                    <h3 className="text-2xl font-bold">Obra Civil</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700">
                                    Ejecución de proyectos de obra civil con maquinaria especializada y
                                    personal altamente cualificado.
                                </p>
                            </div>
                        </motion.div>

                        {/* Fontanería y Aerotermia */}
                        <motion.div variants={fadeInUp} className="card group">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={plumbingImage}
                                    alt="Fontanería y Aerotermia"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-vpg-navy to-transparent opacity-70"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <FaWater className="text-4xl text-vpg-yellow mb-2" />
                                    <h3 className="text-2xl font-bold">Fontanería</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700">
                                    Instalación de sistemas de fontanería y climatización eficiente mediante
                                    aerotermia de última generación.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Propuesta de Valor Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Propuesta de Valor</h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={fadeInUp} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow">
                            <FaClipboardCheck className="text-6xl text-vpg-navy mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-vpg-navy mb-4">Control Documental</h3>
                            <p className="text-gray-700">
                                Aseguramos una exhaustiva gestión documental en todos los proyectos
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow">
                            <FaHardHat className="text-6xl text-vpg-navy mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-vpg-navy mb-4">Seguridad</h3>
                            <p className="text-gray-700">
                                Cumplimos estrictamente los estándares de seguridad laborales
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-shadow">
                            <FaAward className="text-6xl text-vpg-navy mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-vpg-navy mb-4">Calidad</h3>
                            <p className="text-gray-700">
                                Priorizamos la excelencia en cada etapa de ejecución
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Lo que nos Diferencia Section */}
            <section className="py-20 bg-vpg-navy text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Lo que nos Diferencia</h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[
                            { title: 'Experiencia', desc: '20 años en el sector', icon: FaBriefcase },
                            { title: 'Dirección con 20 años en FV', desc: 'Sólida trayectoria en energía solar', icon: FaSolarPanel },
                            { title: 'Fiabilidad', desc: 'Proyectos entregados a tiempo', icon: FaCheckCircle },
                            { title: 'Calidad y seguridad', desc: 'Compromiso con la excelencia', icon: FaAward },
                            { title: 'Adaptabilidad', desc: 'Soluciones flexibles para cada cliente', icon: FaCogs },
                            { title: 'Control documental en obra', desc: 'Gestión y trazabilidad en ejecución', icon: FaClipboardCheck },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-vpg-navy-light p-6 rounded-lg border-l-4 border-vpg-yellow hover:bg-opacity-80 transition-all"
                            >
                                <item.icon className="text-4xl text-vpg-yellow mb-3" />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-vpg-yellow to-yellow-500">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-vpg-navy mb-6">
                            ¿Listo para comenzar tu proyecto?
                        </h2>
                        <p className="text-xl text-vpg-navy mb-8">
                            Solicita un presupuesto sin compromiso
                        </p>
                        <Link to="/presupuesto" className="btn-secondary inline-block">
                            Solicitar Presupuesto Ahora
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
