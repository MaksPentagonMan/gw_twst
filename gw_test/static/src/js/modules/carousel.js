
export function initSwiper() {
	const sliderNode = document.querySelector('.main-slider');
	if (!sliderNode) return;
	
	const swiper = new Swiper('.main-slider', {
		direction: 'horizontal',
		loop: true,
		speed: 800,
		
		effect: 'slide',

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
}