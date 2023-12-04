const nav = document.querySelector(".container-nav-desplegable");
const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
// Abrir menu
menu.addEventListener("click", (e)=>{
    nav.style.display = "flex";
    cross.style.display = "flex";
})
// Cerrar menu
cross.addEventListener("click", (e)=>{
    nav.style.display = "none";
    cross.style.display = "none";
})
