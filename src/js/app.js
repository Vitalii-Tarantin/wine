//WOW
new WOW().init();

//Paralax
let scene1 = document.getElementById('scene1');
let parallaxInstance1 = new Parallax(scene1);
let scene2 = document.getElementById('scene2');
let parallaxInstance2 = new Parallax(scene2);
let scene3 = document.getElementById('scene3');
let parallaxInstance3 = new Parallax(scene3);

//Header line
$('.wine__nav__list').each(function(){
  let actItem = $(this).find('.act');
  if(!actItem){
    return;
  }

  let line = $('<div class="actLine"></div>');
  $(this).append(line);

  let setLineCss = function(node){
    line.css({
      width: parseInt(node.css('width')) / 2 + 'px',
      left: node[0].offsetLeft
    });
  };

  setLineCss(actItem);

  $(this).on('mouseenter', 'li', function(){
    setLineCss($(this));
  });

  $(this).on('mouseleave', function(){
    setLineCss(actItem);
  });
});

//Smooth scroll
$('.wine__nav__list a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('.burger')[0].classList.remove('change')
      $('header .navbar-collapse').collapse('hide');
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
// Swiper slider
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 1.8,
  spaceBetween: 40,
  centeredSlides: true,
});

function changeClass(x) {
  x.classList.toggle("change");
}