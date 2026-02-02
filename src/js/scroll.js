import Lenis from 'lenis';

export let lenis = null;

export function initSmoothScroll() {
	if (typeof Lenis === 'undefined') {
		console.warn('не загружен');
		return;
	}

	lenis = new Lenis({
		duration: 1.4,
		easing: (t) => 1 - Math.pow(1 - t, 3),
		// либо заменить на это
		// easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smooth: true,
		smoothTouch: false,
		touchMultiplier: 2,
		wheelMultiplier: 1,
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);

	// обработка якорных ссылок с учетом фиксированного меню
	document.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			if (targetId === '#') return;

			const menuHeight =
				document.querySelector('.header__menu')?.offsetHeight || 80;

			lenis.scrollTo(targetId, {
				duration: 1.8,
				offset: -menuHeight - 20,
			});

			document
				.querySelectorAll('.nav-link')
				.forEach((el) => el.classList.remove('active'));
			this.classList.add('active');
		});
	});
// это параллакс у секции
	lenis.on('scroll', ({ scroll }) => {
		const element = document.querySelector('.about__text');
		if (element) {
			element.style.transform = `translateY(-${scroll * 0.05}px)`;
		}
	});

	return lenis;
}
