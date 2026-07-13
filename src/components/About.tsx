import {motion} from 'motion/react';
import {Users, TrendingUp, Target, Sparkles, Zap, Shield} from 'lucide-react';
import {GradientButton} from './GradientButton';

type Page = 'home' | 'about' | 'services' | 'contact' | 'testimonials';

interface AboutProps {
    onNavigate: (page: Page, serviceId?: string) => void;
}

export function About({onNavigate}: AboutProps) {
    const stats = [
        {value: '150+', label: 'Happy Clients', icon: Users},
        {value: '50K+', label: 'Support Given', icon: TrendingUp},
        {value: '10K+', label: 'Active Users', icon: Target},
    ];

    const timeline = [
        {
            year: '2021',
            title: 'Foundation & Innovation',
            description: 'In 2021, Atomatify introduced AI chatbots and virtual assistants, helping businesses enhance customer engagement and improve efficiency.',
        },
        {
            year: '2022',
            title: 'Global Expansion',
            description: 'By 2022, we expanded globally, offering tailored AI solutions and solidifying our reputation as leaders in AI consulting.',
        },
        {
            year: '2023',
            title: 'Market Leadership',
            description: 'By 2023, we established ourselves as industry leaders, providing cutting-edge AI solutions to businesses worldwide.',
        },
    ];

    const reasons = [
        {
            icon: TrendingUp,
            title: 'Boost Efficiency and Productivity',
            description: 'Automate repetitive tasks and streamline workflows to focus on what truly matters for your business growth.',
        },
        {
            icon: Zap,
            title: 'Simple and Easy to Implement',
            description: 'Our solutions are designed for quick deployment with minimal disruption to your existing operations.',
        },
        {
            icon: Shield,
            title: 'Enhance Decision-Making',
            description: 'Leverage AI-powered insights and analytics to make data-driven decisions that propel your business forward.',
        },
    ];

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
                About Us
              </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Atomatify is the build team agencies hand their client work to. We ship the systems you
                            sell — quietly, under your brand, and on the timeline you promised.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                whileHover={{scale: 1.05, y: -5}}
                                className="relative group"
                            >
                                <div
                                    className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div
                                    className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400"/>
                                    <div
                                        className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                        >
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  The Build Team Your Clients Never Meet
                </span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                At Atomatify, we build AI automations, chatbots, custom web apps and GoHighLevel
                                implementations for agencies and GHL specialists — under their brand, not ours. You
                                keep the client relationship and the credit. We do the engineering, document it, and
                                hand it over.
                            </p>
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
                                <div className="space-y-6">
                                    {[
                                        {icon: Sparkles, label: 'AI Innovation'},
                                        {icon: Users, label: 'Expert Team'},
                                        {icon: Target, label: 'Client Success'},
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{x: 10}}
                                            className="flex items-center gap-4 p-4 bg-linear-to-r from-slate-800/50 to-slate-700/50 rounded-xl"
                                        >
                                            <div className="p-3 bg-linear-to-r from-cyan-500 to-teal-500 rounded-lg">
                                                <item.icon className="w-6 h-6 text-white"/>
                                            </div>
                                            <span className="text-white font-semibold">{item.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
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
                Our Journey Through Time
              </span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div
                            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-teal-500 to-cyan-500 hidden lg:block"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true}}
                                    transition={{delay: index * 0.2}}
                                    className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                                        index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                                    }`}
                                >
                                    <div
                                        className={index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:col-start-2 lg:pl-8'}>
                                        <div className="inline-block">
                                            <div
                                                className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
                                                {item.year}
                                            </div>
                                            <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Circle */}
                                    <div
                                        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-linear-to-r from-cyan-500 to-teal-500 rounded-full ring-4 ring-slate-950"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why AI Section */}
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
                Why You Need AI Now?
              </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            In today's fast-paced world, staying ahead means embracing innovation. Here are three
                            compelling reasons why you should leverage AI as quickly as possible:
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                whileHover={{y: -8}}
                                className="relative group"
                            >
                                <div
                                    className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div
                                    className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm h-full">
                                    <div
                                        className="w-16 h-16 bg-linear-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                                        <reason.icon className="w-8 h-8 text-white"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4">{reason.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Section */}
            <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div
                            className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
                        <div
                            className="relative bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 rounded-3xl p-12 backdrop-blur-sm text-center">
                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                            >
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span
                      className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Innovating the Future of Digital Automation
                  </span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                                    We harness the power of AI to transform business operations. From intelligent
                                    chatbot solutions to seamless automation and virtual assistance, we provide
                                    cutting-edge technology that drives efficiency, productivity, and growth.
                                </p>
                                <GradientButton onClick={() => onNavigate('contact')} className="mt-8">
                                    Schedule An Appointment
                                </GradientButton>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
