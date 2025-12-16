import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="max-w-md">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <img src={logo} alt="VPG Logo" className="w-8 h-8 object-contain" />
                            </div>
                            <span className="text-2xl font-bold">VPG<span className="text-primary">Proyectos</span></span>
                        </Link>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Transformando el futuro energético con soluciones sostenibles y eficientes.
                            Comprometidos con la calidad y el medio ambiente.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Enlaces</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="text-gray-400 hover:text-primary transition-colors">Contacto</Link>
                            </li>
                            <li>
                                <Link to="/presupuesto" className="text-gray-400 hover:text-primary transition-colors">Presupuesto</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} VPG Energy. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
