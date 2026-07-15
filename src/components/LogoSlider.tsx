import PrimeCareLogo from "../assets/images/primecare-home-care-logo-0.png";
import KillerContractorsLogo from "../assets/images/killer-contractors-logo-1.png";
import ConnectionRebellionLogo from "../assets/images/the-connection-rebellion-logo-2.png";
import LakimiiLogo from "../assets/images/lakimii-academy-log-3.png";
import AimOnlineMediaLogo from "../assets/images/aim_online_media_logo-4.png";
import StoneGyeLogo from "../assets/images/stone-gye-academy-5.png";
import AspireArtistLogo from "../assets/images/aspire-artist-academy-logo-6.png";
import FortmanAgencyLogo from "../assets/images/fortman-agency-logo-7.png";
import Marketing222Logo from "../assets/images/222-marketing-logo-8.png";

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
    {
        name: "PrimeCare Home Care",
        src: PrimeCareLogo,
    },
    {
        name: "Killer Contractors",
        src: KillerContractorsLogo,
    },
    {
        name: "The Connection Rebellion",
        src: ConnectionRebellionLogo,
    },
    {
        name: "Lakimii Academy",
        src: LakimiiLogo,
    },
    {
        name: "Aim Online Media",
        src: AimOnlineMediaLogo,
    },
    {
        name: "Stone Gye Academy",
        src: StoneGyeLogo,
    },
    {
        name: "Aspire Artist Academy",
        src: AspireArtistLogo,
    },
    {
        name: "Fortman Agency",
        src: FortmanAgencyLogo,
    },
    {
        name: "222 Marketing",
        src: Marketing222Logo,
    },
];

interface LogoSliderProps {
    logos?: StackLogo[];
    label?: string;
}

export function LogoSlider({logos = DEFAULT_STACK, label = 'Trusted by'}: LogoSliderProps) {
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
                            className="flex h-20 w-48 shrink-0 items-center justify-center"
                        >
                            {logo.src ? (
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    width={128}
                                    height={40}
                                    loading="lazy"
                                    decoding="async"
                                    className="max-h-14 w-auto object-contain opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100"
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
