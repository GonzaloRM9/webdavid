import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <img src="/logo.jpg" alt="VPG Logo" className="w-8 h-8 object-contain" />
                            </div>
                            <span className="text-2xl font-bold">VPG<span className="text-primary">Proyectos</span></span>
                        </Link>
                        <p className="text-gray-400 max-w-md mb-8">
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
                        <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-4">
                            {['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <div className="font-semibold text-white">David García Rodríguez</div>
                                <span className="text-sm bg-primary/20 text-primary px-2 py-0.5 rounded">CEO</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+34 614 809 365</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>dgarcia@vpgproyectos.es</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>www.vpgproyectos.es</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} VPG Energy. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
