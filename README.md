04/05/2021
This project will creating an equal grid of squares within a container to use as a sketch pad.

The sketching will be done via cursor and each square will change color upon the mouse cursor touching it.

This is achieved by declaring a square container and calculating how many tiles will fit inside it equally based on user input. -> The default is 16x16 tiles

The grid is created by:
- determining how big the area of the container is
- squaring the user defined number of tiles in a row to determine the total amount of squares within the container
- dividing the total area by number of tiles to get the area of a single tile
- square rooting that value to get the width of a single tile
- assigning that value to the width of a new div and adding that div to our container
- repeat until we fill the container with equally sized tiles

The sketch is created by:
- adding an event listener to every tile that gets created
- creating an event listener that activates on mouseenter and adding it to each tile
- the event triggers a class addition which overrides the background color of the old class

The size of tile can be edited by:
- adding in a "reset" button that asks for user input
- adding an event listener to the button that activates on click
- the event calls a function that clears the current sketchpad and based on user input, creates a new sketchpad with a different amount of tiles in the container
- the size of the container stays the same, but the size of tile will change

Project was built in roughly 6 hours as of 04/05/2021