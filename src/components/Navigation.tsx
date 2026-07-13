import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Menu, X, Calendar} from 'lucide-react';
import atomatifyLogo from '../assets/images/Logo.png';

type Page = 'home' | 'about' | 'services' | 'contact' | 'testimonials';

interface NavigationProps {
    currentPage: Page;
    onNavigate: (page: Page, serviceId?: string) => void;
}

export function Navigation({currentPage, onNavigate}: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems: { label: string; page: Page }[] = [
        {label: 'Home', page: 'home'},
        {label: 'About', page: 'about'},
        {label: 'Services', page: 'services'},
        {label: 'Testimonials', page: 'testimonials'},
        {label: 'Contact', page: 'contact'},
    ];

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-22">
                    {/* Logo */}
                    <motion.button
                        type="button"
                        whileHover={{scale: 1.05}}
                        className="flex items-center gap-2 cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                        onClick={() => onNavigate('home')}
                        aria-label="Atomatify — go to home"
                    >
                        <img
                            src={atomatifyLogo}
                            alt=""
                            width={128}
                            height={72}
                            fetchPriority="high"
                            className="h-18 w-auto object-contain"
                        />
                    </motion.button>


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.page}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                onClick={() => onNavigate(item.page)}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                                    currentPage === item.page
                                        ? 'text-cyan-400'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                {item.label}
                                {currentPage === item.page && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-500 to-teal-500"
                                    />
                                )}
                            </motion.button>
                        ))}
                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            onClick={() => onNavigate('contact')}
                            className="relative group"
                        >
                            <div
                                className="absolute inset-0 bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                            <div
                                className="relative bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 px-6 py-2.5 rounded-lg text-white font-medium flex items-center gap-2">
                                <Calendar className="w-4 h-4"/>
                                Schedule A Call
                            </div>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.page}
                                    onClick={() => {
                                        onNavigate(item.page);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                        currentPage === item.page
                                            ? 'bg-linear-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400'
                                            : 'text-gray-300 hover:bg-white/5'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                type="button"
                                onClick={() => {
                                    onNavigate('contact');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 px-6 py-3 rounded-lg text-white font-medium text-center"
                            >
                                Schedule A Call
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
