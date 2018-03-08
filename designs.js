let inputHeight;
let inputWidth;
let pixelCanvas;
let cellColor;

pixelCanvas = $('#pixelCanvas');

$('#sizePicker').on('submit', function(event) {
    // Clear previous canvas, if any
    pixelCanvas.empty();

    // Get height and width of the grid
    inputHeight = parseInt($('#inputHeight').val());
    inputWidth = parseInt($('#inputWeight').val());

    // Generate the grid
    makeGrid(inputHeight, inputWidth);

    // Attach event listeners to each cell in the grid
    attachEventListeners(inputHeight, inputWidth);

    // Prevent the default action on form submission
    event.preventDefault();
});

// Generates the grid
function makeGrid(inputHeight, inputWidth) {
    for (let i = 0; i < inputHeight; i++) {
        // Insert a row into the grid and give it a unique ID
        pixelCanvas.append('<tr id="row-' +
                            (i + 1).toString() +
                            '"></tr>');

        // Select current row
        let currentRow = $('#row-' + (i + 1).toString());

        // Insert cells into the current row and give each cell a unique ID
        for (let j = 0; j < inputWidth; j++) {
            currentRow.append('<td id="cell-' +
                            (i + 1).toString() +'-' +
                            (j + 1).toString() +
                            '"></td>');
        }
    }
}

// Change the color of the cell that has been clicked
function changeCellColor() {
    cellColor = $('#colorPicker').val();
    $(this).css('background-color', cellColor);
}

// Listen to each cell in the grid for a click
function attachEventListeners(inputHeight, inputWidth) {
    for (let i = 0; i < inputHeight; i++) {
        for (let j = 0; j < inputWidth; j++) {
            $('#cell-' + (i + 1).toString() + '-' + (j + 1).toString()).on('click', changeCellColor);
        }
    }
}
