export function initPageUp() {
	const btn = document.querySelector('.pageup');

	if (!btn) return;

	const toggleButton = () => {
		btn.classList.toggle('show', window.scrollY > 2100);
	};

	window.addEventListener('scroll', toggleButton);

	btn.addEventListener('click', (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',  // плавный скролл
		});
	});
}
