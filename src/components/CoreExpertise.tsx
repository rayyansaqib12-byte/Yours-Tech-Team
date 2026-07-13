import {motion} from 'motion/react';
import {Bot, Check, LayoutDashboard, Settings, ShieldCheck, Webhook, Zap} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import {SectionHeading} from './SectionHeading';
import {GlowCard} from './GlowCard';

interface Pillar {
    icon: LucideIcon;
    title: string;
    description: string;
    capabilities: string[];
}

/**
 * Our actual delivery pillars. Every claim here is about what we build or how we work —
 * nothing depends on a certification or a client name we'd need permission to use.
 */
const PILLARS: Pillar[] = [
    {
        icon: Zap,
        title: 'AI Automation Systems',
        description: 'Automations that survive contact with production.',
        capabilities: [
            'Make, n8n and Zapier builds',
            'Error handling and retries',
            'Monitoring and alerting',
            'Handover docs your team can run',
        ],
    },
    {
        icon: Settings,
        title: 'GoHighLevel Implementation',
        description: 'Full sub-account buildouts, done to spec.',
        capabilities: [
            'Snapshots and sub-account setup',
            'Pipelines, calendars, workflows',
            'Migrations from other CRMs',
            'Documented, not black-boxed',
        ],
    },
    {
        icon: Bot,
        title: 'Conversational AI & Chatbots',
        description: 'Bots that qualify, book, and know when to hand off.',
        capabilities: [
            'LLM assistants on your knowledge base',
            'Booking and CRM handoff',
            'Human escalation paths',
            'Tuned on your real transcripts',
        ],
    },
    {
        icon: LayoutDashboard,
        title: 'Custom Web Apps & Dashboards',
        description: 'The client-facing software you sell but do not want to build.',
        capabilities: [
            'React front-ends',
            'Client portals with auth and roles',
            'Reporting dashboards',
            'Hosted under your domain',
        ],
    },
    {
        icon: Webhook,
        title: 'Integrations & Data Plumbing',
        description: 'The unglamorous middle layer that makes it all work.',
        capabilities: [
            'REST APIs and webhooks',
            'CRM and tooling sync',
            'Data migrations',
            'Idempotency and rate-limit handling',
        ],
    },
    {
        icon: ShieldCheck,
        title: 'White-Label Delivery',
        description: 'Our name appears nowhere.',
        capabilities: [
            'Your brand, your domain, your logo',
            'NDA as standard',
            'We never contact your client',
            'Delivered in your Slack or PM tool',
        ],
    },
];

export function CoreExpertise() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="CORE EXPERTISE"
                    title="What We Actually Build"
                    body="Six delivery pillars. Hand us one of them or the whole scope — either way, it ships under your brand."
                    className="mb-16"
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {PILLARS.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: (index % 3) * 0.1}}
                            whileHover={{y: -8}}
                            className="h-full"
                        >
                            <GlowCard
                                glow="from-cyan-500 to-teal-500"
                                className="h-full"
                                surfaceClassName="h-full flex flex-col"
                            >
                                <div
                                    className="w-12 h-12 mb-6 bg-linear-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                                    <pillar.icon className="w-6 h-6 text-white"/>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">{pillar.description}</p>

                                <ul className="space-y-3 mt-auto">
                                    {pillar.capabilities.map((capability) => (
                                        <li key={capability} className="flex items-start gap-3">
                                            <span
                                                className="w-5 h-5 mt-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                                                <Check className="w-3 h-3 text-cyan-400"/>
                                            </span>
                                            <span className="text-sm text-gray-300">{capability}</span>
                                        </li>
                                    ))}
                                </ul>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
