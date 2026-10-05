export function initCarousel() {
	const items = document.querySelectorAll('.carousel-item');

	if (!items.length) return;

	items.forEach((item) => {
		const link = item.querySelector('a');

		if (!link) return;

		link.addEventListener('click', (event) => {
			if (window.innerWidth > 560) return;

			if (!item.classList.contains('is-active')) {
				event.preventDefault();

				items.forEach((otherItem) => {
					otherItem.classList.remove('is-active');
				});

				item.classList.add('is-active');
			}
		});
	});
}
