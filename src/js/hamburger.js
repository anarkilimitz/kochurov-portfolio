export function initHamburger() {
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.header__menu, .case__header-menu');

	hamburger.addEventListener('click', () => {
		menu.classList.toggle('menu-visible');
		hamburger.style.display = menu.classList.contains('menu-visible')
			? 'none'
			: 'flex';
	});
}
