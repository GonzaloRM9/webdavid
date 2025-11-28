import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors duration-300 text-primary">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
                {description}
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:text-primary transition-colors">
                Saber más <ArrowRight className="w-4 h-4" />
            </a>
        </motion.div>
    );
};

export default ServiceCard;
