
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

// gridSize.addEventListener('click', function() {
//     let amount = prompt("Enter new row/column amount");
//     if(amount < 1 || amount > 100){
//         alert("Enter a valid number less than or equal to 100");
//         return amount;
//     }   else if(amount <= 100 && amount > 0){
//         grid(amount);
//     }
// })

gridSize.addEventListener('click', function() {
    let amount = prompt("Enter new row/column amount");
    while (amount < 1 || amount > 100) {
        alert("Enter a valid number less than or equal to 100");
        amount = prompt("Enter new row/column amount");
    } if (amount => 1 && amount <= 100) {
        grid(amount);
    }
})

grid(16);

// function selection() {

//         e = document.getElementById('selection').value;
//         grid(e);
        
// }


