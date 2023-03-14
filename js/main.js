$('.reviews__slider').slick({
  dots: true,
	arrows: false,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.reviews__slider-prev').on('click', function (e) {
	e.preventDefault()
	$('.reviews__slider').slick('slickPrev')
})
$('.reviews__slider-next').on('click', function (e) {
	e.preventDefault()
	$('.reviews__slider').slick('slickNext')
})


$('.order__slider').slick({
  dots: true,
	arrows: false,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.order__slider-prev').on('click', function (e) {
	e.preventDefault()
	$('.order__slider').slick('slickPrev')
})
$('.order__slider-next').on('click', function (e) {
	e.preventDefault()
	$('.order__slider').slick('slickNext')
})

$('.gift__slider').slick({
  dots: true,
	arrows: false,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.gift__slider-prev').on('click', function (e) {
	e.preventDefault()
	$('.gift__slider').slick('slickPrev')
})
$('.gift__slider-next').on('click', function (e) {
	e.preventDefault()
	$('.gift__slider').slick('slickNext')
})

$('.sert__slider').slick({
  dots: true,
	arrows: false,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.sert__slider-prev').on('click', function (e) {
	e.preventDefault()
	$('.sert__slider').slick('slickPrev')
})
$('.sert__slider-next').on('click', function (e) {
	e.preventDefault()
	$('.sert__slider').slick('slickNext')
})

$('.contact__slider').slick({
  dots: true,
	arrows: false,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.contact__slider-prev').on('click', function (e) {
	e.preventDefault()
	$('.contact__slider').slick('slickPrev')
})
$('.contact__slider-next').on('click', function (e) {
	e.preventDefault()
	$('.contact__slider').slick('slickNext')
})



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

});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

