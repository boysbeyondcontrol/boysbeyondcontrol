$("body").css("background-image","url(img/thx.jpg)");

//LOGO LEADS TO HOME PAGE
$("header .logo").click(
  function(){
    alert("Home");
    window.location.href='../';
  }
);


// WARNING: JOIN FROM ARTICLE
$(".what-you-think .join-bbc").hide();
function articleJoin(){
  $(".god-acc").hide();
  $(".trap-fans").hide();
  $(".what-you-think .join-bbc").fadeIn();
  $(".what-you-think .join-bbc form").addClass("article-bbc-join");
}










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
