export function initCustomCursor() {
	const hideCursorStyle = document.createElement('style');
	hideCursorStyle.textContent = `
		*, *::before, *::after {
			cursor: none !important;
		}
	`;
	document.head.appendChild(hideCursorStyle);

	const cursor = document.createElement('div');
	cursor.classList.add('custom-cursor');
	document.body.appendChild(cursor);

	const moveCursor = (e) => {
		cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
	};

	document.addEventListener('mousemove', moveCursor);
	document.addEventListener('mouseenter', () => (cursor.style.opacity = '1'));
	document.addEventListener('mouseleave', () => (cursor.style.opacity = '0'));

	cursor.style.opacity = '0';
	requestAnimationFrame(() => (cursor.style.opacity = '1'));
}
