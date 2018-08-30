// landing.js
var landing = function(){
(function($){

  var box = $('.box');
  var boxH2 = box.children('h2');
  var boxP = box.children('.show');
  var boxLeng = box.length;
  var boxLengTop = [];



  // unb영역 색상 바꾸기


  // console.log(boxP[0]);
  // console.log(boxLeng);
  for(var i = 0; i < boxLeng; i++){
    boxLengTop[i] = box.eq(i).offset().top;
  }

  // var boxTop = box.offset().top;

  var nowTop = $(window).scrollTop();
  // console.log(boxLengTop);
  var Landing = function() {
    for(var j = 0 ; j < boxLeng; j++){
       if(boxLengTop[j] <= nowTop) {
        boxH2.removeClass('land');
        boxP.removeClass('land');
        boxH2.eq(j).addClass('land');
        boxP.eq(j).addClass('land');
        // box.eq(j).animate({backgroundSize:'105%'},1000);
      }else{
        boxH2.eq(j).removeClass('land');
        boxP.eq(j).removeClass('land');
      }
    }
  };
  Landing();

  $(window).on('scroll',function(e){
    nowTop = $(window).scrollTop();
    Landing();
  });

})(jQuery);

};

landing();