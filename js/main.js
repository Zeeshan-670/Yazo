(function ($) {
	"use strict";

	/*===========================================

                        Header

    =============================================*/

	// Header Sticky
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 120) {
			$('.navbar-area').addClass("is-sticky");
		} else {
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Others Option Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function () {
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});


	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});

	/*===========================================

                       FAQ

    =============================================*/

	// Tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
			tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

	// FAQ Accordion
	$(function () {
		$('.accordion').find('.accordion-title').on('click', function () {
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');
		});
	});

	/*===========================================

                       Testimonial

    =============================================*/

	// testimonial-carousel 
	$('.testimonial-carousel').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		dots: true,
		smartSpeed: 500,
		autoplay: false,
		navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"]
	});

	// testimonial-carousel-2	
	$('.testimonial-carousel-2').owlCarousel({
		loop: true,
		items: 3,
		nav: false,
		dots: false,
		smartSpeed: 500,
		autoplay: false,
		margin: 30,
		responsive: {
			320: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3
			}
		}
	});

	// testimonial-carousel-1 
	$('.testimonial-carousel-1').owlCarousel({
		loop: true,
		items: 5,
		nav: false,
		dots: true,
		smartSpeed: 500,
		autoplay: false,
		margin: 30,
		autoHeight: true,
		responsive: {
			320: {
				items: 1,
			},
			767: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1025: {
				items: 4,
			},
			1440: {
				items: 5,
			}
		}
	});

	// testimonial-carousel-4 
	$('.testimonial-carousel-4').owlCarousel({
		loop: true,
		items: 1,
		nav: false,
		dots: true,
		smartSpeed: 800,
		autoplay: false,
		thumbs: true,
		animateIn: 'flipInX'
	});

	/*===========================================

                    Nice Select JS

    =============================================*/

	$('select').niceSelect();

	/*===========================================

	                    Preloader

	=============================================*/

	$(window).on("load", function () {
		$("#status").fadeOut();
		$("#preloader").delay(10000000000000000000000000000000000).fadeOut("slow");
		$("body").delay(1000000000000000000000000000000).css({
			overflow: "visible",
		});
	});


	/*===========================================

	                Parallax

	=============================================*/

	$(".scene").each(function () {
		new Parallax($(this)[0], {
			relativeInput: true,
		});
	});

	/*===========================================

	                Back to top

	=============================================*/

	// Scroll Event
	$(window).on('scroll', function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});

	// Click Event
	$('.go-top').on('click', function () {
		$("html, body").animate({
			scrollTop: "0"
		}, 100);
	});

})(jQuery);