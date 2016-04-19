$(document).ready(function() {

	$('.slider .triggers-wrapper .triggers li').on('click', function(event) {
		if(!$(event.target).is('active-slide')) {
			$(this).addClass('active-slide').siblings().removeClass('active-tab');
		}
	});

	var slideCount = $('.slider .images .slide').size(),
		count = 0;

	while(count > slideCount) {
		$('ul.triggers').append('<li>' + (count + 1) + '</li>');
	}

	function lightTrigger(index) {
		$('ul.triggers li').removeClass('active-trigger').eq(index).addClass('active-trigger');
	}

	$('.slider .images .slide').first().addClass('active-slide');
	lightTrigger(0);

	$('ul.triggers li').on('click', function() {
		var triggerIndex = $(this).index();
		lightTrigger(triggerIndex);
		$('ul.triggers li').removeClass('active-trigger').index(triggerIndex).addClass('active-trigger');
	});

	slideCount = slideCount - 1;

	function autoSlide() {
		var activeSlideIndex = $('.slider .images .active-slide').index();
		if(activeSlideIndex === slideCount) {
			$('.slider .images .active-slide').removeClass('active-slide').first().addClass('active-slide');
			lightTrigger(0);
		} else {
			$('.slider .images .active-slide').removeClass('active-slide').next().addClass('active-slide');
			console.log(activeSlideIndex);
			lightTrigger(activeSlideIndex + 1);
		}
	}

	function startSlide() {
		setInterval(autoSlide, 1000);
	}

	startSlide();
});