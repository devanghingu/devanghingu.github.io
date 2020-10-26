$(document).ready(function(){
    var traX, traY;
    $(document).mousemove(function(e){
      traX = ((4 * e.pageX) / 570) + 40;
      traY = ((4 * e.pageY) / 570) + 50;
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });
  });
  
