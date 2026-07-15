interface StackLogo {
    name: string;
    /**
     * Optional logo file. When absent the name renders as a typographic wordmark, so the
     * strip is honest and complete before any vendor artwork exists. Drop an SVG/PNG in
     * and it swaps over with no other change.
     */
    src?: string;
}

/**
 * The tools we build on — a claim about our stack, not about a client roster or a
 * certification. Nothing here needs a partner's permission to display.
 */
const DEFAULT_STACK: StackLogo[] = [
    { name: 'primecare-home-care-logo.png.png' },
    {name: 'OpenAI'},
    {name: 'Make'},
    {name: 'n8n'},
    {name: 'Zapier'},
    {name: 'Twilio'},
    {name: 'Stripe'},
    {name: 'Supabase'},
];

interface LogoSliderProps {
    logos?: StackLogo[];
    label?: string;
}

export function LogoSlider({logos = DEFAULT_STACK, label = 'We build on'}: LogoSliderProps) {
    // Rendered twice so the -50% translation lands exactly on the seam.
    const track = [...logos, ...logos];

    return (
        <section aria-label="Technologies we build on" className="relative py-12 border-y border-white/5">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">
                {label}
            </p>

            <div className="group relative overflow-hidden">
                {/* Edge fades, so logos dissolve rather than getting guillotined at the bounds. */}
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-linear-to-r from-slate-950 to-transparent"></div>
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-linear-to-l from-slate-950 to-transparent"></div>

                <ul className="flex w-max items-center gap-12 sm:gap-16 animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
                    {track.map((logo, index) => (
                        <li
                            key={`${logo.name}-${index}`}
                            /* The second pass is a visual duplicate; keep it out of the a11y tree. */
                            aria-hidden={index >= logos.length}
                            /* Fixed box = zero layout shift, and wordmarks/logos align on one baseline. */
                            className="flex h-10 w-32 shrink-0 items-center justify-center"
                        >
                            {logo.src ? (
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    width={128}
                                    height={40}
                                    loading="lazy"
                                    decoding="async"
                                    className="max-h-8 w-auto object-contain opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                                />
                            ) : (
                                <span
                                    className="whitespace-nowrap text-lg font-semibold tracking-wide text-gray-400 transition-colors duration-300 hover:text-cyan-300">
                                    {logo.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
