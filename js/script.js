
const clear = document.querySelector('#clear');
let gridSize = document.querySelector('#selection');


function grid(num) {
    const container = document.querySelector('#container');
    container.style.gridTemplateRows = `repeat(${num}, auto)`;
    container.style.gridTemplateColumns = `repeat(${num}, auto)`;
    for(let n = 0; n < (num * num); n++) {
        let squares = document.createElement('div');
        container.appendChild(squares);
        squares.addEventListener('mouseover', () => {
            squares.style.backgroundColor = 'black';
        })
        clear.addEventListener('click', () => {
            squares.style.backgroundColor = 'white';
        })
    }
    gridSize.addEventListener('change', () => {
        let r = document.getElementById("container")
        r.remove();
    })
}

// function selection() {

//         e = document.getElementById('selection').value;
//         grid(e);
        
// }

grid(16);
