$(document).ready(function(){
  $(".book1").mouseover(function(){
    $(".book1").removeClass("bounceInDown");
    $(".book1").stop(true);
    $(".book1").addClass("pulse");
  })
});

$(document).ready(function(){
  $(".book1").click(function(){
  $(".books-list").css("opacity",0);
  $(".outer1").fadeIn();
  })
});


$(document).ready(function(){
  $(".rb").click(function(){
  $(".rb").addClass("shake");
  setTimeout(function(){
  $(".rb").removeClass("shake");
}, 1000);
  })
});
$(document).ready(function(){
  $(".book2").click(function(){
  $(".books-list").css("opacity",0);
  $(".outer2").fadeIn();
  })
});

$(document).ready(function(){
  $(".book3").click(function(){
  $(".books-list").css("opacity",0);
  $(".outer3").fadeIn();
  })
});

$(document).ready(function(){
  $(".btn").click(function(){
  $(".more-1").fadeIn();

  })
});


$(document).ready(function(){
  $(".btn-2").click(function(){
  $(".more-2").fadeIn();

  })
});

$(document).ready(function(){
  $(".btn-3").click(function(){
  $(".more-3").fadeIn();

  })
});

$(document).ready(function(){
  $(".what1-1").mouseover(function(){
      $(".cm1-1").fadeIn();
      $(".what1-1").addClass('rubberBand');
  });
});
$(document).ready(function(){
  $(".what1-1").mouseout(function(){
          $(".cm1-1").stop(true);
      $(".cm1-1").fadeOut();
      $(".what1-1").removeClass('rubberBand');
  });
});


$(document).ready(function(){
  $(".what1-2").mouseover(function(){
      $(".cm1-2").fadeIn();
      $(".what1-2").addClass('rubberBand');
  });
});
$(document).ready(function(){
  $(".what1-2").mouseout(function(){
      $(".cm1-2").stop(true);
      $(".cm1-2").fadeOut();
      $(".what1-2").removeClass('rubberBand');
  });
});

$(document).ready(function(){
  $(".what1-3").mouseover(function(){
      $(".cm1-3").fadeIn();
      $(".what1-3").addClass('rubberBand');
  });
});
$(document).ready(function(){
  $(".what1-3").mouseout(function(){
          $(".cm1-3").stop(true);
      $(".cm1-3").fadeOut();
      $(".what1-3").removeClass('rubberBand');
  });
});

$(document).ready(function(){
  $(".bac-out").click(function(){
  $(".outer").fadeOut();
  setTimeout(function(){
   $(".books-list").css("opacity",1);
 }, 400);

  })
});

$(document).ready(function(){
  $(".bac-1").click(function(){
  $(".more-1").fadeOut();
  })
});

$(document).ready(function(){
  $(".bac-2").click(function(){
  $(".more-2").fadeOut();
  })
});

$(document).ready(function(){
  $(".bac-3").click(function(){
  $(".more-3").fadeOut();
  })
});

$(document).ready(function(){
  $(".book1").mouseout(function(){
    $(".book1").removeClass("pulse");
  })
});

$(document).ready(function(){
  $(".book2").mouseover(function(){
    $(".book2").removeClass("bounceInDown");
    $(".book2").stop(true);
    $(".book2").addClass("pulse");
  })
});

$(document).ready(function(){
  $(".book2").mouseout(function(){
    $(".book2").removeClass("pulse");
  })
});


$(document).ready(function(){
  $(".book3").mouseover(function(){
    $(".book3").removeClass("bounceInDown");
    $(".book3").stop(true);
    $(".book3").addClass("pulse");
  })
});

$(document).ready(function(){
  $(".book3").mouseout(function(){
    $(".book3").removeClass("pulse");
  })
});
