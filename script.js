function etch(event) {
    event.target.classList.add('etch');
    
}

const button = document.querySelector('button');
button.addEventListener('click', inputSize); 

function newGrid(size) { 
    grid(size); 
}

function inputSize(){
    let size; 

    size = parseInt(prompt('Enter new sky size to paint over (1-100)', '8'));

    if (!isNaN(size) && size < 101 && size > 0){  
        newGrid(size); 
    }

}

const squaresContainer = document.querySelector('#squares-container');

// Initial grid 
grid(8);

function grid(size) {

    /* Delete existing grid */ 
    squaresContainer.textContent = '';
    
    /* New number of squares in a side */ 
    squaresContainer.style.gridTemplateColumns = `repeat(${size}, auto)`; 

    for (let i = 0; i < size; i++) {

        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            squaresContainer.appendChild(div); 
        }

    }

    initializeDrawing(); 

}

function initializeDrawing() {
    const squares = document.querySelectorAll('.square'); 
    squares.forEach(square => square.addEventListener('mouseenter', etch));
    squares.forEach(square => square.addEventListener('touchstart', etch));

}
