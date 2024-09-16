// JavaScript para añadir la clase 'scrolled' al header cuando se hace scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 30) { // Ajusta este valor según el punto en el que deseas que el header cambie
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});