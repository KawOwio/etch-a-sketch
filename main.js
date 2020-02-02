var grid = document.querySelector('.main');
var newGrid = document.querySelector('.newGrid');
var dropDown = document.querySelector('.dropdown');
var reset = document.querySelector('.reset');

var resetSize = 20;

grid.style.borderStyle = 'solid';
grid.style.borderColor = 'black';
grid.style.background = 'white';

var originalR = 255;
var originalG = 255;
var originalB = 255;

function createGrid(size)
{
    removeGrid();

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    var row = size * size;
    
    while(row--)
    {
        let temp = document.createElement('div');
    
        temp.className = 'x';
        temp.addEventListener;
    
        temp.style.border = '1px';
        temp.style.borderStyle = 'solid';
        temp.style.borderColor = 'black';
        temp.style.background = 'white';
    
        temp.addEventListener('mouseover', changeColor);
        grid.appendChild(temp);
    }
    
}

function removeGrid()
{
    while(grid.firstChild)
    {
        grid.removeChild(grid.firstChild);
    }
}

function changeColor(e)
{
    var ddValue = document.querySelector('#colour').value;
    if(ddValue == 'black')
    {
        let r, g, b;
        r = 0;
        g = 0;
        b = 0;

        e.target.style.background = 'rgb(' + [r,g,b].join(',') + ')';
    }
    else if(ddValue == 'rgb')
    {
        let r, g, b;
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);

        e.target.style.background = 'rgb(' + [r,g,b].join(',') + ')';
    }
    else if(ddValue == 'greyscale')
    {
        var tempBGC = window.getComputedStyle(e.target).backgroundColor;
        var rgb = tempBGC.match(/\d+/g);
        var tenPercent = 26;
        
        for (var i = 0; i < 3; i++)
        {
            rgb[i] -= tenPercent;
        }

        e.target.style.background = 'rgb(' + [rgb[0],rgb[1],rgb[2]].join(',') + ')';
    }
    
}

function newGridButton()
{
    resetSize = prompt('Choose a grid size: ', 20) || 20;
    removeGrid();
    createGrid(resetSize);
}

function resetGrid()
{
    originalR = 255;
    originalG = 255;
    originalB = 255;

    removeGrid();
    createGrid(resetSize);
}

createGrid(20);

newGrid.addEventListener('click', newGridButton);
reset.addEventListener('click', resetGrid);
