import {motion} from 'motion/react';
import {useState, useEffect} from 'react';
import {ImageOff, X} from 'lucide-react';
import {SectionHeading} from './SectionHeading';

export interface ProofItem {
    /** Put files in `public/proof/` and reference them as `/proof/name.webp`. Kept out of the
     *  bundle so a screenshot can be swapped without a rebuild. */
    src: string;
    /** Describe what the screenshot SHOWS. Never invent a quote here. */
    alt: string;
    caption?: string;
    tag?: string;
    width: number;
    height: number;
}

/**
 * Real, permissioned screenshots go here — client messages, delivered work, wins.
 *
 * This is EMPTY on purpose. Nothing in this section may be fabricated: no invented
 * messages, names, metrics or logos. Until real (and redacted) screenshots are supplied,
 * the section renders labelled placeholders in development and renders NOTHING in a
 * production build, so a half-finished proof wall can never ship.
 */
const PROOF: ProofItem[] = [];

const PLACEHOLDER_COUNT = 6;
const PLACEHOLDER_HEIGHTS = ['h-56', 'h-72', 'h-64', 'h-72', 'h-56', 'h-64'];

interface SocialProofWallProps {
    items?: ProofItem[];
}

export function SocialProofWall({items = PROOF}: SocialProofWallProps) {
    const [lightbox, setLightbox] = useState<ProofItem | null>(null);
    const hasProof = items.length > 0;

    useEffect(() => {
        if (!lightbox) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightbox(null);
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [lightbox]);

    // Never ship an empty or placeholder proof wall to production.
    if (!hasProof && !import.meta.env.DEV) return null;

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="PROOF"
                    title="What Partners Say When The Build Lands"
                    body="Real messages and delivered work from the agencies we build for."
                    className="mb-16"
                />

                {hasProof ? (
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
                        {items.map((item) => (
                            <motion.button
                                key={item.src}
                                type="button"
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                whileHover={{y: -4}}
                                onClick={() => setLightbox(item)}
                                aria-label={`Enlarge screenshot: ${item.alt}`}
                                className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    width={item.width}
                                    height={item.height}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {(item.caption || item.tag) && (
                                    <div className="p-4">
                                        {item.tag && (
                                            <span
                                                className="inline-block mb-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200">
                                                {item.tag}
                                            </span>
                                        )}
                                        {item.caption && (
                                            <p className="text-sm text-gray-400">{item.caption}</p>
                                        )}
                                    </div>
                                )}
                            </motion.button>
                        ))}
                    </div>
                ) : (
                    <>
                        <p className="mb-8 text-center text-sm text-amber-300/80">
                            Placeholder — visible in development only. Supply real, permissioned screenshots
                            to <code className="text-amber-200">public/proof/</code> and list them in
                            <code className="text-amber-200"> SocialProofWall.tsx</code>. This section does not
                            render in a production build while it is empty.
                        </p>
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                            {Array.from({length: PLACEHOLDER_COUNT}).map((_, i) => (
                                <div
                                    key={i}
                                    className={`mb-6 flex ${PLACEHOLDER_HEIGHTS[i]} break-inside-avoid flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-white/15 bg-slate-900/40 p-6 text-center`}
                                >
                                    <ImageOff className="h-8 w-8 text-gray-600"/>
                                    <p className="text-sm font-medium text-gray-400">
                                        Client message — pending approval
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Redact names, avatars, URLs and figures before use
                                    </p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {lightbox && (
                <div
                    onClick={() => setLightbox(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={lightbox.alt}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-h-full w-full max-w-4xl overflow-auto rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-800"
                    >
                        <button
                            type="button"
                            onClick={() => setLightbox(null)}
                            aria-label="Close screenshot"
                            autoFocus
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white transition-colors hover:bg-slate-800"
                        >
                            <X className="h-5 w-5"/>
                        </button>
                        <img
                            src={lightbox.src}
                            alt={lightbox.alt}
                            width={lightbox.width}
                            height={lightbox.height}
                            className="h-auto w-full rounded-t-3xl"
                        />
                        {lightbox.caption && (
                            <p className="p-6 text-gray-400">{lightbox.caption}</p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
