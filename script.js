const h1 = document.querySelector('h1');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('.p2');
const a = document.querySelectorAll('a');
const input = document.querySelectorAll('input');

input.value = "452346";

p1.textContent = "asdasd" ;

p2.innerText = "ASD";
p2.innerHTML = "ASD";

const imagen = document.getElementsByClassName('imagen');

const img = document.createElement('img');
img.setAttribute('src','https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5484.png');

console.log(imagen.length);

