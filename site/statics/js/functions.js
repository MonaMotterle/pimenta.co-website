$(document).ready(function(){
  $("#menu-quem-somos").click(function(){
      $("#menu").css('width', '0');
      $("#close-menu, .cont-li").css('display', 'none');
      if ($(window).width() >= 750) {
        $("#quem-somos").animate({top:'20%'});
      }else{
        $("#quem-somos").animate({left:'0'});
      }
    });
});

$(document).ready(function(){
  $("#menu-servicos").click(function(){
      $("#menu").css('width', '0');
      $("#close-menu, .cont-li").css('display', 'none');
      if ($(window).width() >= 750) {
        $("#servicos").animate({top:'20%'});
      }else{
        $("#servicos").animate({left:'0'});
      }
    });
});

$(document).ready(function(){
  $("#menu-contato").click(function(){
      $("#menu").css('width', '0');
      $("#close-menu, .cont-li").css('display', 'none');
      if ($(window).width() >= 750) {
        $("#contato").animate({top:'20%'});
      }else{
        $("#contato").animate({left:'0'});
      }
    });
});

$(document).ready(function(){
  $("#botao-menu").click(function(){
  if ($(window).width() >= 750) {
      $("#quem-somos, #servicos, #contato").css({top:'100%'});
      $("#menu").css({width:'50vw'});}
  else {
      $("#quem-somos, #servicos, #contato").css({left:'100%'});
      $("#menu").css({width:'100vw', height:'100vh', left:'0'});}
    $("#close-menu, .cont-li").css('display', 'block');
    });
});
$(document).ready(function(){
  $("#close-menu").click(function(){
      $("#menu").css('width', '0');
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
