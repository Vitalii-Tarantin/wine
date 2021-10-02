$('.wine__nav__list').each(function(){
  var actItem = $(this).find('.act');
  if(!actItem){
    return;
  }

  var line = $('<div class="actLine"></div>');
  $(this).append(line);

  var setLineCss = function(node){
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