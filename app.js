//Forma explicita de (ready) - Opcion 1
    // $(document).ready(function(){
    //     console.log("El dom esta cargado")
    // })


// shortcut (es la forma corta de ready) - Opcion 2
    // $(function(){
    //     console.log("Ready en versión Shortcut")
    // })


// arrow function -> Funcion flecha  - Opcion 3
    // $(()=>{
    //     console.log("Ready en versión Arrow Function")
    // })

// agregando un boton al primer #hero

$(".btnAdopta").prepend('<button id="adopta">Adopta</button>')

$("#adopta").click(function(){
    alert("Usted quiere adotar un perro")
})