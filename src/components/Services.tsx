import {motion} from 'motion/react';
import {Bot, LayoutDashboard, Settings, ArrowRight, Phone, Calendar} from 'lucide-react';
import {useState, useEffect, useRef} from 'react';
import {GradientButton} from './GradientButton';

type Page = 'home' | 'about' | 'services' | 'contact' | 'testimonials';

interface ServicesProps {
    onNavigate: (page: Page, serviceId?: string) => void;
    targetService?: string | null;
}

const ghlForms = {
    'AI ChatBot Setup & Training': {
        formId: 'CJpLMswegtAabJ4krWfo',
        src: 'https://link.mevan.ai/widget/form/CJpLMswegtAabJ4krWfo',
        height: 631,
    },
    'GHL Setup 360': {
        formId: 'Uquntq9FHxW16p0KD62i',
        src: 'https://link.mevan.ai/widget/form/Uquntq9FHxW16p0KD62i',
        height: 591,
    },
};

export function Services({onNavigate, targetService}: ServicesProps) {
    const [activeForm, setActiveForm] = useState<string | null>(null);
    const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        if (targetService && serviceRefs.current[targetService]) {
            // Small delay to ensure the page has rendered
            setTimeout(() => {
                serviceRefs.current[targetService]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 100);
        }
    }, [targetService]);

    const services = [
        {
            id: 'ai-chatbot',
            icon: Bot,
            title: 'AI ChatBot Setup & Training',
            gradient: 'from-cyan-500 to-teal-500',
            description: 'We specialize in AI chatbot setup and training to help businesses enhance customer interactions and automate workflows. Our expertly designed chatbots provide instant responses, personalized engagement, and 24/7 support, ensuring a seamless user experience. From initial setup to advanced training, we tailor each chatbot to match your business needs, optimizing efficiency and boosting customer satisfaction.',
            features: [
                'Custom chatbot development',
                '24/7 automated customer support',
                'Natural language processing',
                'Integration with existing systems',
                'Ongoing training and optimization',
            ],
        },
        {
            id: 'web-apps',
            icon: LayoutDashboard,
            title: 'Custom Web Apps & Dashboards',
            gradient: 'from-teal-500 to-cyan-500',
            description: 'The client-facing software you sell but do not want to build. We design and ship web apps, client portals and reporting dashboards under your brand — your logo, your domain, your client relationship. You stay the agency of record; we stay invisible. Every build is handed over documented, so your team can support it without calling us.',
            features: [
                'Client portals with auth and roles',
                'Reporting and analytics dashboards',
                'Deployed on your domain',
                'Documented handover',
                'Ongoing build capacity',
            ],
        },
        {
            id: 'ghl-setup',
            icon: Settings,
            title: 'GHL Setup 360',
            gradient: 'from-teal-500 to-cyan-500',
            description: 'Our GHL Setup 360 service offers a comprehensive, end-to-end GoHighLevel (GHL) setup, designed to optimize your business operations. We handle everything from CRM integration and workflow automation to lead nurturing and marketing campaigns, ensuring a seamless and efficient system tailored to your needs. With our expertise, you can streamline processes, improve customer engagement, and maximize conversions, all within a single, powerful platform. Let us help you unlock the full potential of GHL and take your business to the next level.',
            features: [
                'Complete CRM setup',
                'Workflow automation',
                'Lead nurturing systems',
                'Marketing campaign integration',
                'Analytics and reporting',
            ],
        },
    ];

    // Handle opening GHL form popup. Services without a dedicated form send the
    // visitor to the booking calendar instead, so the button is never inert.
    const openGHLForm = (serviceTitle: string) => {
        const formConfig = ghlForms[serviceTitle as keyof typeof ghlForms];
        if (formConfig) {
            setActiveForm(serviceTitle);
        } else {
            onNavigate('contact');
        }
    };

    // Handle closing GHL form popup
    const closeGHLForm = () => {
        setActiveForm(null);
    };

    // Close popup when clicking an escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeGHLForm();
            }
        };

        if (activeForm) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [activeForm]);

    return (
        <div className="relative pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            The systems you sell, built and shipped under your brand. Chatbots, custom web apps and
                            full GoHighLevel implementations — delivered white-label, documented, and ready to hand
                            to your client.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                What We Offer?
              </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Three ways agencies and GHL specialists use us as their build team — pick the one you need,
                            or hand us the whole scope.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                ref={(el) => {
                                    serviceRefs.current[service.id] = el;
                                }}
                                id={service.id}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                className="relative"
                            >
                                <div className="relative">
                                    <div
                                        className={`absolute inset-0 bg-linear-to-r ${service.gradient} opacity-10 rounded-3xl blur-3xl`}></div>
                                    <div
                                        className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
                                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                                            {/* Content */}
                                            <div>
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div
                                                        className={`p-4 bg-linear-to-r ${service.gradient} rounded-2xl`}>
                                                        <service.icon className="w-8 h-8 text-white"/>
                                                    </div>
                                                    <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                                                </div>
                                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                                    {service.description}
                                                </p>
                                                <div className="space-y-3 mb-8">
                                                    {service.features.map((feature, i) => (
                                                        <motion.div
                                                            key={i}
                                                            whileHover={{x: 10}}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div
                                                                className={`w-2 h-2 rounded-full bg-linear-to-r ${service.gradient}`}></div>
                                                            <span className="text-gray-300">{feature}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Fill Form Button */}
                                                <motion.button
                                                    whileHover={{scale: 1.05, y: -2}}
                                                    whileTap={{scale: 0.95}}
                                                    onClick={() => openGHLForm(service.title)}
                                                    className="group relative"
                                                >
                                                    <div
                                                        className={`absolute inset-0 bg-linear-to-r ${service.gradient} rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity`}></div>
                                                    <div
                                                        className={`relative bg-linear-to-r ${service.gradient} px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2`}>
                                                        Request Build
                                                        <motion.div
                                                            animate={{x: [0, 5, 0]}}
                                                            transition={{duration: 1.5, repeat: Infinity}}
                                                        >
                                                            <ArrowRight className="w-5 h-5"/>
                                                        </motion.div>
                                                    </div>
                                                </motion.button>
                                            </div>

                                            {/* Visual Element - Hidden on mobile */}
                                            <div className="relative hidden lg:block">
                                                <div
                                                    className={`absolute inset-0 bg-linear-to-r ${service.gradient} opacity-20 rounded-3xl blur-3xl`}></div>
                                                <div
                                                    className="relative bg-linear-to-br from-slate-900/60 to-slate-800/60 border border-white/10 rounded-3xl p-12 backdrop-blur-sm flex items-center justify-center min-h-75">
                                                    <motion.div
                                                        whileHover={{scale: 1.1, rotate: 360}}
                                                        transition={{duration: 0.8}}
                                                        className={`p-12 bg-linear-to-r ${service.gradient} rounded-3xl shadow-2xl`}
                                                    >
                                                        <service.icon className="w-24 h-24 text-white"/>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schedule a Call CTA Section */}
            <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="relative"
                    >
                        <div
                            className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
                        <div
                            className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-3xl p-12 lg:p-16 backdrop-blur-sm text-center">
                            <motion.div
                                initial={{scale: 0}}
                                whileInView={{scale: 1}}
                                viewport={{once: true}}
                                className="inline-block mb-6"
                            >
                                <div
                                    className="w-20 h-20 bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                                    <Calendar className="w-10 h-10 text-white"/>
                                </div>
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                                Schedule a call with our team to discuss how we can help you leverage AI technology to
                                streamline operations, enhance customer engagement, and drive growth for your business.
                            </p>

                            <GradientButton onClick={() => onNavigate('contact')} icon={Phone} className="mt-8">
                                Schedule An Appointment
                            </GradientButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* GoHighLevel Form Popup */}
            {activeForm && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
                    onClick={closeGHLForm}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="form-dialog-title"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Form Container */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.9, y: 20}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        exit={{opacity: 0, scale: 0.9, y: 20}}
                        transition={{type: 'spring', damping: 25, stiffness: 300}}
                        className="relative w-full max-w-2xl my-8 bg-transparent rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span id="form-dialog-title" className="sr-only">Request Build: {activeForm}</span>

                        {/* Close Button */}
                        <button
                            onClick={closeGHLForm}
                            className="absolute -top-3 -right-3 z-10 p-2 bg-slate-800 hover:bg-slate-700 border border-white/20 rounded-full transition-colors text-gray-400 hover:text-white shadow-lg"
                            aria-label="Close form"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>

                        {/* GHL Form Iframe */}
                        <div className="overflow-y-auto flex-1 rounded-2xl">
                            <iframe
                                src={ghlForms[activeForm as keyof typeof ghlForms]?.src}
                                style={{
                                    width: '100%',
                                    minHeight: `${ghlForms[activeForm as keyof typeof ghlForms]?.height || 600}px`,
                                    height: '100%',
                                    border: 'none',
                                    borderRadius: '15px',
                                }}
                                title={`Request Build: ${activeForm}`}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
