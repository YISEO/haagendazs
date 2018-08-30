// 브라우저 화면 scroll down


 (function($){
  var gnbMenu = $('.gnb_menu');
  var gnbMenuLi = gnbMenu.children('li');
  var timed = 1000;

   //$(window).animate({scrollTop:0},timed);
   $('html,body').animate({scrollTop:0},timed);
   var box = $('.box');
   var boxList = [];
   var boxLen = box.length;
   var j=0;
   
  var boxListFn = function() {
    $.each(box, function(index,value){
      boxList[index] = $(this).offset().top;
    });
  };
  boxListFn();

  var wH = $(window).outerHeight();
  $(window,document,'html,body').on('resize',function() {
      console.log('height resize');
    var nowH = $(window).outerHeight();
    if(wH !== nowH){
      $('html,body,#wrap').css({height:nowH});
      box.css({height:nowH});
      boxListFn();
      MyTop();
    }
  });
     console.log(boxList);
// ------------------------------------------------------------
  function MyTop() { 
    var ht = $('html').scrollTop();
    for(var l=0; l<boxList.length; l++){
      if(ht <= boxList[l]){
        j=l;
        break;
      }
    }
    $('html').stop().animate({scrollTop:boxList[j]}, 600, 'easeInQuad');
    // console.log(j);
  }; 
  gnbMenuLi.on('click',function() {
    setTimeout(function() {
      MyTop();
    },1);
  });
// ------------------------------------------------------------
  var go = true;

  // scroll btn 눌렀을 때 

    var scrollBtn = $('.scroll_btn');
    var introTop = $('#introBox').offset().top;

    scrollBtn.on('click', function(){
      j=1;
      $('html').stop().animate({scrollTop:boxList[j]}, 600, 'easeInQuad');
    });

    

     $('html').on('mousewheel DOMMouseScroll', function(e){
      e.preventDefault();
       var originE=e.originalEvent;
       var foxevt= originE.detial;
       var evt = originE.wheelDelta;
       var delta;

       var ht = $('html').scrollTop();
       // boxList[j]


      // firefox이벤트 확인
       if(foxevt){
         foxevt *= -40;
       }else if(evt){ 
         delta = evt;
       }
       // console.log(delta);

       var delta = evt;

       if(go == true) {
        go=false;
           if(delta <0){
             (j>= boxLen-1) ? j = boxLen-1 : j+=1;
           }else if(delta>0){           
             (j<=0) ? j=0: j-=1;
           }
       
       $('html').stop().animate({scrollTop:boxList[j]}, 600, 'easeInQuad',
         function(){

           setTimeout(function(){go=true;},500);
         });
       }

     });

     // 키보드로 제어하기
     
    $('body').css({overflow:'hidden'});
     var go2 = true;
     $('html,body').on('swipeUp swipeDown swipeLeft swipeRight swipe draged',function() {
      console.log('!!!');

     });
     $(window).on('keyup',function(e){
      e.preventDefault();
      var mykey = e.key.toLowerCase();
      console.log(e.key);
      if(go2){
        go2 = false;
        if(mykey == 'home'){
          j=0;
        }else if(mykey == 'end'){
          j=boxList.length-1;
        }else if(mykey == 'pageup' || mykey == 'arrowup' || mykey == 'arrowleft' || mykey == '-'){
          j -= 1;
        }else if(mykey == 'pagedown' || mykey == 'arrowdown' || mykey == 'arrowright' || mykey == ' ' || mykey == 'enter' || mykey == '+'){
          j += 1;
        }

      $('html,body').stop().animate({scrollTop:boxList[j]},600,function() {
        go2=true;
      });

      }
     });



 var ww = $(window).outerWidth();
 $(window).on('resize',function() {
  var nw = $(window).outerWidth();
  if(ww !== nw){
    location.reload();
  }
 });
     

 })(jQuery);