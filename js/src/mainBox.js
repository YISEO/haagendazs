// mainBox.js
(function(e){

  var gnb = $('.gnb_btn');
  var gnbBtn = gnb.children('button');
  var gnbMenu = $('.gnb_menu');
  var gnbMenuLi = gnbMenu.children('li');
  var gnbWrap = $('.gnb_wrap');
  var winH = $(window).outerWidth();
  var mySize = winH*4;
  gnbMenu.hide();
  gnbMenu.find('a').hide();

  gnbWrap.css({width:mySize, height:mySize, borderRadius:mySize,  top:'60px', left:'60px' , marginLeft:-mySize/2, marginTop:-mySize/2, transform:'scale(0)', display:'none'});

  // gnb menu 나타나게 하기
  gnbBtn.on('click',function(){     
     var on = gnb.hasClass('on');
     if(on){
      gnb.removeClass('on');
      gnbMenu.find('a').stop().slideUp(function(){ 
      gnbMenu.hide();
      });
      gnbWrap.css({transform:'scale(0)', transition:'all 600ms ease-in'});
     }else{
      gnb.addClass('on');
      gnbMenu.show();
      gnbMenu.find('a').stop().delay(300).slideDown();
      gnbWrap.show();
      gnbWrap.css({transform:'scale(1)', transition:'all 600ms ease-out'});      
     };

  });

  gnbMenuLi.on('click',function(e){
    gnb.removeClass('on');
      gnbMenu.find('a').stop().slideUp(function(){ 
      gnbMenu.hide().delay(300);
      });
      gnbWrap.css({transform:'scale(0)', transition:'all 600ms ease-in'});

  });

  // 동영상 재생 및 정지버튼 동작

  var videoBtn = $('.video_btn');
  var video = $('.video_wrap').children('video');

  videoBtn.on('click',function(){
    var on = videoBtn.hasClass('on')
    if(on){
      videoBtn.removeClass('on');
      video.trigger('play');
    }else{
      videoBtn.addClass('on');
      video.trigger('pause');
    }
  });



})(jQuery);



