import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import type {ReactNode} from 'react';

interface GradientButtonProps {
    children: ReactNode;
    onClick: () => void;
    /** Optional leading icon, e.g. Phone or Calendar. */
    icon?: LucideIcon;
    /** Outer spacing only. Never put padding here — the glow is inset-0 and would inherit it. */
    className?: string;
}

/**
 * The site's primary call-to-action pill.
 *
 * Always renders a real <button>: several call sites were previously <a> tags with an
 * onClick and no href, which are not keyboard focusable and announce as plain text.
 */
export function GradientButton({children, onClick, icon: Icon, className = ''}: GradientButtonProps) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className={`relative group inline-block ${className}`}
        >
            <div
                className="absolute inset-0 bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div
                className="relative bg-linear-to-r from-cyan-500 via-teal-500 to-cyan-500 px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2">
                {Icon && <Icon className="w-5 h-5"/>}
                {children}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1"/>
            </div>
        </motion.button>
    );
}
