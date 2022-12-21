const container = document.querySelector('.container');
const totalSquares = 15000;

for(let i=1;i<totalSquares;i++){
    let square = document.createElement('div');
    square.classList.add('squareCSS');
    square.addEventListener('mouseover',() => setColor(square));
    square.addEventListener('mouseout',() => removeColor(square));
    container.appendChild(square);
}

let setColor = (item) =>  {
    let color = '#0f0';
    item.style.backgroundColor = color;
    item.style.boxShadow = `0 0 4px ${color}`;
}
let removeColor = (item) =>{
    item.style.backgroundColor = `#1d1d1d`;
    item.style.boxShadow = `0 0 2px #000`
}