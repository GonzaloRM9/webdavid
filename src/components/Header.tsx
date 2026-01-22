import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Contacto', path: '/contacto' },
        { name: 'Presupuesto', path: '/presupuesto' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="bg-vpg-navy shadow-lg sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} alt="VPG Logo" className="h-12 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-white font-semibold transition-all duration-300 hover:text-vpg-yellow relative group ${isActive(item.path) ? 'text-vpg-yellow' : ''
                                    }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-vpg-yellow transform origin-left transition-transform duration-300 ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                ></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white text-3xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-3 text-white font-semibold transition-colors duration-300 hover:text-vpg-yellow ${isActive(item.path) ? 'text-vpg-yellow' : ''
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </nav>
        </header>
    );
};

export default Header;
