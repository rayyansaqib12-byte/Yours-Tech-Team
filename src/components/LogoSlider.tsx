interface CompanyLogo {
    name: string;
    src: string;
}

const COMPANY_LOGOS: CompanyLogo[] = [
    { name: 'Killer Contractors', src: '../assets/image/killer-contractors-logo-1.png' },
    { name: 'Primecare Home Care', src: primecareLogo },
    { name: 'The Connection Rebellion', src: connectionLogo },
    { name: 'Lakimii Academy', src: lakimiiLogo },
    { name: 'AIM Online Media', src: aimLogo },
    { name: 'StoneGye Agency', src: stoneGyeLogo },
    { name: 'Aspire Artist Academy', src: aspireLogo },
    { name: 'Fortman Agency', src: fortmanLogo },
    { name: '222 Marketing', src: marketingLogo },
];

interface LogoSliderProps {
    logos?: CompanyLogo[];
    label?: string;
}

export function LogoSlider({
    logos = COMPANY_LOGOS,
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
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-950 to-transparent sm:w-24" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-950 to-transparent sm:w-24" />

                <ul className="flex w-max items-center gap-8 animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused] sm:gap-12">
                    {track.map((logo, index) => (
                        <li
                            key={`${logo.name}-${index}`}
                            aria-hidden={index >= logos.length}
                            className="flex h-24 w-48 shrink-0 items-center justify-center rounded-xl bg-white/10 px-5 py-4 ring-1 ring-white/10"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                width={192}
                                height={96}
                                loading="lazy"
                                decoding="async"
                                className="max-h-16 max-w-40 object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
