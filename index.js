document.querySelector('#play-btn').addEventListener('click',()=>{
  document.querySelector('#home').style.display="none";
  document.querySelector('#game').style.display="block"
});
cnvs = document.querySelector('canvas');
yat = cnvs.getContext('2d');
function rect(x, y, width, height, color) {
  this.width = width || 50;
  this.height = height || 50;
  this.x = x || 0;
  this.y = y || 0; 
  this.color = color || 'black';
  yat.fillStyle = color;
  yat.fillRect(this.x, this.y, this.width, this.height);
}
