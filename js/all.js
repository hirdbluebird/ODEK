$(document).ready(function() {

	//counts slides number
	var slideCount = $('.slider .images .slide').size(),
		count = 0;

	// adds trigger based on number of slides
	while(count < slideCount) {
		$('ul.triggers').append('<li></li>');
		count++;
	}

	//lights active trigger
	function lightTrigger(index) {
		$('ul.triggers li').removeClass('active-trigger').eq(index).addClass('active-trigger');
	}
	//adds active class to first slide when page loaded
	$('.slider .images .slide').first().addClass('active-slide');
	lightTrigger(0);

	//switch slide when trigger clicked
	$('ul.triggers li').on('click', function() {
		var triggerIndex = $(this).index();
		lightTrigger(triggerIndex);
		$('.images .slide').removeClass('active-slide').eq(triggerIndex).addClass('active-slide');
	});

	//based on difference between whole number of slides and slide index, which count starts from zero
	slideCount = slideCount - 1;

	//automatically switch active slide on next
	function autoSlide() {
		var activeSlideIndex = $('.slider .images .active-slide').index();
		if(activeSlideIndex === slideCount) {
			$('.slider .images .slide').removeClass('active-slide').first().addClass('active-slide');
			lightTrigger(0);
		} else {
			$('.slider .images .active-slide').removeClass('active-slide').next().addClass('active-slide');
			lightTrigger(activeSlideIndex + 1);
		}
	}

	function startSlide() {
		setInterval(autoSlide, 5000);
	}
	startSlide();

	//activate slide, when trigger clicked
	$('.slider .triggers-wrapper .triggers li').on('click', function(event) {
		if(!$(event.target).is('active-slide')) {
			$(this).addClass('active-slide').siblings().removeClass('active-tab');
		}
	});

	//moves slider and languages select to mainpage and header navigation menu

	function checkWidth() {
		var windowSize = $(window).width();
		if(windowSize < 746) {
			$('.slider').detach().prependTo('main');
			$('.languages-select').detach().prependTo('.navbar.navbar-default > .container')
					.children('.dropdown-menu').addClass('pull-right');		
		} else {
			$('.slider').detach().prependTo('body');
			$('.languages-select').detach().appendTo('.navbar-nav')
					.children('.dropdown-menu').removeClass('pull-right');
		}
	}
	checkWidth();

	$(window).resize(function() {
		checkWidth();
	})
});