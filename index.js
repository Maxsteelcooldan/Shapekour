document.querySelector('#play-btn').addEventListener('click',()=>{
  document.querySelector('#home').style.display="none";
  document.querySelector('#game').style.display="block"
});
cnvs = document.querySelector('canvas');
yat = cnvs.getContext('2d');
