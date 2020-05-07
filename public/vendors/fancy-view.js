$(document).ready(function () {
  $.fancybox.defaults.animationEffect = "zoom";
  $.fancybox.defaults.transitionEffect = "slide";
  $.fancybox.defaults.buttons = [
    "zoom",
    "fullScreen",
    "download",
    "thumbs",
    "close",
  ];

  $('.grid').masonry({
    itemSelector: '.grid-item'
  });
  
  
});
