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

$('.d2l-navigation-s-shadow-gradient').remove();