// genera 16 numeri casuali e mettili in un array


const bombs = [];
const punteggio = 0;

//funzione genera numero
function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}




//inizio gioco al click

function playGame(){


//dichiarata il div contenitore e appesa la funzione crea
let gridContainerHtml = document.getElementById('grid-container');

gridContainerHtml.innerHTML ="";



//funzione genera quadrato
function generaQuadrato(container, counter) {
    const box = document.createElement('div');
    box.classList.add('square');
    box.innerText = counter;
    // se bombs contiene una bomba che si chiama i
    if(bombs.includes(counter)){
       // box.classList.add('bomb');
       console.log('bomba')
        
    }

    box.addEventListener("click", onBoxClick )

    container.append(box);
}

//ciclo che pusha i numeri random nelle bombe 
let numBombs = 0;
while (numBombs < 16) {
    let elementoBombe = randomNumber(0, 100);

    //console.log( " bombs:" + bombs + " - "+ rng + " bombs.includes(rng): " + bombs.includes(rng) )
    if(!bombs.includes(elementoBombe)){
       numBombs++;
       bombs.push(elementoBombe);
    }
}

console.log(bombs)

function onBoxClick(){
    if(bombs.includes(parseInt(this.innerText))){   //includes(parseInt(this.innerText))
        this.classList.add('bomb');
        console.log("BOOOM!!")

    
    }else{
      this.classList.add('blue');
     // punteggio ++;
      
      console.log(punteggio)
    }
}

//console.log(generaQuadrato())

for (let i = 0; i < 100; i++) {
    generaQuadrato(gridContainerHtml, i);
}


}





















































