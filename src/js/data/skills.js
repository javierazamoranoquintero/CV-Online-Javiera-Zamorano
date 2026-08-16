/**
 * Contenido de la sección "Arsenal Híbrido".
 * Cada objeto representa una tarjeta de habilidades.
 *
 * @typedef {'tertiary' | 'primary' | 'secondary'} SkillVariant
 * @typedef {Object} Skill
 * @property {string} id
 * @property {string} icon         - Nombre del ícono de Material Symbols.
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 * @property {SkillVariant} variant - Define la paleta de color de la tarjeta.
 * @property {boolean} [featured]   - Si true, la tarjeta se destaca visualmente.
 */

/** @type {Skill[]} */
export const skills = [
    {
        id: 'investigacion',
        icon: 'psychology',
        title: 'Investigación y Análisis',
        description:
            'Metodologías cualitativas para extraer necesidades latentes y mapear contextos sociotécnicos.',
        tags: ['Etnografía Digital', 'UX Research', 'Entrevistas en Profundidad', 'Service Blueprinting'],
        variant: 'tertiary',
    },
    {
        id: 'desarrollo',
        icon: 'developer_mode',
        title: 'Desarrollo Full Stack',
        description:
            'Construcción de aplicaciones escalables, desde arquitecturas backend robustas hasta interfaces reactivas.',
        tags: ['JavaScript/TypeScript', 'React & Next.js', 'Node.js/Express', 'PostgreSQL & MongoDB', 'Tailwind CSS'],
        variant: 'primary',
        featured: true,
    },
    {
        id: 'datos',
        icon: 'database',
        title: 'Procesamiento de Datos',
        description:
            'Gestión, limpieza y análisis de grandes volúmenes de información para modelar comportamientos.',
        tags: ['Python (Pandas/NumPy)', 'SQL Avanzado', 'ETL Pipelines', 'Data Visualization'],
        variant: 'secondary',
    },
];