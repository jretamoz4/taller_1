document.addEventListener('DOMContentLoaded', () => {

    // ===== LÓGICA DEL MODO OSCURO =====
    const themeToggle = document.getElementById('theme-toggle'); // ID corregido
    const currentTheme = localStorage.getItem('theme');

    const setTheme = (theme) => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.checked = false;
        }
    };

    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPrefersDark) {
            setTheme('dark');
        }
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
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