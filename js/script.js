// Menu Hamburguer
$(document).ready(function(){
    $('.hamburguer').click(function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
});

// Modo dark
const body = document.querySelector(".body");
const icon = document.querySelector(".iconDiaNoite");

icon.addEventListener('click', () => {
    body.classList.toggle('dark');
});