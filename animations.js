document.addEventListener('DOMContentLoaded', () => {
    // La animación 3D se ha movido a CSS para evitar conflictos con la expansión de la tarjeta.
    // Solo se mantiene el efecto para la tarjeta principal si se desea.
    const mainCards = document.querySelectorAll('.card');

    mainCards.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = element.getBoundingClientRect();
            const x = e.clientX - left - width / 2;
            const y = e.clientY - top - height / 2;

            const rotateX = (y / height) * -4; // Rotación más sutil
            const rotateY = (x / width) * 4;

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});