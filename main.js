//Inicia variable
let cartasabiertas = 0;
var carta1 = null;
var carta2 = null;
let primerresultado = null;
let segundoresultado = null;
let movimientos = 0;
let aciertos = 0;
let errores = 0;

let acierAudio = new Audio('./sonidos/acierta.wav');
let clickAudio = new Audio('./sonidos/click.wav');
let errorAudio = new Audio('./sonidos/error.wav');
let ganaAudio = new Audio('./sonidos/gana.wav');
let pierdeAudio = new Audio('./sonidos/pierde.wav');


// Direccionando al Movimiento del Juego
let mostrarmovimientos = document.getElementById('movimientos');
let mostraraciertos = document.getElementById('aciertos');
let mostrarerrores = document.getElementById('errores');


//Cartas aleatorias
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//Primera Accion 

function abrircarta(id){
    cartasabiertas++;
    console.log(cartasabiertas);

    if(cartasabiertas == 1){

 //Muestra primera Carta 
 carta1 = document.getElementById(id);
 primerresultado = numeros[id];
 carta1.innerHTML = `<img src="./img_animales/${primerresultado}.png" alt="">`; 
 clickAudio.play();   
 
 //Deshabilitar primera seleccion
 carta1.disabled = true;
    }
else if (cartasabiertas==2){
    // Mostrar segundacarta
    carta2 = document.getElementById(id);
    segundoresultado = numeros [id];
    carta2.innerHTML= `<img src="./img_animales/${segundoresultado}.png" alt="">`;

    // Desabilitar segunda carta
    carta2.disabled = true;

    // Incrementar Movimientos
    movimientos++;
    mostrarmovimientos.innerHTML ="Movimientos:"+movimientos;

    if(primerresultado==segundoresultado){
    // encerrar contador cartas abiertas
    cartasabiertas = 0;

    //Incrementar Aciertos
    aciertos++;
    mostraraciertos.innerHTML = "Aciertos:"+aciertos;

    ganaAudio.play();

    if (aciertos==8){

        alert('Felicidades Has Ganado!!!' );
    }


    }else
  
    {
        // contar errores
             errores++;
             mostrarerrores.innerHTML = "Errores:"+errores;
             errorAudio.play();
              
              
        // mostrar y tapar cartas
        setTimeout(()=>{
            carta1.innerHTML = '  ';
            carta2.innerHTML = '  ';
            carta1.disabled = false;
            carta2.disabled = false;
            cartasabiertas = 0;
            

    } , 2000);}
          
    }
}

