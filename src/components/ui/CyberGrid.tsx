'use client';

export default function CyberGrid() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Base Background */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-space-black transition-colors duration-300" />

            {/* Dark Radial Gradient */}
            <div className="absolute inset-0 dark:block hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-space-light via-space-black to-space-black" />

            {/* Light Radial Gradient */}
            <div className="absolute inset-0 dark:hidden block bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/60 via-slate-50 to-slate-100" />

            {/* Moving Grid - Tech Pattern */}
            <div className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(var(--grid-color, rgba(0, 243, 255, 0.3)) 1px, transparent 1px), 
                           linear-gradient(90deg, var(--grid-color, rgba(0, 243, 255, 0.3)) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent 5%, black 40%, black 80%, transparent)'
                }}
            />

            {/* Floating Orbs - Data Points */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 dark:bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse opacity-50 dark:opacity-100" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-violet/20 dark:bg-neon-violet/20 rounded-full blur-[80px] animate-pulse delay-1000 opacity-50 dark:opacity-100" />
        </div>
    );
}
