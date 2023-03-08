
const clear = document.querySelector('#clear');
let gridSize = document.querySelector('#size');
const container = document.querySelector('#container');


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
        gridSize.addEventListener('click', () => {
            container.removeChild(squares);
        })
    }
    
}

gridSize.addEventListener('click', () => {
    let amount = prompt("Enter new row/column amount");
    if(amount <= 100 && amount > 0){
        grid(amount);
    } else {alert("Enter a valid number less than or equal to 100")}
})

grid(16);

// function selection() {

//         e = document.getElementById('selection').value;
//         grid(e);
        
// }


