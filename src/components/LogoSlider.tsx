interface CompanyLogo {
    name: string;
    src: string;
}

const CLIENT_LOGOS: CompanyLogo[] = [
    {
        name: 'PrimeCare Home Care',
        src: '/assets/images/primecare-home-care-logo-0.png',
    },
    {
        name: 'The Connection Rebellion',
        src: '/logos/Square_logo__1_-removebg-preview.png',
    },
    {
        name: 'Lakimii Tattoo Academii',
        src: '/logos/tmpx9sfs65l-removebg-preview.png',
    },
    {
        name: 'AIM Online Media',
        src: '/logos/aim_online_media_logo-removebg-preview.png',
    },
    {
        name: 'Killer Contractors',
        src: '/logos/logo-new-kc-BWZ46YrL.png',
    },
    {
        name: 'StoneGye Agency',
        src: '/logos/tmp54bbusvf.webp',
    },
    {
        name: 'Client Logo',
        src: '/logos/tmp06bdnifl.webp',
    },
    {
        name: 'Client Logo 2',
        src: '/logos/65329a01325af3828b8ce2c1.png',
    },
    {
        name: '222 Marketing',
        src: '/logos/tmpfycq6ue3.webp',
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
            <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">
                {label}
            </p>

            <div className="group relative overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-linear-to-r from-slate-950 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-linear-to-l from-slate-950 to-transparent" />

                <ul className="flex w-max items-center gap-10 sm:gap-14 animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
                    {track.map((logo, index) => (
                        <li
                            key={`${logo.name}-${index}`}
                            aria-hidden={index >= logos.length}
                            className="flex h-16 w-40 shrink-0 items-center justify-center"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                width={160}
                                height={64}
                                loading="lazy"
                                decoding="async"
                                className="max-h-12 max-w-36 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
