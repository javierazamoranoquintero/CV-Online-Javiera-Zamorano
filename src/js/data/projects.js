/**
 * Contenido de la sección "Proyectos Destacados".
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
        id: 'relatos-tolten',
        category: 'Antropología',
        categoryStyle: 'tertiary',
        title: 'Relatos y Leyendas del Estuario del Río Toltén',
        description:
            'Libro que recopila testimonios orales de habitantes del estuario del río Toltén, resultado del trabajo de campo junto a comunidades de pescadores artesanales y mapuche lafkenche realizado con Servicio País.',
        tags: ['Etnografía', 'Historia Oral', 'Investigación Cualitativa'],
        tagStyle: 'neutral',
        media: { type: 'icon', icon: 'auto_stories' },
        // Sin link público todavía: lleva a Contacto para quien quiera más info.
        href: 'https://www.isbnchile.cl/catalogo.php?mode=detalle&nt=136944',
    },
    {
        id: 'ptc-server',
        category: 'Desarrollo',
        categoryStyle: 'primary',
        title: 'PTC Server — Pichilemu Tennis Club',
        description:
            'Aplicación web monolítica para la gestión de un club de tenis: sistema de reservas, noticias y administración de usuarios.',
        tags: ['Node.js', 'Express', 'Sequelize ORM'],
        tagStyle: 'primary',
        media: { type: 'icon', icon: 'sports_tennis' },
        href: 'https://github.com/javierazamoranoquintero/PTC',
    },
    {
        id: 'capstone-bigdata',
        category: 'Big Data',
        categoryStyle: 'secondary',
        title: 'Proyecto Capstone — Samsung Innovation Campus',
        description:
            'Proyecto final del programa de especialización en Big Data, actualmente en desarrollo. Vuelve pronto para conocer los detalles.',
        tags: ['Próximamente'],
        tagStyle: 'neutral',
        media: { type: 'icon', icon: 'schedule' },
        href: '#contacto',
    },
];