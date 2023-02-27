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

