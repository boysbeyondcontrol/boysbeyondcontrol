
var article_comment = 0;
if (article_comment  == 1) {
  alert("Yeah one");
  $(".subscribe-bx").show();
} else {
  $(".subscribe-bx").hide();

}

if ($(window).width<602) {
  setTimeout(
    function(){
      alert("UUU");
      $(".article-bx").css("background-position-x",'-246px');
    }, 3000
  );
}
