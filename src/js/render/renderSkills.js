import { skills } from '../data/skills.js';

/**
 * Mapea cada variante de color a sus clases de Tailwind.
 * Centralizar esto evita repetir estilos en cada tarjeta y hace que
 * agregar una nueva variante sea un cambio en un solo lugar.
 */
const VARIANT_STYLES = {
    tertiary: {
        iconWrapper: 'bg-tertiary-container/20 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary',
        tag: 'bg-surface-container-low border-outline-variant/30 text-on-surface-variant',
    },
    primary: {
        iconWrapper: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary',
        tag: 'bg-primary/5 border-primary/20 text-primary font-semibold',
    },
    secondary: {
        iconWrapper: 'bg-secondary-container/20 text-secondary group-hover:bg-secondary group-hover:text-on-secondary',
        tag: 'bg-surface-container-low border-outline-variant/30 text-on-surface-variant',
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
        'bg-surface border border-outline-variant/30 rounded p-8 lift-hover group',
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
      <h3 class="font-headline-md text-headline-md text-on-surface mb-4 ${z10}">${skill.title}</h3>
      <p class="font-body-md text-body-md text-on-surface-variant mb-6 min-h-[80px] ${z10}">
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