$(document).ready(function(){
  $(".in").click(function(){
    $(".year").fadeToggle();
  })
});

$(document).ready(function(){
  $(".emg-2").click(function(){/*
    var a =$(".item-1").prop("className")
    var b =a.split(" ");
    alert(b[2]);*/
    $(".emg-2").addClass('bounce');
    $(".pao").animate({
      opacity:'1'
    },500,function(){
      $(".bubble-3").animate({
        opacity:'1'
      },500);
    });
    setTimeout(function(){
     $(".emg-2").removeClass('bounce');
     $(".bubble-3").animate({
       opacity:'0'
     });
     $(".pao").animate({
       opacity:'0'
     });
   }, 2500);
  });
});
