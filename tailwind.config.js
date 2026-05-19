tailwind.config = {
    theme: {
        extend: {
        fontFamily: {
            display: ['Syne', 'sans-serif'],
            mono: ['DM Mono', 'monospace'],
            body: ['DM Sans', 'sans-serif'],
        },
        colors: {
            void: '#050508',
            surface: '#0c0c12',
            card: '#111118',
            border: '#1e1e2a',
            accent: '#c8f05a',
            muted: '#3a3a50',
            dim: '#6b6b88',
            light: '#e8e8f0',
            ghost: '#a0a0b8',
        },
        animation: {
            'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
            'slide-in': 'slideIn 1s cubic-bezier(0.22,1,0.36,1) forwards',
            'glow-pulse': 'glowPulse 3s ease-in-out infinite',
            'cursor-blink': 'cursorBlink 1s step-end infinite',
            'grain': 'grain 0.8s steps(1) infinite',
            'marquee': 'marquee 20s linear infinite',
            'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
            fadeUp: { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
            slideIn: { from: { opacity: 0, transform: 'translateX(-60px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
            glowPulse: { '0%,100%': { opacity: 0.4 }, '50%': { opacity: 1 } },
            cursorBlink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
            grain: { '0%,100%': { backgroundPosition: '0 0' }, '10%': { backgroundPosition: '-5% -10%' }, '20%': { backgroundPosition: '-15% 5%' }, '30%': { backgroundPosition: '7% -25%' }, '40%': { backgroundPosition: '-5% 25%' }, '50%': { backgroundPosition: '-15% 10%' }, '60%': { backgroundPosition: '15% 0%' }, '70%': { backgroundPosition: '0 15%' }, '80%': { backgroundPosition: '3% 35%' }, '90%': { backgroundPosition: '-10% 10%' } },
            marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
            float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        }
        }
    }
}