export function initMenu() {
	const links = document.querySelectorAll('.header__menu a');

	links.forEach((link) => {
		link.addEventListener('click', function () {
			links.forEach((l) => l.classList.remove('active'));
			this.classList.add('active');
		});
	});
}
