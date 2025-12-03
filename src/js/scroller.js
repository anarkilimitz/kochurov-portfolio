// export function initSmoothScroll() {
// 	const scroller = document.querySelector('.scroller');
// 	let target = 0;
// 	let current = 0;
// 	const ease = 0.04; // у GSAP это 0,08
// 	let isScrolling = false;

// 	function setHeight() {
// 		document.body.style.height = scroller.scrollHeight + 'px';
// 	}

// 	function lerp(start, end, factor) {
// 		return start + (end - start) * factor;
// 	}

// 	function render() {
// 		if (Math.abs(target - current) > 0.5) {
// 			current = lerp(current, target, ease);
// 			scroller.style.transform = `translateY(${-current}px)`;
// 			requestAnimationFrame(render);
// 		} else {
// 			current = target;
// 			scroller.style.transform = `translateY(${-current}px)`;
// 			isScrolling = false;
// 		}
// 	}

// 	function handleScroll() {
// 		target = window.scrollY || window.pageYOffset;
// 		if (!isScrolling) {
// 			isScrolling = true;
// 			requestAnimationFrame(render);
// 		}
// 	}

// 	function handleResize() {
// 		setHeight();
// 		// сбросить позицию скролла - добавлено для нормальной работы
// 		target = window.scrollY;
// 		current = target;
// 		scroller.style.transform = `translateY(${-current}px)`;
// 	}

	// чтобы работали якоря, но плавности нет!
	// document.querySelectorAll('a[href^="#"]').forEach((link) => {
	// 	link.addEventListener('click', (e) => {
	// 		e.preventDefault();

	// 		const id = link.getAttribute('href').substring(1);
	// 		const section = document.getElementById(id);
	// 		if (!section) return;

	// 		const offsetTop = section.offsetTop;

	// 		target = offsetTop;
	// 		current = offsetTop;

	// 		scroller.style.transform = `translateY(${-current}px)`;

	// 		window.scrollTo({
	// 			top: offsetTop,
	// 			behavior: 'instant' || 'auto',
	// 		});
	// 	});
	// });

// 	window.addEventListener('scroll', handleScroll, { passive: true });
// 	window.addEventListener('resize', handleResize);

// 	setHeight();
// 	requestAnimationFrame(render);
// }
