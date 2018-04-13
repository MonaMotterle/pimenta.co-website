$(document).ready(function(){
  $("#menu-quem-somos").click(function(){
      $("#menu").animate({width:'0'});
      $("#close-menu, .cont-li").css('display', 'none');
      if ($(window).width() <= 750) {
        $("#quem-somos").animate({left:'0'});
        }
      else if ($(window).width() <= 1000){
        $("#quem-somos").animate({top:'10%', left:'0'});}
      else{
        $("#quem-somos").animate({top:'20%', left:'0'});
      }
    });
});

$(document).ready(function(){
  $("#menu-servicos").click(function(){
      $("#menu").animate({width:'0'});
      $("#close-menu, .cont-li").css('display', 'none');
      if ($(window).width() <= 750) {
        $("#servicos").animate({left:'0'});
        }
      else if ($(window).width() <= 1000){
        $("#servicos").animate({top:'10%', left:'0'});}
      else{
        $("#servicos").animate({top:'20%', left:'0'});
      }
    });
});

$(document).ready(function(){
  $("#menu-contato").click(function(){
      $("#menu").animate({width:'0'});
      $("#close-menu, .cont-li").css('display', 'none');
      if ($(window).width() <= 750) {
        $("#contato").animate({left:'0'});
        }
      else if ($(window).width() <= 1000){
        $("#contato").animate({top:'10%', left:'0'});}
      else{
        $("#contato").animate({top:'20%', left:'0'});
      }
    });
});

$(document).ready(function(){
  $("#botao-menu").click(function(){
  if ($(window).width() <= 750) {
      $("#quem-somos, #servicos, #contato").animate({left:'100%'});
      $("#menu").animate({width:'100vw', height:'100vh', left:'0'});}
  else if ($(window).width() <= 1000) {
      $("#quem-somos, #servicos, #contato").animate({top:'100%'});
      $("#menu").animate({width:'100vw', height:'100vh', left:'0'});}
  else {
      $("#quem-somos, #servicos, #contato").animate({top:'100%'});
      $("#menu").animate({width:'50vw'});}
    $("#close-menu, .cont-li").css('display', 'block');
    });
});
$(document).ready(function(){
  $("#close-menu").click(function(){
    if ($(window).width() <= 1000) {
      $("#menu").animate({left:'100%'});
    }
    else {
      $("#menu").animate({width:'0'});
    }

      $("#close-menu, .cont-li").css('display', 'none');
    });
});



// // MENU COM CANVAS
// $(document).ready(function(){
//   $("#botao-menu").click(function(){
//     var canvas = document.getElementById('myCanvas');
//     var ctx = canvas.getContext('2d');
//     var cx = 400;
//     var cy = 0;
//     var cr = 5;
//     var big = 1;
//
//     setInterval(function () {
//
//         grow();
//
//         draw();
//
//     }, 3);
//
// function grow() {
//     if (cr<=500){
//       cr += big
//     }
// }
//
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     ctx.arc(cx, cy, cr, 0, Math.PI * 2);
//     ctx.fillStyle = "#ff9700";
//     ctx.fill();
//     ctx.closePath();
// }
//
//   });
// });
