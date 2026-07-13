import {motion} from 'motion/react';
import {useEffect, useState} from 'react';

interface Particle {
    id: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
}

// Generated once at module load, not during render: Math.random() is impure and the
// React Compiler rejects it inside a component body. Low-perf devices render a subset.
const MAX_PARTICLES = 20;
const LOW_PERF_PARTICLES = 8;

const PARTICLES: Particle[] = [...Array(MAX_PARTICLES)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 3,
    delay: Math.random() * 2,
}));

export function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [isMobile, setIsMobile] = useState(false);
    const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);

    // Check for mobile device, low-performance device, and reduced motion preference
    useEffect(() => {
        const checkDevice = () => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const isMobileWidth = window.innerWidth < 768;
            // Check for low-end device indicators
            const hardwareConcurrency = navigator.hardwareConcurrency || 2;
            const isLowMemory = (navigator as { deviceMemory?: number }).deviceMemory !== undefined
                && (navigator as { deviceMemory?: number }).deviceMemory! < 4;
            const isLowPerf = hardwareConcurrency <= 4 || isLowMemory || isMobileWidth;

            setIsMobile(isMobileWidth || prefersReducedMotion);
            setIsLowPerfDevice(isLowPerf || prefersReducedMotion);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Only track mouse on desktop devices
    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            // Throttle mouse updates for better performance
            requestAnimationFrame(() => {
                setMousePosition({x: e.clientX, y: e.clientY});
            });
        };

        window.addEventListener('mousemove', handleMouseMove, {passive: true});
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isMobile]);

    // No particles on mobile; a reduced set on low-performance devices.
    const particles = isMobile
        ? []
        : PARTICLES.slice(0, isLowPerfDevice ? LOW_PERF_PARTICLES : MAX_PARTICLES);

    // On mobile, render a simplified static background for better performance
    if (isMobile) {
        return (
            <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Static gradient orbs - no animations, reduced blur */}
                <div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-2xl"
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/15 rounded-full blur-2xl"
                />
                {/* Simplified grid pattern */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[100px_100px]"/>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* The mouse-following Gradient Orb - Only on desktop */}
            {!isLowPerfDevice && (
                <motion.div
                    className="absolute w-125 h-125 rounded-full opacity-30 blur-3xl will-change-transform"
                    style={{
                        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)',
                        left: mousePosition.x - 250,
                        top: mousePosition.y - 250,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            )}

            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl will-change-transform"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl will-change-transform"
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl will-change-transform"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"/>

            {/* Floating Particles - Disabled on mobile */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
