/**
 * Contenido de la sección "Trayectoria".
 * El arreglo está ordenado del hito más reciente al más antiguo,
 * tal como se muestra visualmente (de arriba hacia abajo).
 *
 * @typedef {'active' | 'recent' | 'mid' | 'origin'} MarkerStyle
 * @typedef {Object} TimelineMilestone
 * @property {string} id
 * @property {string} period        - Año o rango de años.
 * @property {string} title
 * @property {string} subtitle      - Institución donde se realizó.
 * @property {string} description
 * @property {MarkerStyle} markerStyle - Controla el estilo del punto y la tarjeta.
 */

/** @type {TimelineMilestone[]} */
export const timeline = [
    {
        id: 'big-data',
        period: '2026',
        title: 'Especialización en Big Data',
        subtitle: 'Samsung Innovation Campus',
        description:
            'Especialización en el ecosistema Big Data: ingesta y almacenamiento distribuido (Hadoop, Kafka, NoSQL), procesamiento con Apache Spark y Python, y visualización de resultados para la toma de decisiones, con foco en la calidad y trazabilidad de los datos.',
        markerStyle: 'active',
    },
    {
        id: 'full-stack',
        period: '2026',
        title: 'Desarrollo Full Stack JavaScript',
        subtitle: 'Talento Digital',
        description:
            'Diseño e implementación de aplicaciones web de extremo a extremo: APIs robustas con Node.js y Express, modelamiento de datos con Sequelize ORM, y desarrollo de interfaces con JavaScript, priorizando la experiencia del usuario final.',
        markerStyle: 'recent',
    },
    {
        id: 'diplomado',
        period: '2021',
        title: 'Diplomado en Desarrollo, Pobreza y Territorio',
        subtitle: 'Universidad Alberto Hurtado',
        description:
            'Formación en marcos estructurados de desarrollo social y territorial, profundizando en el análisis de políticas públicas y su aplicación en contextos de vulnerabilidad social.',
        markerStyle: 'mid',
    },
    {
        id: 'antropologia',
        period: '2011 - 2017',
        title: 'Licenciatura en Antropología',
        subtitle: 'Universidad Austral de Chile',
        description:
            'Formación rigurosa en métodos de investigación social, etnografía y análisis cultural. Fundación de la capacidad para entender sistemas complejos desde una perspectiva humana.',
        markerStyle: 'origin',
    },
];