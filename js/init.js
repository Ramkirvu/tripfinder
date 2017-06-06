(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    $('select').material_select();
});

$('.carousel.carousel-slider').carousel({fullWidth: true});

// var options = [
//     {class: '.cir', offset: 200, callback: customCallbackFunc } },
//     {selector: '.cir', offset: 200, callback: function() {
//     customCallbackFunc();
// } },
// ];
// Materialize.scrollFire(options);