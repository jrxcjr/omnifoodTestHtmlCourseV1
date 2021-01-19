$(document).ready(function(){


  /*sticky navigation script */
  $('.js--section-features').waypoint(function(direction){
    if (direction =="down") { 
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky')
    }
  }, {
    offset: '25%'
  }) /*end of sticky navigation script*/

  
  /*scroll on buttons*/
  $('.js--scroll-to-plans').click(function () {
    $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)});
 
    $('.js--scroll-to-start').click(function () {
      $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)});
 /*end of scroll on buttons */


  /*Animations on scroll 
    $('.js-wp1').waypoint(function(direction) {
        $('.js-wp1').addClass('animatedfadeIn');
      });
      
      
      CODE NOT USED, DEPRECATED FUNCTION ON THE COURSE*/
      


}); 