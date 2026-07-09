import {motion} from 'motion/react';
import {Linkedin, Mail, Phone, MapPin} from 'lucide-react';
import mevanLogo from "../assets/images/Logo.png";

type Page = 'home' | 'about' | 'services' | 'contact' | 'testimonials';

interface FooterProps {
    onNavigate: (page: Page, serviceId?: string) => void;
}

export function Footer({onNavigate}: FooterProps) {
    const quickLinks = [
        {label: 'Home', page: 'home' as Page},
        {label: 'About', page: 'about' as Page},
        {label: 'Services', page: 'services' as Page},
        {label: 'Testimonials', page: 'testimonials' as Page},
        {label: 'Contact', page: 'contact' as Page},
    ];

    const services = [
        {label: 'AI ChatBot Setup & Training', serviceId: 'ai-chatbot'},
        {label: 'Dedicated VA Support', serviceId: 'va-support'},
        {label: 'GHL Setup 360', serviceId: 'ghl-setup'},
    ];

    return (
        <footer className="relative border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <motion.div
                            whileHover={{scale: 1.05}}
                            className="flex items-center gap-2 mb-4 cursor-pointer"
                            onClick={() => onNavigate('home')}
                        >
                            <div className="relative">
                                <img
                                    src={mevanLogo}
                                    alt="Mevan AI Logo"
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Mevan AI
                            </span>
                        </motion.div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Drive growth, retain customers, and scale up effortlessly with Mevan AI.
                        </p>
                        <a
                            href="mailto:info@mevan.ai"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            info@mevan.ai
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.page}>
                                    <button
                                        onClick={() => onNavigate(link.page)}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What We Offer */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">What We Offer</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.serviceId}>
                                    <button
                                        onClick={() => onNavigate('services', service.serviceId)}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors text-left"
                                    >
                                        {service.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Information</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-gray-400">
                                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400"/>
                                <span>Rawalpindi, PK</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400">
                                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400"/>
                                <a href="tel:+923264699918" className="hover:text-cyan-400 transition-colors">
                                    +923264699918
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400">
                                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400"/>
                                <a href="mailto:info@atomatify.com" className="hover:text-cyan-400 transition-colors">
                                    info@atomatify.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-gray-400">
                                <Linkedin className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400"/>
                                <a
                                    href="https://www.linkedin.com/company/atomatify/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="text-center text-gray-400">
                        <p>© Copyright Atomatify. All rights reserved.</p>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </footer>
    );
}
