import { timeline } from '../data/timeline.js';

/**
 * Estilos por tipo de hito. Las 4 tarjetas comparten exactamente el
 * mismo tratamiento visual (tarjeta, punto, comportamiento de hover)
 * en ambos modos claro y oscuro; solo cambia el color del borde del
 * punto según qué tan reciente es el hito.
 */
const MARKER_CONFIG = {
    active: {
        markerWrapper: 'border-primary group-hover:scale-110 transition-transform',
        dot: '<div class="w-2 h-2 bg-primary rounded-full"></div>',
        card: 'bg-surface dark:bg-inverse-on-surface/5 p-6 rounded border border-outline-variant/20 dark:border-inverse-on-surface/10 shadow-sm lift-hover transition-colors',
        badge: 'bg-surface-container-high dark:bg-inverse-on-surface/10 text-on-surface-variant dark:text-inverse-on-surface/70 border border-outline-variant/30 dark:border-inverse-on-surface/20',
        itemExtra: '',
    },
    recent: {
        markerWrapper: 'border-primary/70 group-hover:scale-110 transition-transform',
        dot: '',
        card: 'bg-surface dark:bg-inverse-on-surface/5 p-6 rounded border border-outline-variant/20 dark:border-inverse-on-surface/10 shadow-sm lift-hover transition-colors',
        badge: 'bg-surface-container-high dark:bg-inverse-on-surface/10 text-on-surface-variant dark:text-inverse-on-surface/70 border border-outline-variant/30 dark:border-inverse-on-surface/20',
        itemExtra: '',
    },
    mid: {
        markerWrapper: 'border-primary/40 group-hover:scale-110 transition-transform',
        dot: '',
        card: 'bg-surface dark:bg-inverse-on-surface/5 p-6 rounded border border-outline-variant/20 dark:border-inverse-on-surface/10 shadow-sm lift-hover transition-colors',
        badge: 'bg-surface-container-high dark:bg-inverse-on-surface/10 text-on-surface-variant dark:text-inverse-on-surface/70 border border-outline-variant/30 dark:border-inverse-on-surface/20',
        itemExtra: '',
    },
    origin: {
        markerWrapper: 'border-primary/20 group-hover:scale-110 transition-transform',
        dot: '',
        card: 'bg-surface dark:bg-inverse-on-surface/5 p-6 rounded border border-outline-variant/20 dark:border-inverse-on-surface/10 shadow-sm lift-hover transition-colors',
        badge: 'bg-surface-container-high dark:bg-inverse-on-surface/10 text-on-surface-variant dark:text-inverse-on-surface/70 border border-outline-variant/30 dark:border-inverse-on-surface/20',
        itemExtra: '',
    },
};

function renderMilestone(milestone) {
    const config = MARKER_CONFIG[milestone.markerStyle];
    const subtitleHtml = milestone.subtitle
        ? `<p class="font-body-md text-body-md text-primary dark:text-primary-fixed-dim mb-4">${milestone.subtitle}</p>`
        : '';

    return `
    <div class="relative pl-12 group ${config.itemExtra}">
      <div class="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-surface dark:bg-inverse-surface border-4 flex items-center justify-center z-10 ${config.markerWrapper}">
        ${config.dot}
      </div>
      <div class="${config.card}">
        <span class="inline-block px-3 py-1 font-code-sm text-code-sm rounded-full mb-3 ${config.badge}">${milestone.period}</span>
        <h3 class="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface mb-1">${milestone.title}</h3>
        ${subtitleHtml}
        <p class="font-body-md text-body-md text-on-surface-variant dark:text-inverse-on-surface/70">
          ${milestone.description}
        </p>
      </div>
    </div>
  `;
}

/**
 * Renderiza los hitos de la trayectoria dentro del contenedor dado.
 * @param {HTMLElement | null} container
 */
export function renderTimeline(container) {
    if (!container) return;
    container.innerHTML = timeline.map(renderMilestone).join('');
}