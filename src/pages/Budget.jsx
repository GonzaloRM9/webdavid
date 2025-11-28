import React from 'react';
import ContactForm from '../components/ContactForm';
import { CheckCircle2 } from 'lucide-react';

const Budget = () => {
    return (
        <div className="pt-32 pb-20 bg-background min-h-screen">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-primary font-semibold tracking-wider uppercase">Presupuesto Online</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6">
                            Comienza tu Proyecto Energético
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Déjanos tus datos y un especialista se pondrá en contacto contigo para ofrecerte la mejor solución personalizada.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Asesoramiento técnico gratuito",
                                "Presupuesto sin compromiso en 24h",
                                "Estudio de ahorro energético personalizado",
                                "Financiación a medida"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-accent" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Budget;
