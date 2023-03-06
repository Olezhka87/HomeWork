$(function () {

	var mixer = mixitup('.directions__list');
})

$('.slider__team').slick({
	arrows: false,
	slidesToShow: 4,
	draggable: false,
	dots: true,
	variableWidth: true,
	autoplaySpeed: 2000,
	responsive:
		[
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					variableWidth: false,
				},
			},
			{
				breakpoint: 965,
				settings: {
					slidesToShow: 2,
					variableWidth: true,

				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
				},
			},
		]
})

$('.team__slider-prev').on('click', function (e) {
	e.preventDefault()
	$('.slider__team').slick('slickPrev')
})
$('.team__slider-next').on('click', function (e) {
	e.preventDefault()
	$('.slider__team').slick('slickNext')
})


$('.testimonials__slider').slick({
	arrows: false,
	dots: true,
	dotsClass: 'dots-testimonials',
	appendDots: $('.dots-testimonials'),
	responsive:
		[
			{
				breakpoint: 700,
				settings: {
				},
			},
		]
})


$('.testimonials-prev').on('click', function (e) {
	e.preventDefault()
	$('.testimonials__slider').slick('slickPrev')
})
$('.testimonials-next').on('click', function (e) {
	e.preventDefault()
	$('.testimonials__slider').slick('slickNext')
})

// $('.acc__item').on('click', function (e) {
// 	e.preventDefault()
// 	$(this).toggleClass('acc__link--active')
// 	$(this).children('.acc__text').slideToggle()
// })

$('.acc__item').on('click', function (e) {
	e.preventDefault()
	if ($(this).hasClass('acc__link--active')) {
		$(this).removeClass('acc__link--active')
		$(this).children('.acc__text').slideUp()
	} else {
		$('.acc__link').removeClass('acc__link--active')
		$('.acc__text').slideUp()
		$(this).addClass('acc__link--active')
		$(this).children('.acc__text').slideDown()
	}
})


$("#menu, .header__nav, .footer__links, .footer__bottom-inner, .header__nav-box, .header__buttons").on("click", "a", function (e) {

	//отменяем стандартную обработку нажатия по ссылке
	e.preventDefault();
	//забираем идентификатор бока с атрибута href
	var id = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
	//анимируем переход на расстояние - top за 1500 мс
	$('body,html').animate({ scrollTop: top }, 1000);
})

setInterval(() => {
	if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
		$('.burger').addClass('burger--follow')
	} else {
		$('.burger').removeClass('burger--follow')
	}
})

$('.burger, .overlay').on('click', function (e) {
	e.preventDefault();
	$('.header__top').toggleClass('header__top--open')
	$('.overlay').toggleClass('overlay--show')
	$('.burger').toggleClass('active')
})


$('.footer__title-slide').on('click', function () {
	$(this).next().slideToggle("slow")
})