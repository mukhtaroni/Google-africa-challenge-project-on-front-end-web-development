// Select color input
var gridCanvas = document.querySelector('#pixelCanvas');
var colorInput = document.querySelector("#colorPicker");
// Select size input
var gridHeight = document.querySelector('#inputHeight');
var gridWidth = document.querySelector('#inputWeight');
//add eventlistener when box is clicked
function click(box) {
  const color = colorInput.value;
  box.target.style.backgroundColor = color;
}
// When size is submitted by the user, call makeGrid()
function makeGrid() {
  gridCanvas.innerHTML = '';
  var canvas = document.createElement('tr','td');
  for (let h = 0; h < gridHeight.value; h++) {
        const tr = document.createElement('tr');
  for (let w = 0; w < gridWidth.value; w++) {
        const td = document.createElement('td');
      tr.appendChild(td);
    }

    tr.addEventListener('click', click);
    canvas.appendChild(tr);
  }
  gridCanvas.appendChild(canvas);
};
document.querySelector('form').addEventListener('submit', function(box){
  box.preventDefault();
  makeGrid();
});
