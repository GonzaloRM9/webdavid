import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-vpg-navy text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-vpg-yellow">VPG</h3>
                        <p className="text-gray-300 mb-4">
                            Proyectos y Obras - Empresa especializada en instalaciones eléctricas,
                            fotovoltaica y obra civil.
                        </p>
                        <p className="text-sm text-gray-400">
                            Una empresa joven con dirección curtida en primera línea de obra.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-vpg-yellow">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-vpg-yellow transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="text-gray-300 hover:text-vpg-yellow transition-colors">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link to="/presupuesto" className="text-gray-300 hover:text-vpg-yellow transition-colors">
                                    Solicitar Presupuesto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 text-vpg-yellow">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <FaPhone className="text-vpg-yellow" />
                                <span className="text-gray-300">+34 614 809 365</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="text-vpg-yellow" />
                                <a href="mailto:info@vpgproyectos.es" className="text-gray-300 hover:text-vpg-yellow transition-colors">
                                    info@vpgproyectos.es
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-vpg-yellow" />
                                <span className="text-gray-300">España</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} VPG Proyectos y Obras. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
