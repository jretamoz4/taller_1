document.addEventListener('DOMContentLoaded', () => {
    // Aplica el efecto de inclinación a cada tarjeta de película
    const movieItems = document.querySelectorAll('.movie-item');

    movieItems.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = e.clientX - left - width / 2;
            const y = e.clientY - top - height / 2;

            const rotateX = (y / height) * -12; // Inclinación vertical
            const rotateY = (x / width) * 12;   // Inclinación horizontal

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            // Vuelve al estado inicial al quitar el cursor
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});