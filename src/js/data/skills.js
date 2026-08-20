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
            'Formación rigurosa en investigación social cualitativa: desde la problematización y el diseño metodológico hasta el diagnóstico, diseño y evaluación de programas de intervención social.',
        tags: ['Metodología Cualitativa', 'Diagnóstico Sociocultural', 'Investigación en Terreno', 'Evaluación Social'],
        variant: 'tertiary',
    },
    {
        id: 'desarrollo',
        icon: 'developer_mode',
        title: 'Desarrollo Full Stack',
        description:
            'Formación integral en desarrollo Full Stack JavaScript: fundamentos de front-end, programación avanzada en JavaScript, bases de datos relacionales, y desarrollo de aplicaciones web y APIs backend con Node.js y Express.',
        tags: ['JavaScript', 'Node.js & Express', 'Sequelize ORM', 'SQL & PostgreSQL'],
        variant: 'primary',
        featured: true,
    },
    {
        id: 'datos',
        icon: 'database',
        title: 'Procesamiento de Datos',
        description:
            'Ingesta, almacenamiento y procesamiento distribuido de datos masivos, desde la arquitectura Hadoop hasta el análisis avanzado con Spark y la visualización de resultados.',
        tags: ['Ecosistema Hadoop', 'Apache Spark & Python', 'Hive, Impala & Kudu', 'Kafka & NiFi'],
        variant: 'secondary',
    },
];