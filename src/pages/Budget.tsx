import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Budget = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [clientType, setClientType] = useState<'empresa' | 'particular'>('empresa');
    const [companyName, setCompanyName] = useState('');
    const [serviceCategory, setServiceCategory] = useState('');
    const [serviceSubcategory, setServiceSubcategory] = useState('');

    // Service subcategories mapping
    const serviceSubcategories: Record<string, string[]> = {
        electrical: [
            'Residencial',
            'Industrial',
            'Líneas subterráneas baja tensión',
            'Puntos de recarga vehículo eléctrico',
            'Alumbrados públicos',
            'Cuadros y automatización',
            'Sistemas de protección y medida',
            'Legalizaciones y puesta en servicio'
        ],
        solar: [
            'Plantas fotovoltaicas',
            'Autoconsumo industrial',
            'Autoconsumo residencial',
            'Cableado y conexiones DC',
            'Cableado y conexiones AC baja tensión',
            'Cableado y conexiones AC media tensión',
            'BESS integrado en planta FV'
        ],
        civil: [
            'Zanjas y canalizaciones',
            'Movimiento de tierras',
            'Plataformas y cimentaciones',
            'Drenajes y escolleras',
            'Caminos y accesos'
        ],
        multiple: [
            'Fontanería general',
            'Saneamiento',
            'Climatización',
            'Estudios y asesoramiento técnico'
        ]
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            clientType: clientType,
            company: clientType === 'empresa' ? companyName : 'Particular',
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: serviceCategory,
            serviceSubcategory: serviceSubcategory,
            location: formData.get('location'),
            budget: formData.get('budget'),
            timeline: formData.get('timeline'),
            description: formData.get('description'),
            contactMethod: formData.get('contact-method'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || `Error ${response.status}: al enviar la solicitud`);
                } else {
                    const text = await response.text();
                    console.error('Non-JSON error response:', text);
                    throw new Error(`Error ${response.status}: El servidor no devolvió una respuesta válida.`);
                }
            }

            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 8000);
        } catch (err: any) {
            console.error('Submission error:', err);
            setError(err.message || 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

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
                        Solicitud de Presupuesto
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-200"
                    >
                        Cuéntanos sobre tu proyecto y te contactaremos pronto
                    </motion.p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12"
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12"
                            >
                                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                                <h2 className="text-3xl font-bold text-vpg-navy mb-4">¡Solicitud Enviada!</h2>
                                <p className="text-xl text-gray-700">
                                    Gracias por tu interés. Nos pondremos en contacto contigo pronto.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-vpg-navy mb-2">Solicitar Presupuesto</h2>
                                    <p className="text-gray-600">Completa el formulario y te responderemos en 24-48 horas</p>
                                </div>

                                {error && (
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                                        <p className="text-red-700">{error}</p>
                                    </div>
                                )}

                                {/* Personal Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nombre Completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Tipo de Cliente *
                                        </label>
                                        <div className="flex gap-4 mb-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="client-type"
                                                    value="empresa"
                                                    checked={clientType === 'empresa'}
                                                    onChange={(e) => setClientType(e.target.value as 'empresa' | 'particular')}
                                                    className="mr-2 text-vpg-yellow focus:ring-vpg-yellow"
                                                />
                                                <span className="text-gray-700">Empresa</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="client-type"
                                                    value="particular"
                                                    checked={clientType === 'particular'}
                                                    onChange={(e) => setClientType(e.target.value as 'empresa' | 'particular')}
                                                    className="mr-2 text-vpg-yellow focus:ring-vpg-yellow"
                                                />
                                                <span className="text-gray-700">Particular</span>
                                            </label>
                                        </div>
                                        {clientType === 'empresa' && (
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={companyName}
                                                onChange={(e) => setCompanyName(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                                placeholder="Nombre de tu empresa"
                                            />
                                        )}
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
                                            name="email"
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
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                            placeholder="+34 XXX XXX XXX"
                                        />
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="border-t pt-6 mt-6">
                                    <h3 className="text-xl font-bold text-vpg-navy mb-4">Detalles del Proyecto</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Tipo de Servicio *
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={serviceCategory}
                                                onChange={(e) => {
                                                    setServiceCategory(e.target.value);
                                                    setServiceSubcategory(''); // Reset subcategory when main service changes
                                                }}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                            >
                                                <option value="">Selecciona un servicio</option>
                                                <option value="electrical">Instalaciones Eléctricas</option>
                                                <option value="solar">Fotovoltaica</option>
                                                <option value="civil">Obra Civil</option>
                                                <option value="multiple">Varios Servicios</option>
                                            </select>
                                        </div>

                                        {/* Cascading subcategory dropdown */}
                                        {serviceCategory && serviceSubcategories[serviceCategory] && (
                                            <div>
                                                <label htmlFor="service-subcategory" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Especifica el Servicio *
                                                </label>
                                                <select
                                                    id="service-subcategory"
                                                    name="service-subcategory"
                                                    value={serviceSubcategory}
                                                    onChange={(e) => setServiceSubcategory(e.target.value)}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                                >
                                                    <option value="">Selecciona una especialidad</option>
                                                    {serviceSubcategories[serviceCategory].map((subcategory) => (
                                                        <option key={subcategory} value={subcategory}>
                                                            {subcategory}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}

                                        <div>
                                            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Ubicación del Proyecto *
                                            </label>
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                                placeholder="Ciudad, Provincia"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Presupuesto Estimado
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                        >
                                            <option value="">Selecciona un rango (opcional)</option>
                                            <option value="0-10k">Menos de 10.000€</option>
                                            <option value="10k-50k">10.000€ - 50.000€</option>
                                            <option value="50k-100k">50.000€ - 100.000€</option>
                                            <option value="100k-500k">100.000€ - 500.000€</option>
                                            <option value="500k+">Más de 500.000€</option>
                                        </select>
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Plazo Deseado
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all"
                                        >
                                            <option value="">Selecciona un plazo (opcional)</option>
                                            <option value="urgent">Urgente (menos de 1 mes)</option>
                                            <option value="1-3months">1-3 meses</option>
                                            <option value="3-6months">3-6 meses</option>
                                            <option value="6months+">Más de 6 meses</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Descripción del Proyecto *
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vpg-yellow focus:border-transparent transition-all resize-none"
                                            placeholder="Describe tu proyecto con el mayor detalle posible: alcance, requisitos especiales, objetivos, etc."
                                        ></textarea>
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="contact-method" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Método de Contacto Preferido
                                        </label>
                                        <div className="flex flex-wrap gap-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="contact-method"
                                                    value="email"
                                                    defaultChecked
                                                    className="mr-2 text-vpg-yellow focus:ring-vpg-yellow"
                                                />
                                                <span className="text-gray-700">Email</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="contact-method"
                                                    value="phone"
                                                    className="mr-2 text-vpg-yellow focus:ring-vpg-yellow"
                                                />
                                                <span className="text-gray-700">Teléfono</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="contact-method"
                                                    value="both"
                                                    className="mr-2 text-vpg-yellow focus:ring-vpg-yellow"
                                                />
                                                <span className="text-gray-700">Ambos</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Privacy Policy */}
                                <div className="border-t pt-6 mt-6">
                                    <label className="flex items-start">
                                        <input
                                            type="checkbox"
                                            required
                                            className="mt-1 mr-3 text-vpg-yellow focus:ring-vpg-yellow"
                                        />
                                        <span className="text-sm text-gray-600">
                                            Acepto la política de privacidad y el tratamiento de mis datos personales
                                            para que VPG Proyectos y Obras pueda contactarme sobre mi solicitud. *
                                        </span>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full btn-primary text-center text-lg py-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : (
                                        'Enviar Solicitud de Presupuesto'
                                    )}
                                </button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    * Campos obligatorios
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Budget;
