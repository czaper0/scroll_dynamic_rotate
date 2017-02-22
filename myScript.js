var $rotateZ = $('#rotateZ');
var $rotateX = $('#rotateX');
var $rotateY = $('#rotateY');
var $rotate_full = $('#rotate_full');
var $footer = $('#footer');
var $win = $(window);

$win.on('scroll', function () {
  var top = 40+$win.scrollTop()*0.3;
  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  var foot = scrollBottom*0.45;
  $rotateZ.css('transform', 'rotate(' + top + 'deg)');
  $rotateX.css('transform', 'perspective(500px) rotateX(' + top + 'deg)');
  $rotateY.css('transform', 'perspective(500px) rotateY(' + top + 'deg)');
  $rotate_full.css('transform', 'perspective(500px) rotateX(-' + top + 'deg) rotateY(-' + top + 'deg) rotateZ(' + top + 'deg)');
  if(scrollBottom<200)$footer.css('transform', 'perspective(500px) rotateX(' + foot + 'deg) translateY(-200px)');
});
