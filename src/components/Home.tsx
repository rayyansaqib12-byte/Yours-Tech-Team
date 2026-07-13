import {motion, useReducedMotion} from 'motion/react';
import {
    ArrowRight,
    Sparkles,
    Zap,
    Shield,
    TrendingUp,
    Bot,
    LayoutDashboard,
    Settings,
    Star,
    ChevronLeft,
    ChevronRight,
    Check,
    Rocket,
    Award, Phone
} from 'lucide-react';
import {useState} from 'react';
import {FloatingElements} from './FloatingElements';
import {CountUpStat} from './CountUpStat';
import {SectionHeading} from './SectionHeading';
import {GlowCard} from './GlowCard';
import {GradientButton} from './GradientButton';
import {LogoSlider} from './LogoSlider';
import {CoreExpertise} from './CoreExpertise';
import {SocialProofWall} from './SocialProofWall';

type Page = 'home' | 'about' | 'services' | 'contact' | 'testimonials';

interface HomeProps {
    onNavigate: (page: Page, serviceId?: string) => void;
}

export function Home({onNavigate}: HomeProps) {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    // The CSS reduced-motion block in globals.css only neutralises CSS animations; these
    // are JS-driven motion loops and have to opt out themselves.
    const reduceMotion = useReducedMotion();

    const testimonials = [
        {
            name: "Janelle Mcalister",
            text: "I wish I could give Haris and his team a 10+ Star review. Everyone was professional. Haris was understanding and patient with my situation, he did not make me feel bad and when I became emotional throughout the process.",
        },
        {
            name: "Sarah Williams",
            text: "Haris was great and took his time with me to make sure everything was setup correctly. I love Atomatify and highly recommend!",
        },
        {
            name: "Kaream Mills",
            text: "This team is a GOD SEND!! Their work acumen is out of this world! They made my work come into fruition. I'm definitely going to be a repeat customer. My family & friends will be customers. If you're looking to grow your agency, trust them!",
        },
        {
            name: "Terherah Harris",
            text: "Haris, Waiz and the team at Atomatify have been fantastic out of the gate. They have provided support for our agency that we needed and we are excited about the partnership moving forward!",
        },
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Animated Background */}
                <FloatingElements/>

                <div className="absolute inset-0">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                        animate={reduceMotion ? undefined : {
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
                        animate={reduceMotion ? undefined : {
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    ></motion.div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="text-center"
                    >
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{delay: 0.2}}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-full mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400"/>
                            <span className="text-sm text-gray-300">White-Label Fulfillment for Agencies & GHL Specialists</span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-snug"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                        >
              <span
                  className="bg-linear-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent inline-block">
                The Build Team Behind
              </span>
                            <br/>
                            <motion.span
                                className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent inline-block"
                                animate={reduceMotion ? undefined : {
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                style={{
                                    backgroundSize: '200% 200%',
                                }}
                            >
                                Your Agency
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5}}
                        >
                            You sell the outcome. We build and ship the system — AI automations, custom web apps,
                            chatbots and GoHighLevel implementations — under your brand, on your timeline. Your
                            client never sees us.
                        </motion.p>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.7}}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <GradientButton onClick={() => onNavigate('contact')}>
                                Schedule A Call
                            </GradientButton>

                            <motion.button
                                whileHover={{scale: 1.05, y: -2}}
                                whileTap={{scale: 0.95}}
                                onClick={() => onNavigate('services')}
                                className="px-8 py-4 rounded-full border-2 border-white/10 text-white font-semibold hover:bg-white/5 transition-colors backdrop-blur-sm"
                            >
                                View Services
                            </motion.button>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.9}}
                            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16"
                        >
                            {[
                                {value: 150, suffix: '+', label: 'Happy Clients'},
                                {value: 98, suffix: '%', label: 'Success Rate'},
                                {value: 200, suffix: '+', label: 'Projects Done'},
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{scale: 1.05}}
                                    className="text-center"
                                >
                                    <div
                                        className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                        <CountUpStat end={stat.value} suffix={stat.suffix}/>
                                    </div>
                                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    aria-hidden="true"
                    animate={reduceMotion ? undefined : {y: [0, 10, 0]}}
                    transition={{duration: 2, repeat: Infinity}}
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-white/60 rounded-full"
                            animate={reduceMotion ? undefined : {y: [0, 12, 0]}}
                            transition={{duration: 2, repeat: Infinity}}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Tooling strip — what we build on */}
            <LogoSlider/>

            {/* Services Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="WHAT WE OFFER"
                        title="Our Services"
                        body="From AI automations and chatbots to custom web apps and full GoHighLevel implementations — we build the systems you sell, ship them under your brand, and hand them over documented."
                        className="mb-16"
                    />

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                number: '01',
                                icon: Bot,
                                title: 'AI ChatBot Setup & Training',
                                description: 'Optimize customer interactions with expert AI chatbot setup and seamless training.',
                                gradient: 'from-cyan-500 to-teal-500',
                                features: ['24/7 Support', 'Smart AI', 'Custom Training'],
                                serviceId: 'ai-chatbot',
                            },
                            {
                                number: '02',
                                icon: LayoutDashboard,
                                title: 'Custom Web Apps & Dashboards',
                                description: 'Client-facing portals and reporting dashboards you sell — built and shipped under your brand.',
                                gradient: 'from-teal-500 to-cyan-500',
                                features: ['Client Portals', 'Dashboards', 'Your Domain'],
                                serviceId: 'web-apps',
                            },
                            {
                                number: '03',
                                icon: Settings,
                                title: 'GHL Setup 360',
                                description: 'Comprehensive GoHighLevel (GHL) setup for automation, CRM, and marketing success.',
                                gradient: 'from-teal-500 to-cyan-500',
                                features: ['Full Setup', 'Automation', 'Integration'],
                                serviceId: 'ghl-setup',
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                whileHover={{y: -8}}
                                onClick={() => onNavigate('services', service.serviceId)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        onNavigate('services', service.serviceId);
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                                aria-label={`${service.title} — view service details`}
                                className="cursor-pointer h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                            >
                                <GlowCard glow={service.gradient} className="h-full" surfaceClassName="h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <span
                                            className={`text-3xl font-semibold bg-linear-to-r ${service.gradient} bg-clip-text text-transparent opacity-50 transition-opacity group-hover:opacity-90`}>
                                            {service.number}
                                        </span>
                                        <div
                                            className={`p-3 bg-linear-to-r ${service.gradient} rounded-xl transition-transform group-hover:scale-110`}>
                                            <service.icon className="w-6 h-6 text-white"/>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                                    {/* Feature Pills */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-200"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Learn More - always visible on mobile, revealed on hover on desktop */}
                                    <div
                                        className="mt-6 flex items-center gap-2 text-cyan-400 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-2.5">
                                        <span className="text-sm font-semibold">Learn More</span>
                                        <ArrowRight className="w-4 h-4"/>
                                    </div>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Expertise */}
            <CoreExpertise/>

            {/* Custom Software Solutions */}
            <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                        >
                            <SectionHeading
                                eyebrow="PREMIUM SOLUTIONS"
                                title="Custom Software Solutions"
                                body="Our expert team has extensive global business experience and a proven track record of applying technology-based solutions to overcome growth challenges. We are dedicated to helping our clients achieve their goals through innovative software solutions."
                                align="left"
                                className="mb-8"
                            />

                            {/* Check list */}
                            <div className="space-y-4 mb-8">
                                {[
                                    'Tailored solutions for your business',
                                    'Expert team with global experience',
                                    'Proven track record of success',
                                    'Cutting-edge technology stack',
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        viewport={{once: true}}
                                        transition={{delay: i * 0.1}}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className="w-6 h-6 rounded-full bg-linear-to-r from-cyan-500 to-teal-500 flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-white"/>
                                        </div>
                                        <span className="text-gray-300">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <GradientButton onClick={() => onNavigate('services')}>
                                Learn More
                            </GradientButton>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            className="relative"
                        >
                            <div
                                className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
                            <div
                                className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        {icon: Zap, label: 'Fast Delivery', color: 'from-cyan-400 to-teal-400'},
                                        {
                                            icon: Shield,
                                            label: 'Secure & Reliable',
                                            color: 'from-teal-400 to-cyan-300'
                                        },
                                        {
                                            icon: TrendingUp,
                                            label: 'Scalable Solutions',
                                            color: 'from-teal-400 to-cyan-400'
                                        },
                                        {
                                            icon: Sparkles,
                                            label: 'Innovation First',
                                            color: 'from-teal-400 to-cyan-400'
                                        },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{scale: 1.05}}
                                            whileTap={{scale: 0.95}}
                                            className="relative group cursor-pointer"
                                        >
                                            <div
                                                className={`absolute inset-0 bg-linear-to-r ${item.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                                            <div
                                                className="relative bg-linear-to-br from-slate-800/50 to-slate-700/50 border border-white/5 rounded-xl p-6 text-center">
                                                <div
                                                    className={`w-12 h-12 mx-auto mb-4 bg-linear-to-r ${item.color} rounded-xl flex items-center justify-center`}>
                                                    <item.icon className="w-6 h-6 text-white"/>
                                                </div>
                                                <p className="text-sm text-gray-300 font-medium">{item.label}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Social proof — real screenshots (placeholder in dev until supplied) */}
            <SocialProofWall/>

            {/* Testimonials */}
            <section className="relative py-24 bg-slate-950/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="TESTIMONIALS"
                        title="What They Said"
                        className="mb-16"
                    />

                    <div className="relative">
                        <motion.div
                            key={currentTestimonial}
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: -50}}
                            className="relative"
                        >
                            <div
                                className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl blur-2xl"></div>
                            <div
                                className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
                                <div className="absolute -top-6 left-12">
                                    <div
                                        className="w-12 h-12 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                                        <Star className="w-6 h-6 text-white fill-white"/>
                                    </div>
                                </div>

                                <div className="flex gap-2 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{opacity: 0, scale: 0}}
                                            animate={{opacity: 1, scale: 1}}
                                            transition={{delay: i * 0.1}}
                                        >
                                            <Star className="w-5 h-5 fill-cyan-400 text-cyan-400"/>
                                        </motion.div>
                                    ))}
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    "{testimonials[currentTestimonial].text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        className="w-14 h-14 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-xl"
                                        whileHover={{scale: 1.1}}
                                        transition={{duration: 0.3}}
                                    >
                                        {testimonials[currentTestimonial].name.charAt(0)}
                                    </motion.div>
                                    <div>
                                        <p className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                                        <p className="text-gray-400 text-sm">Verified Client</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex items-center justify-center gap-4 mt-8">
                            <motion.button
                                type="button"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                onClick={prevTestimonial}
                                aria-label="Previous testimonial"
                                className="p-3 bg-slate-800/50 border border-white/10 rounded-full hover:bg-slate-700/50 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-white"/>
                            </motion.button>
                            <div className="flex">
                                {testimonials.map((_, index) => (
                                    /*
                                     * The 44px touch target lives on the button; the dot is a span inside it.
                                     * Sizing the button itself would let the global `pointer: coarse` rule in
                                     * globals.css inflate the dot into a 44px blob on every phone.
                                     */
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setCurrentTestimonial(index)}
                                        aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
                                        aria-current={index === currentTestimonial}
                                        className="flex h-11 w-8 items-center justify-center"
                                    >
                                        <span
                                            className={`h-2 rounded-full transition-all ${
                                                index === currentTestimonial
                                                    ? 'w-8 bg-linear-to-r from-cyan-500 to-teal-500'
                                                    : 'w-2 bg-gray-600'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                            <motion.button
                                type="button"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                onClick={nextTestimonial}
                                aria-label="Next testimonial"
                                className="p-3 bg-slate-800/50 border border-white/10 rounded-full hover:bg-slate-700/50 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-white"/>
                            </motion.button>
                        </div>

                        {/* View All Link */}
                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className="text-center mt-8"
                        >
                            <button
                                onClick={() => onNavigate('testimonials')}
                                className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-2 group"
                            >
                                View All Testimonials
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div
                            className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm overflow-hidden"
                        >
                            {/* Animated background elements */}
                            <motion.div
                                className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"
                                aria-hidden="true"
                                animate={reduceMotion ? undefined : {
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                            />

                            <motion.div
                                initial={{scale: 0}}
                                whileInView={{scale: 1}}
                                viewport={{once: true}}
                                className="inline-block mb-6"
                            >
                                <div
                                    className="w-20 h-20 mx-auto bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                                    <Award className="w-10 h-10 text-white"/>
                                </div>
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Join 150+ successful businesses who have accelerated their growth with Atomatify. Don't
                                pay too much for the wrong things - get professional technology solutions at the right
                                price!
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                                {[
                                    {icon: Rocket, label: 'Fast Setup'},
                                    {icon: Shield, label: 'Secure'},
                                    {icon: Award, label: 'Award Winning'},
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        viewport={{once: true}}
                                        transition={{delay: index * 0.1}}
                                        whileHover={{scale: 1.05}}
                                        className="bg-slate-800/50 rounded-xl p-4 border border-white/5 text-center"
                                    >
                                        <item.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400"/>
                                        <p className="text-gray-300 text-sm">{item.label}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <GradientButton onClick={() => onNavigate('contact')} icon={Phone} className="mt-8">
                                Schedule An Appointment
                            </GradientButton>

                            <p className="text-gray-400 text-sm mt-6">
                                No credit card required • Free consultation • Quick response
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
