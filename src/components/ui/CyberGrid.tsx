'use client';

export default function CyberGrid() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Radial Gradient Background - Deep Space feel */}
            <div className="absolute inset-0 bg-space-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-space-light via-space-black to-space-black" />

            {/* Moving Grid - Tech Pattern */}
            <div className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 243, 255, 0.3) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(0, 243, 255, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent 5%, black 40%, black 80%, transparent)'
                }}
            />

            {/* Floating Orbs - Data Points */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-violet/20 rounded-full blur-[80px] animate-pulse delay-1000" />
        </div>
    );
}
