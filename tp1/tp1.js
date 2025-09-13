//https://youtu.be/b-MaXTAwS5k?si=vmQy_iBq1JO-OKu9

let referencia;
let colorFondo;
let colorFiguras;
let tam;
let cantidad;
let animador= 0;
let animar= false;

function preload(){
referencia= loadImage("data/F_28.jpg");
}

function setup() {
createCanvas(800,400);
colorFondo= color(255);
colorFiguras= color(0);
cantidad= 40;
 tam= width/cantidad;
}

function draw() {
  background(colorFondo);
image(referencia,0,0);

if (animar) {
    let velocidad = calcularVelocidad(mouseX + mouseY);
   animador += velocidad;
}
push();
translate(400,0);
for (let x=0; x<cantidad; x++){
     for(let y=0; y<cantidad; y++){
      let esCirculo = (x + y) % 2 == 0;
      let escala=1;
      if (animar) {
         escala = 1+ sin(radians(x*10 + animador*50)) * 0.5;
      }
      let nuevoTam = tam * escala;

      dibujarFiguras(x * tam, y * tam, nuevoTam, esCirculo);
    }
  }  
pop();
}

function dibujarFiguras(x, y, tam, esCirculo){
fill(colorFiguras);
noStroke();
if(esCirculo){
 ellipse(x + tam /2, y + tam /2, tam, tam);
} else {
    rect(x, y, tam, tam);
  }
}

function calcularVelocidad(posicion) {
  let v = map(posicion, 400, width + height, 0.01, 0.5);
  if (v < 0.01) {
    v = 0.01;
  } else if (v > 0.5) {
    v = 0.5;
  }
  return v;
}


function keyPressed(){
if(key === "c"||key==="C"){
    colorFondo = color(random(255), random(255), random(255));
    colorFiguras = color(random(255), random(255), random(255));
}
if (key === "r" || key === "R") {
    cantidad = 40;
    tam= width/ cantidad;
  colorFondo = color(255);
    colorFiguras = color(0);
    animador = 0;
    animar = false;
}
if (key == " ") {
    animar = !animar;
  }
}
