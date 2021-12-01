const card = document.querySelector(".card");
const form = document.querySelector("form");

// card.onclick = () => {
//     alert("Ahorras 15% comprando con Tarjeta de Crédito");
// }

const evento = 'submit';

// card.addEventListener(evento, hacerClick);
//     function hacerClick () {
//         const cardBody =  document.querySelector(".card-body");
//         cardBody.innerHTML = `Imprimiendo el evento <strong>${evento}</strong>`;
//     }

form.addEventListener(evento, formSubmit);
function formSubmit(e) {
    e.preventDefault();
    console.log(e);
    const form = document.querySelector(".prueba");
    label.innerHTML = `Imprimiendo el evento ${evento}`;
}




