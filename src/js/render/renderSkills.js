import { skills } from '../data/skills.js';

/**
 * Mapea cada variante de color a sus clases de Tailwind, incluyendo
 * sus equivalentes en modo oscuro.
 */
const VARIANT_STYLES = {
    tertiary: {
        iconWrapper: 'bg-tertiary-container/20 dark:bg-tertiary-fixed-dim/20 text-tertiary dark:text-tertiary-fixed-dim group-hover:bg-tertiary group-hover:text-on-tertiary',
        tag: 'bg-surface-container-low dark:bg-inverse-on-surface/10 border-outline-variant/30 dark:border-inverse-on-surface/20 text-on-surface-variant dark:text-inverse-on-surface/70',
    },
    primary: {
        iconWrapper: 'bg-primary/10 text-primary dark:text-primary-fixed-dim group-hover:bg-primary group-hover:text-on-primary',
        tag: 'bg-primary/5 border-primary/20 text-primary dark:text-primary-fixed-dim font-semibold',
    },
    secondary: {
        iconWrapper: 'bg-secondary-container/20 dark:bg-secondary-fixed-dim/20 text-secondary dark:text-secondary-fixed-dim group-hover:bg-secondary group-hover:text-on-secondary',
        tag: 'bg-surface-container-low dark:bg-inverse-on-surface/10 border-outline-variant/30 dark:border-inverse-on-surface/20 text-on-surface-variant dark:text-inverse-on-surface/70',
    },
};

function renderTags(tags, variant) {
    const tagClasses = VARIANT_STYLES[variant].tag;
    // DESIGN.md > Skill Tags: "High roundedness (rounded-xl)".
    return tags
        .map(
            (tag) =>
                `<span class="px-3 py-1 border rounded-xl font-code-sm text-code-sm ${tagClasses}">${tag}</span>`
        )
        .join('');
}

function renderCard(skill) {
    const style = VARIANT_STYLES[skill.variant];
    const isFeatured = Boolean(skill.featured);
    const z10 = isFeatured ? 'relative z-10' : '';

    const cardClasses = [
        // DESIGN.md > Project Cards: "Standard 0.5rem (rounded) corners" —
        // aplicado consistentemente a toda tarjeta de contenido del sitio.
        'bg-surface dark:bg-inverse-on-surface/5 border border-outline-variant/30 dark:border-inverse-on-surface/10 rounded p-8 lift-hover group transition-colors',
        isFeatured ? 'md:-translate-y-4 shadow-sm relative overflow-hidden' : '',
    ]
        .filter(Boolean)
        .join(' ');

    const decorativeGlow = isFeatured
        ? '<div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10"></div>'
        : '';

    return `
    <div class="${cardClasses}">
      ${decorativeGlow}
      <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${z10} ${style.iconWrapper}">
        <span class="material-symbols-outlined text-3xl">${skill.icon}</span>
      </div>
      <h3 class="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface mb-4 ${z10}">${skill.title}</h3>
      <p class="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70 mb-6 min-h-[80px] ${z10}">
        ${skill.description}
      </p>
      <div class="flex flex-wrap gap-2 ${z10}">
        ${renderTags(skill.tags, skill.variant)}
      </div>
    </div>
  `;
}

/**
 * Renderiza las tarjetas de habilidades dentro del contenedor dado.
 * @param {HTMLElement | null} container
 */
export function renderSkills(container) {
    if (!container) return;
    container.innerHTML = skills.map(renderCard).join('');
}