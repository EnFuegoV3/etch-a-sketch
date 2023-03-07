
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
            squares.style.cssText = 'background-color: black';
        })
        clear.addEventListener('click', () => {
            return 
        })
        // if(num == 1024) {
        //     container.style.cssText = 'display: grid; grid-template-columns: repeat(32, 10px [col-start]); justify-content: center';
        // }
        
    }
}

// function selection() {
//         let e = document.getElementById('selection').value;
//         return e;
        
// }


grid(16);

