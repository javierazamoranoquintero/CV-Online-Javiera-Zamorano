import { timeline } from '../data/timeline.js';

/**
 * Estilos por tipo de hito. "origin" (el hito fundacional, Antropología)
 * se muestra visualmente más tenue que los demás, reforzando que es
 * la base sobre la que se construye el resto de la trayectoria.
 */
// Radios en 'rounded' (0.5rem) por consistencia con el resto de las
// tarjetas del sitio, según DESIGN.md > Shapes.
// itemExtra en "origin": el hito fundacional (Antropología) se muestra
// atenuado y solo alcanza opacidad completa al hover — refuerza que es
// la base sobre la que se construye el resto de la trayectoria.
const MARKER_CONFIG = {
    active: {
        markerWrapper: 'border-primary group-hover:scale-110 transition-transform',
        dot: '<div class="w-2 h-2 bg-primary rounded-full"></div>',
        card: 'bg-surface p-6 rounded border border-outline-variant/20 shadow-sm lift-hover',
        badge: 'bg-surface-container-high text-on-surface-variant border border-outline-variant/30',
        itemExtra: '',
    },
    recent: {
        markerWrapper: 'border-primary/70 group-hover:scale-110 transition-transform',
        dot: '',
        card: 'bg-surface p-6 rounded border border-outline-variant/20 shadow-sm lift-hover',
        badge: 'bg-surface-container-high text-on-surface-variant border border-outline-variant/30',
        itemExtra: '',
    },
    mid: {
        markerWrapper: 'border-primary/40 group-hover:scale-110 transition-transform',
        dot: '',
        card: 'bg-surface p-6 rounded border border-outline-variant/20 shadow-sm lift-hover',
        badge: 'bg-surface-container-high text-on-surface-variant border border-outline-variant/30',
        itemExtra: '',
    },
    origin: {
        markerWrapper: 'border-outline-variant',
        dot: '',
        card: 'bg-surface/50 p-6 rounded border border-outline-variant/20',
        badge: 'bg-surface-container-high/50 text-on-surface-variant',
        itemExtra: 'opacity-80 hover:opacity-100 transition-opacity',
    },
};

function renderMilestone(milestone) {
    const config = MARKER_CONFIG[milestone.markerStyle];
    const subtitleHtml = milestone.subtitle
        ? `<p class="font-body-md text-body-md text-primary mb-4">${milestone.subtitle}</p>`
        : '';

    return `
    <div class="relative pl-12 group ${config.itemExtra}">
      <div class="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-surface border-4 flex items-center justify-center z-10 ${config.markerWrapper}">
        ${config.dot}
      </div>
      <div class="${config.card}">
        <span class="inline-block px-3 py-1 font-code-sm text-code-sm rounded-full mb-3 ${config.badge}">${milestone.period}</span>
        <h3 class="font-headline-md text-headline-md text-on-surface mb-1">${milestone.title}</h3>
        ${subtitleHtml}
        <p class="font-body-md text-body-md text-on-surface-variant">
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