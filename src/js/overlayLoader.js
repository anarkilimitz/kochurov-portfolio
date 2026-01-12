export function initOverlayLoader() {
	return new Promise((resolve) => {
		const overlay = document.getElementById('overlay-loader');
		const loader = document.getElementById('loader');
		// убрать скролл
		document.body.classList.add('no-scroll');

		const totalSegments = 8;
		const activeLength = 1;
		const speed = 170;

		// сегменты
		for (let i = 0; i < totalSegments; i++) {
			const segment = document.createElement('div');
			segment.className = 'segment';
			loader.appendChild(segment);
		}

		const segments = [...loader.querySelectorAll('.segment')];
		let position = 0;

		function animate() {
			segments.forEach((seg, index) => {
				// если сегмент попал в волну — навсегда остается зелёным
				if (index >= position && index < position + activeLength) {
					seg.classList.add('active');
				}
			});

			position++;

			// когда волна дошла до конца — выход
			if (position > totalSegments) {
				clearInterval(interval);

				// пауза перед скрытием
				setTimeout(() => {
					overlay.classList.add('hidden');

					setTimeout(() => {
						overlay.remove();
                        // вернуть скролл
						document.body.classList.remove('no-scroll');

						resolve();
					}, 0); // время
				}, 0); // пауза после заполнения
			}
		}

		const interval = setInterval(animate, speed);
	});
}
