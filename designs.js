const pixelCanvas = $('#pixelCanvas');

$('#sizePicker').on('submit', function(event) {
    // Clear previous canvas, if any
    pixelCanvas.empty();

    // Get height and width of the grid
    let inputHeight = parseInt($('#inputHeight').val());
    let inputWidth = parseInt($('#inputWeight').val());

    // Generate the grid
    makeGrid(inputHeight, inputWidth);

    // Delegate `click` event to all cells
    pixelCanvas.delegate('td', 'click', changeCellColor);

    // Prevent the default action on form submission
    event.preventDefault();
});

// Generates the grid
function makeGrid(inputHeight, inputWidth) {
    for (let i = 0; i < inputHeight; i++) {
        // Insert a row into the grid
        pixelCanvas.append('<tr></tr>');

        // Get that row and add cells to it
        const row = $('#pixelCanvas tr').last();
        for (let j = 0; j < inputWidth; j++) {
            const cell = row.append('<td></td>');
        }
    }
}

// Change the color of the cell that has been clicked
function changeCellColor() {
    let cellColor = $('#colorPicker').val();
    $(this).css('background-color', cellColor);
}
