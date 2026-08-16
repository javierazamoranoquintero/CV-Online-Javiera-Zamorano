/**
 * Contenido de la sección "Proyectos Destacados".
 *
 * NOTA PARA JAVIERA: estos 3 proyectos son placeholders heredados del
 * prototipo de Stitch. Cuando tengas tus proyectos reales, reemplaza
 * los objetos de este arreglo — no necesitas tocar el HTML ni el
 * render/renderProjects.js.
 *
 * @typedef {'tertiary' | 'primary' | 'secondary'} CategoryVariant
 * @typedef {{ type: 'image', src: string, alt: string } | { type: 'icon', icon: string }} ProjectMedia
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} category
 * @property {CategoryVariant} categoryStyle
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 * @property {'neutral' | 'primary'} tagStyle
 * @property {ProjectMedia} media
 * @property {string} href
 */

/** @type {Project[]} */
export const projects = [
    {
        id: 'etnografia-digital',
        category: 'Antropología',
        categoryStyle: 'tertiary',
        title: 'Etnografía Digital: Comportamiento en Redes',
        description:
            'Estudio sobre patrones de interacción social en plataformas de e-commerce para optimizar la retención de usuarios.',
        tags: ['Etnografía', 'UX Research'],
        tagStyle: 'neutral',
        media: {
            type: 'image',
            src: 'https://lh3.googleusercontent.com/aida/AP1WRLvzg4t1XBBZbc3rafOFJFzg25gOgi5JkDOpl6IXnG8_iuF2faSSe8SS31r5pk05NxzGgjUYxdM4nVpSioolXc6BHUbajAzSSIaiTTo7XGo6cm2scVSc1L3Qnk09sIXdm4LdSXoVvyd-i0e-FG_Q1ajcIRlk4R0KLSmOkTZ2LdNaZ26aku815BUmUIFotJ98xmGwjTHGvgU3TkhR7JXmEwAkt2jgsnQDRgxfJ31s37N4YJS7aVuo5bHSqyE',
            alt: 'Panel de análisis de etnografía digital sobre comportamiento en redes sociales',
        },
        href: '#',
    },
    {
        id: 'greenroute',
        category: 'Desarrollo',
        categoryStyle: 'primary',
        title: 'E-commerce Platform: GreenRoute',
        description:
            'Aplicación full-stack para logística sustentable, permitiendo a usuarios reducir su huella de carbono en envíos.',
        tags: ['Node.js', 'React', 'PostgreSQL'],
        tagStyle: 'primary',
        media: { type: 'icon', icon: 'eco' },
        href: '#',
    },
    {
        id: 'predictor-tendencias',
        category: 'Big Data',
        categoryStyle: 'secondary',
        title: 'Predictor de Tendencias Urbanas',
        description:
            'Modelo analítico para predecir flujos migratorios urbanos basado en datos públicos y sensores IoT.',
        tags: ['Python', 'Spark', 'Tableau'],
        tagStyle: 'neutral',
        media: { type: 'icon', icon: 'query_stats' },
        href: '#',
    },
];