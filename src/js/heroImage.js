export function initHeroImage() {
	const h1 = document.querySelector('.header__title h1');
	const heroImg = document.querySelector('.header__hero-img');

	if (!h1 || !heroImg) return;

	h1.addEventListener('mouseenter', () => {
		heroImg.style.opacity = '1';
		heroImg.style.visibility = 'visible';
	});

	h1.addEventListener('mouseleave', () => {
		heroImg.style.opacity = '0.2';
		// heroImg.style.visibility = 'hidden';
	});
}
