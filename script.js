const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const totalSquares = 15000;

for(let i=1;i<totalSquares;i++){
    let square = document.createElement('div');
    square.classList.add('squareCSS');
    square.addEventListener('mouseover',() => setColor(square));
    square.addEventListener('mouseout',() => removeColor(square));
    container.appendChild(square);
}

let getRandomColor = () =>{
    return colors[Math.floor(Math.random()*colors.length)];
}
let setColor = (item) =>  {
    let color = getRandomColor();
    item.style.backgroundColor = color;
    item.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
let removeColor = (item) =>{
    item.style.backgroundColor = `#1d1d1d`;
    item.style.boxShadow = `0 0 2px #000`
}