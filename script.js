// Language switching functionality
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        if (el.dataset.lang === lang) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });

    // Save the language preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language on page load
window.onload = function () {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);
};
