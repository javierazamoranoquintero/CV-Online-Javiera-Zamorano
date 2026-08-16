import { projects } from '../data/projects.js';

const CATEGORY_BADGE_STYLES = {
    tertiary: 'bg-tertiary-container/30 text-on-tertiary-container border-tertiary-container/30',
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary-container/20 text-on-secondary-container border-secondary-container/20',
};

const TAG_STYLES = {
    neutral: 'bg-surface-container-high text-on-surface-variant',
    primary: 'bg-primary/5 text-primary font-medium',
};

// DESIGN.md > Skill Tags: "High roundedness (rounded-xl)" — se aplica
// también a los tags de tecnologías de las tarjetas de proyecto, que son
// el mismo componente visual reutilizado.
const TAG_RADIUS = 'rounded-xl';

const ICON_MEDIA_STYLES = {
    tertiary: { bg: 'bg-tertiary-container/10', iconColor: 'text-tertiary' },
    primary: { bg: 'bg-primary/10', iconColor: 'text-primary' },
    secondary: { bg: 'bg-secondary-container/10', iconColor: 'text-secondary' },
};

function renderBadge(project) {
    return `<span class="backdrop-blur-md px-3 py-1 rounded-full font-label-caps text-[10px] uppercase tracking-widest border ${CATEGORY_BADGE_STYLES[project.categoryStyle]}">${project.category}</span>`;
}

function renderMedia(project) {
    const badgeWrapped = `<div class="absolute top-4 left-4">${renderBadge(project)}</div>`;

    if (project.media.type === 'image') {
        return `
      <div class="aspect-video w-full overflow-hidden relative">
        <img alt="${project.media.alt}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="${project.media.src}" />
        ${badgeWrapped}
      </div>
    `;
    }

    const iconStyle = ICON_MEDIA_STYLES[project.categoryStyle];
    return `
    <div class="aspect-video w-full overflow-hidden relative">
      <div class="w-full h-full ${iconStyle.bg} flex items-center justify-center">
        <span class="material-symbols-outlined ${iconStyle.iconColor} text-5xl opacity-30">${project.media.icon}</span>
      </div>
      ${badgeWrapped}
    </div>
  `;
}

function renderTags(project) {
    const tagClasses = TAG_STYLES[project.tagStyle];
    return project.tags
        .map((tag) => `<span class="px-2 py-0.5 ${TAG_RADIUS} font-code-sm text-[12px] ${tagClasses}">${tag}</span>`)
        .join('');
}

function renderCard(project) {
    // DESIGN.md > Project Cards: "Standard 0.5rem (rounded) corners".
    return `
    <div class="bg-surface-container-low border border-outline-variant/20 rounded overflow-hidden lift-hover flex flex-col">
      ${renderMedia(project)}
      <div class="p-6 flex flex-col flex-grow">
        <h3 class="font-headline-md text-xl text-on-surface mb-3">${project.title}</h3>
        <p class="font-body-md text-on-surface-variant mb-6 flex-grow">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-6">
          ${renderTags(project)}
        </div>
        <a class="text-primary font-label-caps text-label-caps flex items-center gap-2 group/link" href="${project.href}">
          Ver más
          <span class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
    </div>
  `;
}

/**
 * Renderiza las tarjetas de proyectos dentro del contenedor dado.
 * @param {HTMLElement | null} container
 */
export function renderProjects(container) {
    if (!container) return;
    container.innerHTML = projects.map(renderCard).join('');
}