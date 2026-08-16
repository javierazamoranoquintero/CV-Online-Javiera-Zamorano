const STORAGE_KEY = 'theme-preference';

/**
 * Determina el tema inicial: preferencia guardada > preferencia del
 * sistema operativo > claro por defecto.
 * @returns {'light' | 'dark'}
 */
function getInitialTheme() {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
}

function applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
}

/**
 * Inicializa el/los toggle(s) de tema claro/oscuro (puede haber más de
 * uno en pantalla a la vez: nav desktop + nav mobile). Se mantienen
 * sincronizados entre sí.
 *
 * DESIGN.md describe un modo oscuro ("Total Black surface") pero el
 * HTML original no tenía ningún control para activarlo: darkMode:"class"
 * estaba configurado en Tailwind, pero nada en la UI lo alcanzaba.
 *
 * @param {(HTMLElement | null)[]} toggleButtons
 */
export function initThemeToggle(toggleButtons) {
    const buttons = toggleButtons.filter(Boolean);
    let theme = getInitialTheme();

    applyTheme(theme);
    buttons.forEach((button) => updateButtonState(button, theme));

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            theme = theme === 'dark' ? 'light' : 'dark';
            applyTheme(theme);
            window.localStorage.setItem(STORAGE_KEY, theme);
            buttons.forEach((btn) => updateButtonState(btn, theme));
        });
    });
}

function updateButtonState(button, theme) {
    if (!button) return;
    const icon = button.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    button.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
    );
}