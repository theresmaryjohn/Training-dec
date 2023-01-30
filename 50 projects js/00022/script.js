//we bring in canvas first
const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 10;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  //x and y positioning
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
  });
  canvas.addEventListener("mousemove", (e) => {
   if(isPressed) {
    const x2 =e.offsetX
    const y2=e.offsetY
    drawCircle(x2,y2)
    drawLine(x,y,x2,y2)
    x=x2
    y=y2
   }
    
  });
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size*2;
  ctx.stroke();
}

function updateSizeOnScreen(){
    sizeEl.innerText=size
}
//we dont call it like this we want it when the pen moves
// drawCircle(100, 200);
// drawLine(300,300,300,500)

increaseBtn.addEventListener('click',()=>{
    size+=5
    if(size >50){
        size=50
    }
    updateSizeOnScreen()
})
decreaseBtn.addEventListener('click',()=>{
    size-=5
    if(size<5){
        size=5
    }
    updateSizeOnScreen()
})

colorEl.addEventListener('change',(e)=>color=e.target.value)


clearBtn.addEventListener('click',()=>ctx.clearRect(0,0,canvas.width, canvas.height))