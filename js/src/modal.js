// modal.js

(function($){

  menuList = $('.menu_list');
  menuLi = menuList.find('a');
  modal = $('.modal_box');
  cancel = $('.cancel');
  timed = 600;

  menuLi.on('click',function(e){
    e.preventDefault();
    modal.fadeIn().timed;
  });

  cancel.on('click',function(e){
    e.preventDefault();
    modal.fadeOut().timed;
  });

})(jQuery);