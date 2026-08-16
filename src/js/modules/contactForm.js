/**
 * Maneja el envío del formulario de contacto abriendo el cliente de
 * correo del usuario con los datos precargados (mailto:). Es una
 * solución funcional sin necesidad de backend, apropiada para un
 * sitio estático.
 *
 * TODO(Javiera): cuando conectes un backend propio (Node/Express +
 * Sequelize), esta función es el punto exacto donde reemplazar el
 * mailto: por un fetch() real hacia tu endpoint de envío de correo.
 *
 * @param {HTMLFormElement | null} form
 * @param {string} destinationEmail
 */
export function initContactForm(form, destinationEmail) {
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('nombre')?.toString().trim() ?? '';
        const email = formData.get('email')?.toString().trim() ?? '';
        const message = formData.get('mensaje')?.toString().trim() ?? '';

        const subject = encodeURIComponent(`Contacto desde el CV — ${name}`);
        const body = encodeURIComponent(`${message}\n\nResponder a: ${email}`);

        window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
    });
}