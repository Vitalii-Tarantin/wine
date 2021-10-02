// $('.mainMenu').each(function(){
//   var actItem = $(this).find('.current-menu-item');
//   if(!actItem){
//     return;
//   }
//
//   var line = $('<div class="actLine"></div>');
//   $(this).append(line);
//
//   var setLineCss = function(node){
//     line.css({
//       width: node.css('width'),
//       left: node[0].offsetLeft
//     });
//   };
//
//   //setLineCss(actItem);
//
//   $(this).on('mouseenter', 'li:not(.pll-parent-menu-item, .lang-item)', function(){
//     setLineCss($(this));
//   });
//
//   $(this).on('mouseleave', function(){
//     setLineCss(actItem);
//   });
// });