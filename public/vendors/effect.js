//start for back to top function
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("._b2t").fadeIn();
  } else {
    $("._b2t").fadeOut();
  }
});
$(document).ready(function () {
  $("._b2t").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 228);
    return false;
  });
});

//hover jtip
$(".something").bind("mousemove", function (e) {
  $("#tail").css({
    left: e.pageX + 20,
    top: e.pageY,
  });
});

$(".something").bind("mouseleave", function (e) {
  $("#tail").css({
    display: "none",
  });
});
$(".something").bind("mouseenter", function (e) {
  $("#tail").css({
    display: "block",
  });
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  currentScrollPos < 42
    ? (document.getElementById("navbar").style.top = "0px")
    : prevScrollpos > currentScrollPos
    ? (document.getElementById("navbar").style.top = "0px")
    : (document.getElementById("navbar").style.top = "-42px");
  prevScrollpos = currentScrollPos;
};


