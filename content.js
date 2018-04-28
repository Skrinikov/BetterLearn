var background = {'background:': '#000000'};
var text = {'color': '#fff'};

/*
    Removes the System Alert history tab since it is useless.
*/
$('.homepage-container').children('.homepage-col-8').children('div').first().remove();

/*
    Changes the image from the bar for a new one.
*/
$('a.d2l-navigation-s-logo-link').children('img').first().attr('src',chrome.runtime.getURL("assets/waterloo-learn.png"));

/*
    Removes gradient because it looks bad and is useless.
*/
$('.d2l-navigation-s-shadow-gradient').remove();
$('.d2l-twopanelselector-side-bg.d2l-twopanelselector-side-sep.d2l-repsonsive-collapse-layout').remove();

$('span.fa-times').click(function(){
    $('.homepage-col-4').children("div").first().fadeOut();
});