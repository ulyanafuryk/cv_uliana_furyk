$(function () {
	'use strict';
	console.log("ready!");

	$('#contact').submit(function (event) {
		$.ajax({
			url: "https://formspree.io/uljka@yahoo.com",
			method: "POST",
			data: {
				name: firstname.value,
				email: email.value,
				message: msg.value
			},
			dataType: "json"
		}).done(function () {
			$("#firstname").val("");
			$("#email").val("");
			$("#msg").val("");
			$('#form').html('<h1>Thank you!</h1>');
		});
		event.preventDefault();
	});
});


function scrollToId(whereToScroll) {
    $('html, body').animate({
        scrollTop: $(whereToScroll).offset().top
    }, 800);
    return true;
}

$(function () {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
})

$(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});