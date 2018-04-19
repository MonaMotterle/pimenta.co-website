$(function(){
  $.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});
});

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
      $("#menu").animate({width:'110vw', height:'110vh', left:'0'});}
  else if ($(window).width() <= 1000) {
      $("#menu").animate({width:'110vw', height:'110vh', left:'0'});}
  else {
      $("#menu").animate({width:'50vw'});}
    $("#close-menu, .cont-li").css('display', 'block');
    });
});
$(document).ready(function(){
  $("#close-menu, .cont-li").click(function(){
    if ($(window).width() <= 1000) {
      $("#menu").animate({left:'110%'});
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
