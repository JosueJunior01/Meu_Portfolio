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

// Efeito de escrita
new TypeIt(".animacao", {
    speed: 65,
    waitUntilVisible: true,
})
    .type("Desemvol", { delay: 900 })
    .move(-3)
    .delete(1)
    .type("n")
    .move(null, { to: "END" })
    .type("vedoor")
    .pause(300)
    .delete(2)
    .type("r")
    .move(null, { to: "END" })
    .type(" Frontend.")
    .delete(4, { delay:300})
    .type(" end.")
    .move(null, { to: "END"})
    .pause(500)
    .go();