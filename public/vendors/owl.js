$(document).ready(function () {
  var owl = $('.slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });
});
