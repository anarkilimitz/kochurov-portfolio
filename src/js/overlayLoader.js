export function initOverlayLoader() {
	return new Promise((resolve) => {

		const overlay = document.getElementById('overlay-loader');
		const loader = document.getElementById('loader');

		const totalSegments = 8;
		const activeLength = 8;
		const speed = 200;

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
				const isActive = index >= position && index < position + activeLength;
				seg.classList.toggle('active', isActive);
			});

			position++;
			if (position > totalSegments) {
				position = -activeLength + 1;
			}
		}

		const interval = setInterval(animate, speed);
		
		setTimeout(() => {
			clearInterval(interval);
			overlay.classList.add('hidden');
			
			setTimeout(() => {
				overlay.remove(); // полностью убрать из dom
				resolve();
			}, 600);
		}, 3000);
	});
}
