export function initObserverFixed() {
	const headerSubtitle = document.querySelector('.header__title-subtitle');
	const casesSection = document.getElementById('cases');

	if (!headerSubtitle || !casesSection) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					headerSubtitle.classList.add('is-hidden');
				} else {
					headerSubtitle.classList.remove('is-hidden');
				}
			});
		},
		{
			root: null, // одно и то же root: document.querySelector('body')
			threshold: 0,
			rootMargin: '-400px 0px 0px 0px',
		}
	);

	observer.observe(casesSection);
}
