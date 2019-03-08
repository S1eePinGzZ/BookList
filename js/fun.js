$(document).ready(function(){
  $(".item-1").click(function(){/*
    var a =$(".item-1").prop("className")
    var b =a.split(" ");
    alert(b[2]);*/


     $(".item-1").removeClass('rotateInDownRight');
     $(".bubble-1").animate({
       top:'-80px',
       opacity:'1'
     });
      $(".item-1").addClass('rubberBand');
      setTimeout(function(){
       $(".item-1").removeClass('rubberBand');
       $(".bubble-1").animate({
         top:'0px',
         opacity:'0'
       });
     }, 2000);
  });
});

$(document).ready(function(){
  $(".item-2").click(function(){/*
    var a =$(".item-1").prop("className")
    var b =a.split(" ");
    alert(b[2]);*/
     $(".item-2").removeClass('rotateInDownLeft');
     $(".bubble-2").animate({
       left:'-230px',
       opacity:'1'
     });
      $(".item-2").addClass('rubberBand');
      setTimeout(function(){
       $(".item-2").removeClass('rubberBand');
       $(".bubble-2").animate({
         left:'0px',
         opacity:'0'
       });
     }, 2000);
  });
});

$(document).ready(function(){
  $(".item-3").click(function(){/*
    var a =$(".item-1").prop("className")
    var b =a.split(" ");    rotateInUpLeft
    alert(b[2]);*/
     $(".item-3").removeClass('rotateInUpRight');
     $(".bubble-3").animate({
       left:'200px',
       opacity:'1'
     });
      $(".item-3").addClass('rubberBand');
      setTimeout(function(){
       $(".item-3").removeClass('rubberBand');
       $(".bubble-3").animate({
         left:'0px',
         opacity:'0'
       });
     }, 2000);
  });
});

$(document).ready(function(){
  $(".item-4").click(function(){/*
    var a =$(".item-1").prop("className")
    var b =a.split(" ");
    alert(b[2]);*/
     $(".item-4").removeClass('rotateInUpLeft');
     $(".bubble-4").animate({
       left:'200px',
       opacity:'1'
     });
      $(".item-4").addClass('rubberBand');
      setTimeout(function(){
       $(".item-4").removeClass('rubberBand');
       $(".bubble-4").animate({
         left:'0px',
         opacity:'0'
       });
     }, 2000);
  });
});
