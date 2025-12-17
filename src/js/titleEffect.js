export function initTitleEffects() {
	const title = document.querySelector('.header__title');

	if (title) {
		setTimeout(() => {
			title.classList.add('loaded');
		}, 100);
	}
}
