
$(window).on("resize", sizeWindows);
$(window).on("load", sizeWindows)

function sizeWindows(){
    var windowheight = $('.window').height();
    var windowwidth = $('.window').width();
    $('.clock-shelf').css('height', windowheight / 1.26);
    $('.clock-shelf').css('width', windowwidth / 1.26);
}

$('.doorframe').on("mouseenter", function (){$('#door-prompt').slideDown(400, "swing")})
$('.doorframe').on("mouseleave", function (){$('#door-prompt').slideUp(400, "swing")})

$('#trim').on("mouseenter", function(){
    $("#reviews-left").text($("#reviews-left").text().replace("When you see Walt's Credentials... ", "★★★★★ Click to view Walt's Testimonials"));
    $("#reviews-right").text($("#reviews-right").text().replace("You'll KNOW you can TRUST MACK!", "Click to view Walt's Yelp Reviews ★★★★★"));
})

$('#trim').on("mouseleave", function(){
    $("#reviews-left").text($("#reviews-left").text().replace("★★★★★ Click to view Walt's Testimonials", "When you see Walt's Credentials... "));
    $("#reviews-right").text($("#reviews-right").text().replace( "Click to view Walt's Yelp Reviews ★★★★★", "You'll KNOW you can TRUST MACK!"));
})

var scrollTop = $(window).scrollTop(),  pageHeight = $( window ).height();
    elementOffset = $('#patio').offset().top,
    distance      = (pageHeight - elementOffset) + 30;

$('#patio').css({"height": distance, "top": elementOffset})