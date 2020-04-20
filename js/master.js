$(".logo").addClass("font-logo2");
$(".logo-sub").addClass("font-logo1");
$(".main-navigator ul li").addClass("font-logo2");
$(".join").addClass("font-logo2");
$(".slider-content").addClass("font-article-title");
$(".segment-intro-style h2").addClass("font-article-title");
$(".trends-row").addClass("font-article-title");
$(".join-bbc form h2").addClass("font-logo2");
$(".join-bbc form h2 i").addClass("font-logo1");

// WARNING: ARTICLE
$(".article h3").addClass("font-article-title");
$(".article h6").addClass("font-logo1");
$(".article p").addClass("font-logo2");
$(".subscribe-bx form").addClass("font-logo2");


// WARNING: SLIDER
$(".trends-slider").hide();
$("#trends-slider-1").show();

// CONTROLS FOR SLIDER RESPONSE
$("#nxt-2").click(
  function(){
    $(".trends-slider").fadeOut();
    $("#trends-slider-2").fadeIn("fast");
  }
);
$("#bck-3").click(
  function(){
    $(".trends-slider").fadeOut();
    $("#trends-slider-3").fadeIn("fast");
  }
);

$("#nxt-3").click(
  function(){
    $(".trends-slider").fadeOut();
    $("#trends-slider-3").fadeIn("fast");
  }
);
$("#bck-1").click(
  function(){
    $(".trends-slider").fadeOut();
    $("#trends-slider-1").fadeIn("fast");
  }
);

$("#nxt-1").click(
  function(){
    $(".trends-slider").fadeOut();
    $("#trends-slider-1").fadeIn("fast");
  }
);
$("#bck-2").click(
  function(){
    $(".trends-slider").fadeOut();
    $("#trends-slider-2").fadeIn("fast");
  }
);
// ||CONTROLS FOR SLIDER RESPONSE


// WARNING: CONTROL FOR BE PART
function bePart(){
  $(".join-bbc").addClass("join-bbc-now");
  $(".join-bbc .fa-remove").fadeIn();
  $("body").css("overflow","hidden");
}
$(".join-bbc .fa-remove").click(
  function(){
    $(".join-bbc").removeClass("join-bbc-now");
    $(".join-bbc .fa-remove").fadeOut();
    $("body").css("overflow","auto");
  }
);

// WARNING: CONTROL FOR ACCEPTING INPUTS FOR MEMBERSHIP
function haveIG(){
  $(".social-media-input").hide();
  $(".social-media-input").slideDown();
  $(".indicator").css("background", "#dedede");
  $("#have-ig .indicator").css("background", "red");
}
function haveFB(){
  $(".social-media-input").hide();
  $(".social-media-input").slideDown();
  $(".indicator").css("background", "#dedede");
  $("#have-fb .indicator").css("background", "red");
}
