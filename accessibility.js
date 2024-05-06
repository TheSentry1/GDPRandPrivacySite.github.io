const toggleSwitch = document.querySelector('.theme-toggle');

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme); // Save theme preference to local storage
}

toggleSwitch.addEventListener('click', switchTheme);

// Check for saved theme preference when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
});









