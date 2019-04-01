var game;
document.querySelector('#play-btn').addEventListener('click',()=>{
  document.querySelector('#home').style.display="none";
  document.querySelector('#game').style.display="block";
  game = setInterval(levels[0], 30);
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
var player_x = 10;
var player_y = 10;
var player = new rect(player_x, player_y, 40, 40, 'red');
var ob = [new rect(100,180,100,25,'#63615b'),new rect(0,40,150,20, '#63615b')];
var moveright = true;
var levels = [()=>{
  yat.clearRect(0, 0, 600, 500);
  if(moveright){ob[0].x+=4}
  else{ob[0].x-=4}
  if(ob[0].x>=cnvs.width-50){moveright=false}
  else if (ob[0].x<=50){moveright=true}
  player.refresh();
  ob.forEach((index)=>index.refresh());
}]
