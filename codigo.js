// Grab DOM elements
var imageauto = [
  "ccoche4.jpg",
  "ccoche1.jpg",
  "ccoche2.jpg",
  "ccoche5.jpg",
  "ccoche6.jpg",
];
let contador = 0;
let contador1 = 0;
let siguientefoto = () => {
  document.getElementById("cambio").src = imageauto[contador];
  contador !== 4 ? contador++ : (contador = 0);
};
var procesoID = window.setInterval(siguientefoto, 3000);
var imageauto1 = [
  "golpe1.1.jpg",
  "golpe1.2.jpg",
  "golpe1.3.jpg",
  "reparado1.jpg",
];
let siguientefoto1 = () => {
  document.getElementById("cambio1").src = imageauto1[contador1];
  contador1 !== 3 ? contador1++ : (contador1 = 0);
};
var procesoID = window.setInterval(siguientefoto1, 3500);