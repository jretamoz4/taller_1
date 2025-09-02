document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.card, .movie-item');

    interactiveElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = element.getBoundingClientRect();
            const x = e.clientX - left - width / 2;
            const y = e.clientY - top - height / 2;

            // Ajustar los valores de rotación para un efecto más sutil al estilo Apple
            const rotateX = (y / height) * -5; // Rotación vertical más suave
            const rotateY = (x / width) * 5;   // Rotación horizontal más suave

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`; // Escala más sutil
            element.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.15)`; // Sombra más prominente al interactuar
        });

        element.addEventListener('mouseleave', () => {
            // Vuelve al estado inicial al quitar el cursor
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            element.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)'; // Sombra normal
        });
    });
});