function etch(event) {
    event.target.classList.add('etch');
}

const button = document.querySelector('button');
button.addEventListener('click', newGrid); 

function newGrid() {
    const size = inputSize(); 
    grid(size); 
}

function inputSize(){
    let size; 

    do {
        size = parseInt(prompt('Enter new square size (max 100)', '16'));
    } while (isNaN(size) || size > 100)  

    return size; 

}

const squaresContainer = document.querySelector('#squares-container');

// Initial grid 
grid(16);

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

}
