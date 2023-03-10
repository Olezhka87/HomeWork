document.addEventListener('DOMContentLoaded', function() {
  // конечная дата, например 1 июля 2021
  const deadline = new Date(2023, 12, 31);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;

    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;

    $days.dataset.title = declensionNum();
    $hours.dataset.title = declensionNum();
    $minutes.dataset.title = declensionNum();

  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');

  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
	
	// $(window).scroll(function(){
	// 	var sticky = $('.header__menu'),
	// 			scroll = $(window).scrollTop();
	
	// 	if (scroll >= 100) sticky.addClass('fixed');
	// 	else sticky.removeClass('fixed');
	// });


$('.reviews__slider').slick({
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
});