$( document ).ready(function() {
	var front = new Swiper(".main-image-slider", {
		spaceBetween: 0,
		effect: "fade",
		autoplay: true,
		fadeEffect: {
			crossFade: true,
		},
	});
	const width = window.innerWidth;
	console.log(width);
		if (width > 768){
		var offers = new Swiper(".offers-slider:not(.disabled)", {
			spaceBetween: 33,
			slidesPerView: 3,
			loop: true,
			navigation: {
				nextEl: '.slider-next',
				prevEl: '.slider-prev',
			},
		});
	}
	var roomsFirst = new Swiper(".room-slider.first", {
		spaceBetween: 0,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.slider-next.first',
			prevEl: '.slider-prev.first',
		},
		pagination: {
			el: '.room-slider__pagination.first',
			clickable: true,
		},
	});
	var roomsSecond = new Swiper(".room-slider.second", {
		spaceBetween: 0,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.slider-next.second',
			prevEl: '.slider-prev.second',
		},
		pagination: {
			el: '.room-slider__pagination.second',
			clickable: true,
		},
	});
	var roomsThird= new Swiper(".room-slider.third", {
		spaceBetween: 0,
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.slider-next.third',
			prevEl: '.slider-prev.third',
		},
		pagination: {
			el: '.room-slider__pagination.third',
			clickable: true,
		},
	});




	window.addEventListener('scroll', function() {
		var header = $('.main-page .header');
		var engine = $('.main-page .engine');

		if (window.pageYOffset > 10) {
			header.addClass('filed');
			engine.addClass('fixed');
		} else {
			header.removeClass('filed');
			engine.removeClass('fixed');
			if($('body').hasClass("main-page")){
				$(".main-menu-container").removeClass("opened");
				$(".burger-btn").removeClass("open");
				$(".header .booking-form").removeClass("hidden");
			}
			$(".main-menu-mobile").removeClass("opened");
			$(".overlay").removeClass("visible");
		}
	});

	$(".burger-btn").on("click", function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$(".main-menu-mobile").toggleClass("opened");
		$(".main-menu-container").toggleClass("opened");
		$(".header .booking-form").toggleClass("hidden");
		$(".overlay").toggleClass("visible");
		$(this).toggleClass("open");
	})

	$(".more-offers").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("rotate");
		$( ".mobile-hide" ).each(function( index ) {
			$(this).slideToggle("slow");
		});
	});
	$(".more-images").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("rotate");
		$( ".gallery__row-wrapper.hidden" ).each(function( index ) {
			$(this).slideToggle("slow");
		});
	});
	$( ".room-amenities-dropdown" ).each(function( index ) {
		$(this).on("click", function(e){
			e.preventDefault();
			$(this).toggleClass("open");
			$(this).next(".room-amenities-dropdown-content").slideToggle("fast");
		});
	});

	AOS.init();
});