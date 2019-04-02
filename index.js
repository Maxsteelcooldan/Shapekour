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
var player = new rect(25, 25, 25, 25, 'red');
var ob = [new rect(100,180,100,25,'grey'),new rect(0,50,150,20, 'grey'), new rect(0,500,1200,40,'grey'),new rect (700,420,900,25,'gray'), new rect (150,400,20,200,'grey'), new rect (250,366,20,134,'grey')];
var moveright = true;
var levels = [()=>{
  yat.clearRect(0, 0, 600, 500);
  if(moveright){ob[0].x+=4}
  else{ob[0].x-=4}
  if(ob[0].x>=cnvs.width-50){moveright=false}
  else if (ob[0].x<=50){moveright=true}
  player.refresh();
  ob.forEach((index)=>index.refresh());
}];

key={}
document.onkeypress=(e)=>key[e.key.toLowerCase()]=e.type=true;
document.onkeyup=(e)=>key[e.key.toLowerCase()]=false;
setInterval(()=>{
  if(key['w']){
    //W is pressed  
  }if(key['control']){
    //Control is presed    
  }
}, 15);
