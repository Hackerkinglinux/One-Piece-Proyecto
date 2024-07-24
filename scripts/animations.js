// Función para animar el efecto de hover en los botones
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('animate');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('animate');
        });
    });
});

// Función para animar el efecto de hover en los iconos de redes sociales
document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-icons img');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.classList.add('scale');
        });

        icon.addEventListener('mouseleave', () => {
            icon.classList.remove('scale');
        });
    });
});
