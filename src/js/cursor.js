export function initCustomCursor() {
	const hideCursorStyle = document.createElement('style');
	hideCursorStyle.textContent = `*, *::before, *::after { cursor: none !important; }`;
	document.head.appendChild(hideCursorStyle);

	const cursor = document.createElement('div');
	cursor.classList.add('custom-cursor');
	document.body.appendChild(cursor);

	const moveCursor = (e) => {
		cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
	};

	document.addEventListener('mousemove', moveCursor);

	document.addEventListener('mousemove', (e) => {
		const target = e.target;
		const computed = getComputedStyle(target);
		const bgColor = computed.backgroundColor;
		const rgb = bgColor.match(/\d+/g);

		if (rgb) {
			const brightness =
				(parseInt(rgb[0]) * 299 +
					parseInt(rgb[1]) * 587 +
					parseInt(rgb[2]) * 114) /
				1000;
			if (brightness < 128) {
				cursor.classList.add('hover-dark');
			} else {
				cursor.classList.remove('hover-dark');
			}
		}
	});

	const links = document.querySelectorAll(
		'a, .nav-link, [role="link"], button, img'
	);
	links.forEach((link) => {
		link.addEventListener('mouseenter', () => {
			cursor.classList.add('hover-link');
		});
		link.addEventListener('mouseleave', () => {
			cursor.classList.remove('hover-link');
		});
		link.addEventListener('mousedown', () => {
			cursor.classList.add('active-link');
		});
		link.addEventListener('mouseup', () => {
			cursor.classList.remove('active-link');
		});
	});
	cursor.style.opacity = '0';
	requestAnimationFrame(() => (cursor.style.opacity = '1'));
}
