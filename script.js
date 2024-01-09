// Add this JavaScript code for toggling dark mode
document.addEventListener('DOMContentLoaded', function () {
    const toggleMode = document.getElementById('toggle-mode');

    toggleMode.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', toggleMode.checked);
    });
});
