//Ex1
window.addEventListener("DOMContentLoaded", () => {
  //       alert("Hola mundo");
});
//Ex2
document
  .getElementsByTagName("nav")[0]
  .addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "blue";
  });
document
  .getElementsByTagName("nav")[0]
  .addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "transparent";
  });
//Ex3 a
document
  .getElementsByClassName("busqueda")[0]
  .addEventListener("change", (event) => {
    alert(event.target.value);
  });
//Ex3 c
function buscarInput() {
  //alert(document.getElementsByClassName("busqueda")[0].value);
}
//Ex4
document.getElementById("btn-submit").addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
});
//Ex5
const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", (event) => {
  console.log("%c ", "font-size:400px; background-size: contain; background:url("+event.target.src+") no-repeat;");

  event.stopPropagation();
});
infoDiv.addEventListener("click", (event) => {
  console.log(event.target.textContent);
  event.stopPropagation();
});
titulo.addEventListener("click", (event) => {
  console.log(event.target.textContent);
  event.stopPropagation();
});
//Ex6
let cards = document.getElementsByClassName("card");

Array.from(cards).forEach((card) => {
  card.addEventListener("click", (event) => {
    let element = event.target.className.split(" ")[0];
    switch (element) {
      case "categoria":
        console.log("Categoria: " + event.target.textContent);
        break;
      case "titulo":
        console.log("titulo: " + event.target.textContent);
        break;
      case "precio":
        console.log("precio: " + event.target.textContent);
        break;
    }
    
  });
});
