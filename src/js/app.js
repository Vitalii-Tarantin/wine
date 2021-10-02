//WOW
new WOW().init();

//Paralax
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

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
      width: node.css('width'),
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