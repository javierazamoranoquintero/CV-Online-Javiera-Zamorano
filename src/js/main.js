import '../style.css';
import { renderSkills } from './render/renderSkills.js';
import { renderTimeline } from './render/renderTimeline.js';
import { renderProjects } from './render/renderProjects.js';
import { initMobileMenu } from './modules/mobileMenu.js';
import { initContactForm } from './modules/contactForm.js';
import { initThemeToggle } from './modules/themeToggle.js';
import { CONTACT_EMAIL, SOCIAL_LINKS } from './config.js';

/**
 * Aplica los datos de config.js a los elementos del DOM que dependen
 * de ellos: tanto los `href` (mailto:, URLs) como el texto visible en
 * la sección de Contacto. Una sola fuente de verdad evita el bug que
 * encontramos antes (el mailto: y el texto mostrado apuntaban a
 * direcciones de correo distintas).
 */
function applyContactInfo() {
    document.querySelectorAll('[data-contact="email"]').forEach((el) => {
        el.setAttribute('href', `mailto:${CONTACT_EMAIL}`);
    });
    document.querySelectorAll('[data-contact="linkedin"]').forEach((el) => {
        el.setAttribute('href', SOCIAL_LINKS.linkedin);
    });
    document.querySelectorAll('[data-contact="github"]').forEach((el) => {
        el.setAttribute('href', SOCIAL_LINKS.github);
    });

    const emailLabel = document.querySelector('[data-contact-label="email"]');
    if (emailLabel) emailLabel.textContent = CONTACT_EMAIL;

    const linkedinLabel = document.querySelector('[data-contact-label="linkedin"]');
    if (linkedinLabel && SOCIAL_LINKS.linkedin !== '#') {
        linkedinLabel.textContent = SOCIAL_LINKS.linkedin.replace(/^https?:\/\//, '');
    }
}

/**
 * Inicializa la aplicación: renderiza el contenido dinámico
 * (habilidades, trayectoria, proyectos) y activa la interactividad.
 */
function init() {
    renderSkills(document.getElementById('habilidades-grid'));
    renderTimeline(document.getElementById('timeline-container'));
    renderProjects(document.getElementById('proyectos-grid'));

    applyContactInfo();

    initMobileMenu({
        toggleButton: document.getElementById('mobile-menu-toggle'),
        menuPanel: document.getElementById('mobile-menu-panel'),
    });

    initThemeToggle([
        document.getElementById('theme-toggle'),
        document.getElementById('theme-toggle-mobile'),
    ]);

    initContactForm(document.getElementById('contact-form'), CONTACT_EMAIL);
}

document.addEventListener('DOMContentLoaded', init);