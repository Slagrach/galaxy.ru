$('#up, #up2').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});

$('.intro-banner').slick({
	nextArrow: $('.intro-left__control-next'),
	prevArrow: $('.intro-left__control-prev'),
	dots: true
})
$('.intro-miniSlider').slick({
	nextArrow: $('.intro-right__control-next'),
	prevArrow: false,
	dots: true
})

$('.sale-slider').slick({
	slidesToShow: 4,
	nextArrow: $('.sale-control__next'),
	prevArrow: $('.sale-control__prev'),
})

$('.new-slider').slick({
	slidesToShow: 4,
	nextArrow: $('.new-control__next'),
	prevArrow: $('.new-control__prev'),
})

$('.discount-slider').slick({
	slidesToShow: 4,
	nextArrow: $('.discount-control__next'),
	prevArrow: $('.discount-control__prev'),
})

$('.brands-slider').slick({
	slidesToShow: 5,
	nextArrow: $('.brands-control__next'),
	prevArrow: $('.brands-control__prev')
})

$('.news-slider').slick({
	prevArrow: $('.news-prev'),
	nextArrow: $('.news-next')
})

$('.news-slider__right').slick({
	prevArrow: $('.news-prev__right'),
	nextArrow: $('.news-next__right')
})


let hover = document.querySelector('.header-catalog');
let bodyStyle = document.querySelector('.header-modal');

hover.onmouseover = function () {
	bodyStyle.classList.add('active');
};

hover.onmouseout = function () {
	bodyStyle.classList.remove('active');
};

//-----------------------------------------------------------------------------

// window.onload = function () {
// 	const Popup = document.querySelector('.header-user');
// 	if (Popup) {
// 		Popup.addEventListener('onmouseover', showPopup, true);
// 	}
// }
//
// function showPopup() {
// 	const show = this.querySelector('.header-user'),
// 		popup = this.querySelector('.header-user__popup');
// 	if (show) {
// 		removeClass(popup, "active");
// 	} else {
// 		addClass(popup, 'active');
// 	}
// }

// let user = document.querySelector('.header-user');
// let userPopup = document.querySelector('.header-user__popup');
// user.onmouseover = function () {
// 	userPopup.classList.add('active');
// }
//
// userPopup.onmouseout = function () {
// 	userPopup.classList.remove('active');
// }


$('.header-user').mouseover(function () {
	$('.header-user__popup').addClass('active');
});

$('.header-user__popup').mouseout(function () {
	$('.header-user__popup').removeClass('active');
});

$(document).click(function (event) {
	if ($(event.target).closest(".header-user__popup").length) return;
	$(".header-user__popup").removeClass('active');
	event.stopPropagation();
});

//------------------------------------------------------------------------------------

let search = document.querySelector('.header-search__btn');
let searchPopup = document.querySelector('.header-search__choice');
search.onmouseover = function () {
	searchPopup.classList.add('active');
}
searchPopup.onmouseout = function () {
	searchPopup.classList.remove('active');
}

$('.header-search__btn').mouseover(function () {
	$('.header-search__choice').addClass('active');
});

$('.header-search__choice').mouseout(function () {
	$('.header-search__choice').removeClass('active');
});

$(document).click(function (event) {
	if ($(event.target).closest(".header-search__choice").length) return;
	$(".header-search__choice").removeClass('active');
	event.stopPropagation();
});

//Search
window.onload = function () {
	const search = document.querySelector(".header-search__input");
	if (search) {
		search.addEventListener('keyup', showButton, true);
		search.addEventListener('click', resetInput, true);
		search.addEventListener('click', showButton, true);
	}
}

function resetInput(e) {
	const input = this.querySelector('input');
	input.value = input.defaultValue;
}

function showButton() {
	const button = this.querySelector('button'),
		input = this.querySelector('input');
	if (input.value.length) {
		removeClass(button, "hidden");
	} else {
		addClass(button, 'hidden');
	}
}

function addClass(o, c) {
	const re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
	if (re.test(o.className)) return
	o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

function removeClass(o, c) {
	const re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
	o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

const clickInput = document.querySelector('.header-search__input-enter');
const imgNone = document.querySelector('.header-search__lens');
const btn = document.querySelector('.header-search__input-label');
clickInput.addEventListener('click', function () {
	imgNone.style.display = 'none';
	clickInput.addEventListener('keydown', function (e) {
		if ((e.keyCode === 27) || (e.keyCode === 13)) {
			// можете делать все что угодно со значением текстового поля
			e.preventDefault();
			e.currentTarget.value = '';
			imgNone.style.display = 'block';
			btn.addClass('.hidden');
		}
	});
})
btn.addEventListener('click', function () {
	imgNone.style.display = 'block';
})

//Add class header
window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
	if (screen.width <= 768) {
		header.classList.remove('sticky');
	}
});


let quantityButtons = document.querySelectorAll('.button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.sale-cost__box').querySelector('input').value);
			if (quantityButton.classList.contains('sale-cost__box-plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.sale-cost__box').querySelector('input').value = value;
		});
	}
}