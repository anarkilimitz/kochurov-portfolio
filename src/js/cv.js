export function initCV() {
	const cvLink = document.querySelector('.cv__title-link');

	if (!cvLink) return;

	cvLink.addEventListener('click', (event) => {
		if (window.innerWidth <= 560 && !cvLink.classList.contains('is-active')) {
			event.preventDefault();
			cvLink.classList.add('is-active');
		}
	});
}
