var grid = document.querySelector('.main');

grid.style.borderStyle = 'solid';
grid.style.borderColor = 'black';
grid.style.background = 'white';

var row = 8;

grid.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
var size = row * row;
while(size--)
{
    var temp = document.createElement('div');
    temp.textContent = "x";
    grid.appendChild(temp);
}

