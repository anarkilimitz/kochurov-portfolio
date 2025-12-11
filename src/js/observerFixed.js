export function initObserverFixed() {
        const headerTitle = document.querySelector('.header__title');
				const casesSection = document.getElementById('cases');

				if (!headerTitle || !casesSection) return;

				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								headerTitle.classList.add('is-hidden');
							} else {
								headerTitle.classList.remove('is-hidden');
							}
						});
					},
					{
						root: null,
						threshold: 0.01, // срабатывает, когда 1% секции #cases видно
						rootMargin: '500px 0px 0px 0px', // начинаем уезжать чуть раньше
					}
				);

				observer.observe(casesSection);
}