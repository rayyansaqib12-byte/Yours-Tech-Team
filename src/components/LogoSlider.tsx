import killerLogo from '../assets/image/killer-contractors-logo-1.png';
import primecareLogo from '../assets/image/primecare-home-care-logo-0.png';
import connectionLogo from '../assets/image/the-connection-rebellion-logo-2.png';
import lakimiiLogo from '../assets/image/lakimii-academy-log-3.png';
import aimLogo from '../assets/image/aim_online_media_logo-4.png';
import stoneGyeLogo from '../assets/image/stone-gye-academy-5.webp';
import aspireLogo from '../assets/image/aspire-artist-academy-logo-6.webp';
import fortmanLogo from '../assets/image/fortman-agency-logo-7.png';
import marketingLogo from '../assets/image/222-marketing-logo-8.webp';

interface CompanyLogo {
    name: string;
    src: string;
}

const CLIENT_LOGOS: CompanyLogo[] = [
    {
        name: 'Killer Contractors',
        src: '/assets/image/killer-contractors-logo-1.png',
    },
    {
        name: 'Primecare Home Care',
        src: '/assets/image/primecare-home-care-logo-0.png',
    },
    {
        name: 'The Connection Rebellion',
        src: '/assets/image/the-connection-rebellion-logo-2.png',
    },
    {
        name: 'Lakimii Academy',
        src: '/assets/image/lakimii-academy-log-3.png',
    },
    {
        name: 'AIM Online Media',
        src: '/assets/image/aim_online_media_logo-4.png',
    },
    {
        name: 'StoneGye Agency',
        src: '/assets/image/stone-gye-academy-5.webp',
    },
    {
        name: 'Aspire Artist Academy',
        src: '/assets/image/aspire-artist-academy-logo-6.webp',
    },
    {
        name: 'Fortman Agency',
        src: '/assets/image/fortman-agency-logo-7.png',
    },
    {
        name: '222 Marketing',
        src: '/assets/image/222-marketing-logo-8.webp',
    },
];

interface LogoSliderProps {
    logos?: CompanyLogo[];
    label?: string;
}

export function LogoSlider({
    logos = CLIENT_LOGOS,
    label = 'Companies we have worked with',
}: LogoSliderProps) {
    const track = [...logos, ...logos];

    return (
        <section
            aria-label="Companies we have worked with"
            className="relative py-12 border-y border-white/5"
        >
            <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-gray-400">
                {label}
            </p>

            <div className="group relative overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-slate-950 to-transparent sm:w-24" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-slate-950 to-transparent sm:w-24" />

                <ul className="flex w-max items-center gap-8 animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused] sm:gap-12">
                    {track.map((logo, index) => (
                        <li
                            key={`${logo.name}-${index}`}
                            aria-hidden={index >= logos.length}
                            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-lg bg-white/5 px-4 py-3 ring-1 ring-white/10"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                width={176}
                                height={80}
                                loading="lazy"
                                decoding="async"
                                className="max-h-14 max-w-36 object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
