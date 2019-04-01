var game;
document.querySelector('#play-btn').addEventListener('click',()=>{
  document.querySelector('#home').style.display="none";
  document.querySelector('#game').style.display="block";
  game = setInterval(everything, 30);
});
cnvs = document.querySelector('canvas');
yat = cnvs.getContext('2d');
function rect(x, y, width, height, color) {
  this.width = width || 50;
  this.height = height || 50;
  this.x = x || 0;
  this.y = y || 0; 
  this.color = color || 'black';
  (this.refresh = ()=>{
    yat.save();
    yat.translate(this.x, this.y); 
    yat.rotate(this.angle);
    yat.fillStyle = color;
    yat.fillRect(this.width/-2,this.height/-2,this.width,this.height); 
    yat.restore(); 
  })();
}
var player = new rect(10, 10, 40, 40, 'red');
var d = new rect(100,100,100,100,'grey');
var moveright = true;
var everything = ()=>{
  yat.clearRect(0, 0, 600, 500);
  if (moveright) {d.x++}
  else {d.x--}
  if(d.x>=cnvs.width-50){moveright=false}
  else if (d.x===50){moveright=true}
  player.refresh();
  d.refresh();
}
