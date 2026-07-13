import {motion} from 'motion/react';

interface SectionHeadingProps {
    /** Small all-caps label above the title, e.g. "CORE EXPERTISE". */
    eyebrow?: string;
    title: string;
    body?: string;
    align?: 'center' | 'left';
    className?: string;
}

/**
 * The eyebrow pill + gradient headline + lead paragraph that opens every section.
 * Previously copy-pasted at each call site, which is how the gradients and spacing drifted.
 */
export function SectionHeading({
                                   eyebrow,
                                   title,
                                   body,
                                   align = 'center',
                                   className = '',
                               }: SectionHeadingProps) {
    const centered = align === 'center';

    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className={`${centered ? 'text-center' : 'text-left'} ${className}`}
        >
            {eyebrow && (
                <div className="inline-block mb-4">
                    <div
                        className="px-4 py-2 bg-linear-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-full">
                        <span className="text-sm text-cyan-400 font-semibold">{eyebrow}</span>
                    </div>
                </div>
            )}
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span
                    className="bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    {title}
                </span>
            </h2>
            {body && (
                <p className={`text-gray-400 text-lg leading-relaxed ${centered ? 'max-w-3xl mx-auto' : ''}`}>
                    {body}
                </p>
            )}
        </motion.div>
    );
}
