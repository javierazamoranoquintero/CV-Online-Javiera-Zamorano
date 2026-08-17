import '../style.css';
import { renderSkills } from './render/renderSkills.js';
import { renderTimeline } from './render/renderTimeline.js';
import { renderProjects } from './render/renderProjects.js';
import { initMobileMenu } from './modules/mobileMenu.js';
import { initThemeToggle } from './modules/themeToggle.js';
import { CONTACT_EMAIL, SOCIAL_LINKS } from './config.js';

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

    const form = document.getElementById('contact-form');
    if (form) {
        form.setAttribute('action', `https://formsubmit.co/${CONTACT_EMAIL}`);
    }
}

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
}

document.addEventListener('DOMContentLoaded', init);