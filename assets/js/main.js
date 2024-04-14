(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});



	/*=========================
	HERO SLIDER JS
	===========================*/
	function heroSlider() {
		var BasicSlider = $('.hero-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.hero-slide:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
			fade: true,
			arrows: false,
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();


	/*=========================
	product-slider
	===========================*/
	$('.product-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	/*=========================
	testimony-slider
	===========================*/
	$('.testimony-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      let next_slick_img = $('.testimony-slider .slick-current').next().find('.testimony-img img').attr("src")
      let prev_slick_img = $('.testimony-slider .slick-current').prev().find('.testimony-img img').attr("src")

      $('.testiomny-nav-next .testimony-img img').attr("src", next_slick_img);
      $('.testiomny-nav-prev .testimony-img img').attr("src", prev_slick_img);
  });

	$('.testimony-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '.testiomny-nav-prev',
		nextArrow: '.testiomny-nav-next',
	});


	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	$('.pop-img-btn').magnificPopup({
		type: 'image'
	});
	$('.footer-gallery a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		}
	});

	
   // niceSelect
   $("select").niceSelect();


	// reponsive menu
	const resBar = document.querySelectorAll('.humberger-bar, .resonsive-slide, .resonsive-slide-overlay')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
		})
	});

	// sticky
	var wind = $(window);
	var sticky = $('.header-area');
	var headerTop = document.querySelectorAll('.header-top');
	headerTop.forEach(element => {
		element.style.maxHeight = element.scrollHeight + 'px'
	});
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
			headerTop.forEach(element => {
				element.style.maxHeight = element.scrollHeight + 'px'
			});
		} else {
			sticky.addClass('sticky');
			headerTop.forEach(element => {
				element.style.maxHeight = 0
			});
		}
	});

	// hero/header
	const heroArea = document.querySelectorAll('.hero-area')
	heroArea.forEach(hero => {
		hero.style.paddingTop = document.querySelector('.header-area').getBoundingClientRect().height + 'px'
	});


	// custom tab
	tabFunc(document.querySelectorAll('.feature-link'), document.querySelectorAll('.feature-tab'))

	function tabFunc(tabLinks, tabs) {
		tabLinks.forEach((link, index) => {
			link.addEventListener('click', ()=>{
				for (let i = 0; i < tabLinks.length; i++) {
					tabLinks[i].classList.remove('active')
					tabs[i].classList.remove('active')
				}
				link.classList.add('active')
				tabs[index].classList.add('active')
			})
		});
	}
	
	
		
	// One Page Nav
	var top_offset = $('.header-area').height() - 150;
	$('.mainmenu ul, .responsive-menu ul').onePageNav({
		scrollOffset: top_offset,
	});

	// backToTop
	const backToTop = document.querySelectorAll('.back-to-top')
	backToTop.forEach(btn => {
		btn.addEventListener('click', ()=>{
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0; 
		})
	});


	// skrollr activation
	var s = skrollr.init({
		forceHeight: false,
		smoothScrollingDuration: 500,
	});
	if (s.isMobile()) {
			s.destroy();
	}


	
})(jQuery);