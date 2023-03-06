const container = document.querySelector('#container');
const clear = document.querySelector('#clear');


function grid(num) {
    for(let n = 0; n < num; n++) {
        let squares = document.createElement('div');
        container.appendChild(squares);
        squares.style.cssText = 'border: 1px solid black; height: 50px; width: 50px';
        squares.addEventListener('mouseover', () => {
            squares.style.cssText = 'background-color: black; border 1px solid black; height: 50px; width: 50px';
        })
        clear.addEventListener('click', () => {
            squares.style.cssText = 'border: 1px solid black; height: 50px; width: 50px';
        })
    }
}


grid(256);

