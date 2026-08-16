/**
 * Controla la apertura/cierre del menú de navegación en mobile.
 * Mantiene sincronizado aria-expanded para que el botón sea accesible
 * con lectores de pantalla, y cambia el ícono menu/close.
 *
 * @param {Object} elements
 * @param {HTMLElement | null} elements.toggleButton
 * @param {HTMLElement | null} elements.menuPanel
 */
export function initMobileMenu({ toggleButton, menuPanel }) {
    if (!toggleButton || !menuPanel) return;

    const icon = toggleButton.querySelector('.material-symbols-outlined');

    const closeMenu = () => {
        menuPanel.classList.add('hidden');
        toggleButton.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = 'menu';
    };

    const openMenu = () => {
        menuPanel.classList.remove('hidden');
        toggleButton.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = 'close';
    };

    toggleButton.addEventListener('click', () => {
        const isOpen = toggleButton.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Cierra el menú automáticamente al navegar a una sección.
    menuPanel.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
}