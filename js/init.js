

//MOBILE SIDEBAR
$(document).ready(function($){
    $(function() {
        $(".button-collapse").sideNav();
    });
});

//OFFSET SHOW
var options = [
    {   selector: '#brand', offset: 50,
        callback: function(el) {
            Materialize.fadeInImage($(el));
        }, }
];
Materialize.scrollFire(options);

var options = [
    {   selector: '#brand-name', offset: 100,
        callback: function(el) {
            Materialize.fadeInImage($(el));
        }, }
];
Materialize.scrollFire(options);

//CAROUSEL FOTO GALLERY
$('.carousel.carousel-slider').carousel({fullWidth: true});

//
$(document).ready(function() {
    $('select').material_select();
});




