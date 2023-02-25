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

