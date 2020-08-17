var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
canvas.Height = window.innerHeight;
canvas.Width = window.innerWidth;
var innerHeight = canvas.Height;
var innerWidth = canvas.Width;

 mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 50;
 
window.addEventListener("mousemove",function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  
})



var colorArr = [
  "#00bcd4",
  '#e3dfc8',
  "#900d0d",
  "#99b898",
  "#596e79",
  "#204051",
  "#ff9a76"
]


function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArr[Math.floor(Math.random()*7)]

  this.draw = () => {
   
    c.beginPath();
    c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    
  }
  this.update = () => {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // INTERACTIVITY
    if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50){
      if(this.radius<50)
      this.radius+=1;
      
    }else{
      if(this.radius>this.minRadius)
      this.radius-=1;
    }

    this.draw();
  }
}


var circleArr = [];


  for (var i = 0; i < 800; i++) {
  
    var radius = Math.random()*5+1;
    
    var x = Math.random() *(innerWidth-2*radius)+radius;
    var y = Math.random() *(innerHeight-2*radius)+radius;
  
   circleArr.push(new Circle(x, y, 2, 2, radius))
  }
  animate();







function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  for (var i = 0; i < 800; i++) {
    circleArr[i].update();
    
  }
  
}


