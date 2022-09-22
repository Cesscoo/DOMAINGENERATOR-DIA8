/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#dominio").innerHTML = dominions();
  console.log("Hemos conseguido imprimir en pantalla todas las opciones !");
};

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var fin = [".com", ".es", ".net"];

let resultado = [];

function dominions() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let y = 0; y < noun.length; y++) {
        for (let z = 0; z < fin.length; z++)
          resultado.push(pronoun[i] + adj[x] + noun[y] + fin[z]);
      }
    }
  }
  return resultado;
}
