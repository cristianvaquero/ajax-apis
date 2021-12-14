// Sintaxtis de crear elementos en el dom

//$("").nombreDelMetodo("");
// $(".mostrarImg").prepend("");
// $(".ocultarImg").prepend("");

//$(document).ready(function (){
    // sintaxis obligatoria para confirmar que el dom esta cargado
// })

$("document").ready(function (){
    $('.mostrarImg').click(function () {
        $(".pruebaAnimacion").fadeToggle();
    });
})

$("#btnOpacity").animate({
    left: '250px',
    opacity: '0.4'},
    "slow",
)
