$("body").css("background-image","url(img/thx.jpg)");

//LOGO LEADS TO HOME PAGE
$("header .logo").click(
  function(){
    window.location.href='../';
  }
);


// WARNING: JOIN FROM ARTICLE
var spam = 0;
$(".what-you-think .join-bbc").hide();
function articleJoin(){
  window.location.href='#BEPART';
  $(".pxs hr").hide();
  $(".god-acc").hide();
  $(".trap-fans").hide();
  $(".robot-alert").hide();
  $(".what-you-think .join-bbc").fadeIn();
  $(".what-you-think .join-bbc form").addClass("article-bbc-join");

  $(".join-bbc-btn").prop('disabled', true);
  $(".join-bbc-btn").css("cursor","not-allowed");
}
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


$(".equate").on("change keyup",
  function(){
    spam = $(".equate").val();
    if (spam == 4) {
      $(".join-bbc-btn").prop('disabled', false);
      $(".join-bbc-btn").css("cursor","pointer");
      $(".robot-alert").hide();
    }else if (spam == "") {
      $(".join-bbc-btn").prop('disabled', true);
      $(".join-bbc-btn").css("cursor","not-allowed");
      $(".robot-alert").hide();
    }
    else {
      $(".robot-alert").show();
    }
  }
)



// WARNING: CHECKER VIEWPORT
$("body").on('scroll', function() {
    if ($('.v-search').isInViewport()) {
        // do something
        $("body").css("background-image","url(img/thx.png)");
        $("body").css("background-position-y","61px");
    }else if ($('.p1').isInViewport()) {
      $("body").css("background-image","url(img/thx.jpg)");
    }
    else {
        // do something else
    }

    if ($('.what-you-think').isInViewport()) {
        // do something
        $(".trap-btn").css("background-image","url(img/thx.png)");
    } else {
        // do something else
    }
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
