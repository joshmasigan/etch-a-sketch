const page = document.querySelector('.page');
const container = document.querySelector('.container');
container.classList.add('container');
page.appendChild(container);
createGrid();

function createGrid(tilesPerRow = 16){
    const squares = tilesPerRow * tilesPerRow;
    for(let i = 0; i < squares; ++i)
    {
        const row = document.createElement('div');  
        row.style.width = calculateWidth(tilesPerRow);
        row.classList.add('blank');
        row.setAttribute('id', 'tile');
        row.addEventListener('mouseenter', function(e){
            e.target.classList.add('draw');
        });
        container.appendChild(row);
    }
}

function calculateWidth(tilesPerRow){
    const containerArea = container.clientHeight * container.clientWidth; // area of container
    const totalSquares = tilesPerRow * tilesPerRow; // Total number of squares within the container
    const areaOfTile = containerArea/totalSquares; // area of a single tile
    const width = Math.sqrt(areaOfTile) // get length of a side by squaring the area of a tile
    let stringWidth = width.toString();
    return stringWidth += "px"; // return string so that it can be passed to x.style.width
}

function clearSketchpad(){ // remove all tiles from the container
    while(container.firstChild){
        container.removeChild(container.firstChild);

    //     const tiles = document.querySelectorAll('.draw');
    //     tiles.forEach(tile => tile.classList.toggle('draw'));
    //     return;
    }
}

function createCustomGrid(){
    let tilesPerRowString = prompt("Enter the new number of tiles per row (max. 60) or press 0 to erase",
    "Enter a number from 1-60");
    let tilesPerRow = parseInt(tilesPerRowString);
    if(isNaN(tilesPerRow)){
        return;
    }

    if(tilesPerRow > 60 || tilesPerRow <= 0){
        while(tilesPerRow > 60 || tilesPerRow <= 0){
            tilesPerRowString = prompt("Enter the new number of tiles per row (max. 60) or press 0 to erase",
            "Enter a number from 1-60");
            tilesPerRow = parseInt(tilesPerRowString);
            return;
        }
    }
    clearSketchpad();
    createGrid(tilesPerRow);
}

const reset = document.createElement('button');
reset.textContent = 'Reset';
reset.classList.add('reset');
reset.addEventListener('click', function(e){
    createCustomGrid();
});
page.appendChild(reset);

// see drumkit project for transition tips