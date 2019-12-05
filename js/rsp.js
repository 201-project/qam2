'use stricts';
var username = prompt('Your name please?  🤘🏻');
var x = 0;
var y = 0;
// eslint-disable-next-line no-unused-vars
function rsp(a){

  if(a === 1)document.write(username + ':✊');
  if(a === 2)document.write(username + ':🤚');
  if(a === 3)document.write(username + ':✌️');

  document.write('</br>');

  var b = Math.floor((Math.random() * 3) + 1);
  if(b === 1) document.write('Bot:✊');
  if(b === 2) document.write('Bot:🤚');
  if(b === 3) document.write('Bot:✌️');

  if(a > b) document.write('</br>You win!!!');
  if(a < b) document.write('</br>Bot wins');
  if(a === b) document.write('</br>Draw');
  document.write('</br><input type=submit value=✊ onclick=rsp(1)><input type=submit value=🤚 onclick=rsp(2)><input type=submit value=✌️ onclick=rsp(3)>');
  if(a > b) x = x + 1;
  if( a < b) y = y + 1;
  document.write('</br>',x,':',y,'<hr>');
  // style in the javaScript flies
  document.write('<style>body{background:rgba(0, 0, 0, 0.219);}*{font-family:montserrat;font-size:24px;color:white;text-align:center;padding:0;text-shadow:0 0 30px white;}input{-webkit-appearance:none;border:1px solid rgba(255,255,255,1);background-color:rgba(255,255,255,0.3);border-radius:12px;width:50px;height:50px;text-align:center;margin:10px;box-shadow:0 0 80px white;}hr{border:1px solid rgba(0, 0, 0, 0.219);;border-radius:10px;}</style>');
  // this for scroll the screen
  window.scrollTo(0,document.body.scrollHeight);
}
