/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,html}'],
    theme: {
        extend: {
            // --- Paleta de colores ---
            // Fuente de verdad: DESIGN.md (sección "colors" del front-matter).
            colors: {
                surface: '#f9f9ff',
                secondary: '#9d4300',
                outline: '#7b7486',
                'surface-variant': '#dce2f7',
                primary: '#6b38d4',
                'tertiary-container': '#00855b',
                'surface-container-low': '#f1f3ff',
                'on-error': '#ffffff',
                'on-surface': '#141b2b',
                'on-secondary': '#ffffff',
                'inverse-primary': '#d0bcff',
                'on-tertiary-fixed-variant': '#005236',
                'on-tertiary-container': '#f5fff6',
                'inverse-surface': '#293040',
                'inverse-on-surface': '#edf0ff',
                error: '#ba1a1a',
                'secondary-fixed': '#ffdbca',
                'surface-container-highest': '#dce2f7',
                'tertiary-fixed-dim': '#4edea3',
                'surface-container': '#e9edff',
                'on-error-container': '#93000a',
                background: '#f9f9ff',
                'secondary-container': '#fd761a',
                'on-secondary-fixed': '#341100',
                tertiary: '#006947',
                'on-primary-container': '#fffbff',
                'surface-container-lowest': '#ffffff',
                'outline-variant': '#cbc3d7',
                'primary-container': '#8455ef',
                'on-tertiary-fixed': '#002113',
                'tertiary-fixed': '#6ffbbe',
                'error-container': '#ffdad6',
                'on-secondary-fixed-variant': '#783200',
                'on-secondary-container': '#5c2400',
                'primary-fixed': '#e9ddff',
                'on-primary-fixed-variant': '#5516be',
                'on-surface-variant': '#494454',
                'surface-bright': '#f9f9ff',
                'on-background': '#141b2b',
                'primary-fixed-dim': '#d0bcff',
                'on-primary-fixed': '#23005c',
                'surface-container-high': '#e1e8fd',
                'surface-dim': '#d3daef',
                'secondary-fixed-dim': '#ffb690',
                'on-tertiary': '#ffffff',
                'surface-tint': '#6d3bd7',
                'on-primary': '#ffffff',
            },

            // --- Radios de borde ---
            // Corregido para coincidir EXACTAMENTE con DESIGN.md > "rounded".
            // La config anterior (heredada del HTML de Stitch) no coincidía:
            // tenía DEFAULT=0.25rem / lg=0.5rem / xl=0.75rem y ni siquiera
            // declaraba "sm" ni "md".
            borderRadius: {
                sm: '0.25rem',
                DEFAULT: '0.5rem',
                md: '0.75rem',
                lg: '1rem',
                xl: '1.5rem',
                full: '9999px',
            },

            // --- Espaciado ---
            // Se agrega "margin-tablet" (40px): el DESIGN.md define 3 niveles
            // de margen por breakpoint (20 / 40 / 64px) pero solo existían 2.
            spacing: {
                'container-max': '1280px',
                gutter: '32px',
                'margin-desktop': '64px',
                'margin-tablet': '40px',
                'asymmetric-offset': '120px',
                'margin-mobile': '20px',
                unit: '8px',
            },

            fontFamily: {
                'headline-md': ['Playfair Display'],
                'headline-lg-mobile': ['Playfair Display'],
                'code-sm': ['JetBrains Mono'],
                'label-caps': ['JetBrains Mono'],
                'display-lg': ['Playfair Display'],
                'body-lg': ['Inter'],
                'body-md': ['Inter'],
                'headline-lg': ['Playfair Display'],
            },
            fontSize: {
                'headline-md': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
                'headline-lg-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
                'code-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
                'label-caps': ['12px', { lineHeight: '1.0', letterSpacing: '0.1em', fontWeight: '600' }],
                'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
                'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
                'headline-lg': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
            },
        },
    },
    plugins: [],
};