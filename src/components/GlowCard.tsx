import type {ReactNode} from 'react';

/**
 * The single card surface for the whole site. It previously existed at three different
 * opacities (/90 on Home, /80 elsewhere, /60 in Services), which was visible because these
 * cards sit on top of a permanently animated orb background.
 */
export const CARD_SURFACE =
    'bg-linear-to-br from-slate-900/80 to-slate-800/80 border border-white/10 backdrop-blur-sm';

/**
 * Padding scales with the viewport. A bare `p-12` left a 247px content column inside a
 * 343px phone screen.
 */
const SIZES = {
    sm: 'rounded-xl p-6',
    md: 'rounded-2xl p-6 sm:p-8',
    lg: 'rounded-3xl p-6 sm:p-8 lg:p-12',
} as const;

interface GlowCardProps {
    children: ReactNode;
    size?: keyof typeof SIZES;
    /** Tailwind gradient classes for the blurred halo, e.g. "from-cyan-500 to-teal-500". */
    glow?: string;
    /** Show the halo permanently rather than only on hover. */
    glowAlways?: boolean;
    /** Classes for the outer wrapper (layout, spacing). */
    className?: string;
    /** Classes for the card surface itself (e.g. `h-full`, `text-center`). */
    surfaceClassName?: string;
}

export function GlowCard({
                             children,
                             size = 'md',
                             glow,
                             glowAlways = false,
                             className = '',
                             surfaceClassName = '',
                         }: GlowCardProps) {
    return (
        <div className={`relative group ${className}`}>
            {glow && (
                <div
                    className={`absolute inset-0 bg-linear-to-r ${glow} ${SIZES[size].split(' ')[0]} blur-xl transition-opacity duration-300 ${
                        glowAlways ? 'opacity-50' : 'opacity-0 group-hover:opacity-50'
                    }`}
                ></div>
            )}
            <div className={`relative ${CARD_SURFACE} ${SIZES[size]} ${surfaceClassName}`}>
                {children}
            </div>
        </div>
    );
}
