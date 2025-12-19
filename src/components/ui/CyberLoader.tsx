'use client';

import { motion } from 'framer-motion';

export default function CyberLoader() {
    return (
        <div className="fixed inset-0 bg-space-black z-50 flex flex-col items-center justify-center">
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    className="w-24 h-24 border-2 border-neon-cyan/30 rounded-full"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: 360,
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Inner Ring */}
                <motion.div
                    className="absolute inset-0 w-16 h-16 border-t-2 border-neon-cyan m-auto rounded-full"
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Center Core */}
                <motion.div
                    className="absolute inset-0 w-4 h-4 bg-neon-cyan m-auto rounded-full blur-[2px]"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <motion.p
                className="mt-8 font-mono text-neon-cyan text-sm tracking-[0.2em] uppercase"
                animate={{
                    opacity: [0.4, 1, 0.4],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                Initializing System...
            </motion.p>
        </div>
    );
}
