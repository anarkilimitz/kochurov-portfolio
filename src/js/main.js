import { initSmoothScroll, lenis } from './scroll.js';
import { initCustomCursor } from './cursor.js';
import { initMenu } from './menu';
import { initHeroImage } from './heroImage.js';
import { initPageUp } from './pageup.js';
import { initObserverFixed } from './observerFixed.js';
import { initTitleEffects } from './titleEffect.js';
import { initHamburger } from './hamburger.js';

document.addEventListener('DOMContentLoaded', () => {
	initSmoothScroll();

	initCustomCursor();
	initMenu();
	initHeroImage();
	initPageUp();
	initObserverFixed();
	initTitleEffects();
	initHamburger();

	// GSAP только после инициализации lenis
	gsap.registerPlugin(ScrollTrigger);

	// Только эта строка для интеграции (RAF уже в scroll.js)
	lenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.lagSmoothing(0); // опционально

	// Анимация слов (без SplitText, так как CDN для него требует платной подписки GSAP Club и не работает публично)
	document.querySelectorAll('.about__text p').forEach((p) => {
		// Разбиваем текст на слова с сохранением знаков препинания и пробелов
		p.innerHTML = p.textContent.replace(
			/(\S+[\.,!?;:]*)/g,
			'<span class="word">$1</span>'
		);

		gsap.from(p.querySelectorAll('.word'), {
			opacity: 0,
			y: 50,
			
			stagger: 0.01,
			duration: 0.8,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: p,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
		});
	});
});
