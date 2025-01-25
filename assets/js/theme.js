// Theme management
const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const setTheme = (theme) => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
};

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);

    // Theme toggle button click handler
    const themeToggleHero = document.getElementById('themeToggleHero');
    if (themeToggleHero) {
        themeToggleHero.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme') || getPreferredTheme();
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme') || getPreferredTheme();
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }

    // Update button state based on current theme
    const updateButtonState = () => {
        const currentTheme = localStorage.getItem('theme') || getPreferredTheme();
        document.body.classList.toggle('light-mode', currentTheme === 'light');
    };

    // Initial button state
    updateButtonState();

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'light' : 'dark');
        }
    });
}); 