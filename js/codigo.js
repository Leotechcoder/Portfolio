
// JavaScript para animar #animation y que a medida que la pantalla va reduciendo su tamaño tmbn #animation

window.addEventListener('resize', () => {
    const animation = document.querySelector('#animation');
    animation.style.transform = `scale(${window.innerWidth / 1200})`;
//cuando la pantalla tenga una resolucion menor a 550px entonces el btnNav se muestra    
    if (window.innerWidth < 550) {
        btnNav.style.display = 'block';
        document.querySelector("#nav").style.display = 'none';
    } else {
        btnNav.style.display = 'none';
        document.querySelector("#nav").style.display = 'flex';
    }
});

//JavaScript para el boton nav-bar para mostrar el nav en pantalla
//Cuando la pantalla sea menor a 550px mostrara el boton y ocultara el nav
//Y el nav solo aparecera cuando sea presionado el boton


const btnNav = document.getElementById("nav-bar");

btnNav.style.display = 'none';


    

btnNav.addEventListener("click", () => {
    document.querySelector("#nav").style.display = nav.style.display === "none" ? "block" : "none";
});