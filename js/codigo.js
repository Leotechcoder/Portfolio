
// JavaScript para animar #animation y que a medida que la pantalla va reduciendo su tamaño tmbn #animation

window.addEventListener('resize', () => {
    const animation = document.querySelector('#animation');
    animation.style.transform = `scale(${window.innerWidth / 1200})`;
});