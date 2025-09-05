
document.addEventListener('DOMContentLoaded', () => {

    // ===== LÓGICA DEL MODO OSCURO =====
    const themeToggle = document.getElementById('theme-toggle');
    
    // Función para aplicar el tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.checked = false;
        }
    };

    // 1. Intentar cargar el tema desde localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // 2. Si no hay tema guardado, verificar la preferencia del sistema operativo
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }

    // Evento para cambiar el tema manualmente
    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });


    // ===== ANIMACIÓN 3D DE LAS TARJETAS (CÓDIGO ORIGINAL) =====
    const mainCards = document.querySelectorAll('.card');
    mainCards.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = element.getBoundingClientRect();
            const x = e.clientX - left - width / 2;
            const y = e.clientY - top - height / 2;
            const rotateX = (y / height) * -4;
            const rotateY = (x / width) * 4;
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});