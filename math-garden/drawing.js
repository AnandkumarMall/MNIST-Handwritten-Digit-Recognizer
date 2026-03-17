const BACKGROUNDCOLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 12

let isDrawing = false;
var currentX =0;
var currentY =0;
var previousX =0;
var previousY = 0;

var canvas;
var context;
function prepareCanvas() {
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext('2d');

    context.fillStyle = BACKGROUNDCOLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';
    context.lineCap = 'round'

    canvas.addEventListener('mousedown', function(event) {
        isDrawing = true;
        previousX = event.clientX - canvas.offsetLeft;
        previousY = event.clientY - canvas.offsetTop;
    });

    canvas.addEventListener('mouseup', function(event) {
        isDrawing = false;
        previousX = 0;
        previousY = 0;
    });
    canvas.addEventListener('mouseleave', function(event) {
        isDrawing = false;
        previousX = 0;
        previousY = 0;
    });
    document.addEventListener('mousemove',function (event) {
        if (isDrawing) {
            currentX = event.clientX - canvas.offsetLeft;
            currentY = event.clientY - canvas.offsetTop;

            context.beginPath();
            context.moveTo(previousX, previousY);
            context.lineTo(currentX, currentY);
            context.stroke();

            previousX = currentX;
            previousY = currentY;
        }
        
    });
}
function clearCanvas(){
    currentX =0;
    currentY =0;
    previousX =0;
    previousY = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}