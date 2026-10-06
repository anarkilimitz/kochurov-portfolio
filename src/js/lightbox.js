import { lenis } from './scroll.js';

export function initLightbox() {
	const gallery = document.querySelector('[data-lightbox="scope"]');
	if (!gallery) return;

	// Собираем все пути к картинкам из этой галереи
	const cards = gallery.querySelectorAll('.img-card');
	const images = Array.from(cards).map((card) => card.querySelector('img').src);

	if (images.length === 0) return;

	// Создаем DOM-структуру лайтбокса
	const lightbox = document.createElement('div');
	lightbox.className = 'lightbox';
	lightbox.innerHTML = `
        <button class="lightbox__close" aria-label="Close">✕</button>
        <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous">‹</button>
        <img class="lightbox__image" src="" alt="Fullscreen view">
        <button class="lightbox__nav lightbox__nav--next" aria-label="Next">›</button>
    `;
	document.body.appendChild(lightbox);

	// Элементы управления
	const lightboxImg = lightbox.querySelector('.lightbox__image');
	const closeBtn = lightbox.querySelector('.lightbox__close');
	const prevBtn = lightbox.querySelector('.lightbox__nav--prev');
	const nextBtn = lightbox.querySelector('.lightbox__nav--next');

	let currentIndex = 0;

	// Функции управления
	function open(index) {
		currentIndex = index;
		lightboxImg.src = images[currentIndex];
		lightbox.classList.add('is-active');

		// Блокируем скролл
		if (lenis) lenis.stop();
		document.body.style.overflow = 'hidden';

		updateNav();
	}

	function close() {
		lightbox.classList.remove('is-active');

		// Разблокируем скролл
		if (lenis) lenis.start();
		document.body.style.overflow = '';
	}

	function showNext() {
		currentIndex = (currentIndex + 1) % images.length;
		lightboxImg.src = images[currentIndex];
	}

	function showPrev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		lightboxImg.src = images[currentIndex];
	}

	function updateNav() {
		// Если картинка только одна, скрываем стрелки
		const displayStyle = images.length > 1 ? 'flex' : 'none';
		prevBtn.style.display = displayStyle;
		nextBtn.style.display = displayStyle;
	}

	// Слушатели событий
	cards.forEach((card, index) => {
		card.style.cursor = 'pointer';
		card.addEventListener('click', () => open(index));
	});

	closeBtn.addEventListener('click', close);
	nextBtn.addEventListener('click', showNext);
	prevBtn.addEventListener('click', showPrev);

	// Клики по пустому полю (оверлею) вокруг картинки
	lightbox.addEventListener('click', (e) => {
		if (e.target === lightbox) close();
	});

	// Управление с клавиатуры (Esc и стрелочки)
	document.addEventListener('keydown', (e) => {
		if (!lightbox.classList.contains('is-active')) return;

		if (e.key === 'Escape') close();
		if (e.key === 'ArrowRight') showNext();
		if (e.key === 'ArrowLeft') showPrev();
	});
}
