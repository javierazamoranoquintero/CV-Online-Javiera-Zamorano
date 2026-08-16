/**
 * Contenido de la sección "Trayectoria".
 * El arreglo está ordenado del hito más reciente al más antiguo,
 * tal como se muestra visualmente (de arriba hacia abajo).
 *
 * @typedef {'active' | 'recent' | 'mid' | 'origin'} MarkerStyle
 * @typedef {Object} TimelineMilestone
 * @property {string} id
 * @property {string} period        - Etiqueta de fecha o "Actualidad".
 * @property {string} title
 * @property {string} [subtitle]    - Línea destacada opcional bajo el título.
 * @property {string} description
 * @property {MarkerStyle} markerStyle - Controla el estilo del punto y la tarjeta.
 */

/** @type {TimelineMilestone[]} */
export const timeline = [
    {
        id: 'big-data',
        period: 'Actualidad',
        title: 'Especialización en Big Data',
        subtitle: 'Análisis de Datos Masivos',
        description:
            'Integración de modelos analíticos complejos con arquitecturas escalables. Procesamiento de grandes volúmenes de información para extraer insights accionables que informan el desarrollo de producto.',
        markerStyle: 'active',
    },
    {
        id: 'full-stack',
        period: '2021 - 2023',
        title: 'Desarrollo Full Stack JavaScript',
        subtitle: 'Ingeniería de Software',
        description:
            'Diseño e implementación de aplicaciones web de extremo a extremo. Creación de APIs robustas (Node.js/Express) e interfaces de usuario dinámicas (React), priorizando la experiencia del usuario final.',
        markerStyle: 'recent',
    },
    {
        id: 'ux-research',
        period: '2018 - 2021',
        title: 'UX Research & Diseño de Servicios',
        subtitle: 'Consultoría Estratégica',
        description:
            'Aplicación de metodologías de investigación cualitativa para mapear journeys de usuario, identificar puntos de dolor y co-crear soluciones centradas en las personas para organizaciones complejas.',
        markerStyle: 'mid',
    },
    {
        id: 'antropologia',
        period: '2014 - 2018',
        title: 'Licenciatura en Antropología',
        description:
            'Formación rigurosa en métodos de investigación social, etnografía y análisis cultural. Fundación de la capacidad para entender sistemas complejos desde una perspectiva humana.',
        markerStyle: 'origin',
    },
];