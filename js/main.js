$ (function(){
    'use strict';
    //adjust height window
    var winh =$(window).height(),
    upperh   =$('.upper-bar').innerHeight(),
    navh     =$('.navbar').innerHeight();
    
    
   $('.slider ,.carousel-item').height(winh-upperh-navh);
   
   
   //FEATURED WORK SHUFFLE
   $('.featured-work ul li').on('click',function() {
     $(this).addClass('active').siblings().removeClass('active');
     if($(this).data('class')==='All'){
      $('.shuffle-imgs .col-md').css('opacity',1);
      
   } else{ $('.shuffle-imgs .col-md').css('opacity','0.06');
            $($(this).data('class')).parent().css('opacity',1); }
}); 
}); 