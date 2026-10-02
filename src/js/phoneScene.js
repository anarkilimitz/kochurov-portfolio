export function initPhoneScene() {
	const scene = document.querySelector('.phone-scene');

	if (!scene) return;

	const left = scene.querySelector('.phone-scene__card--left');
	const center = scene.querySelector('.phone-scene__card--center');
	const right = scene.querySelector('.phone-scene__card--right');

	const isMobile = window.matchMedia('(max-width: 768px)').matches;

	if (isMobile) {
		initPhoneSceneMobile(scene, left, center, right);
		return;
	}

	initPhoneSceneDesktop(scene, left, center, right);
}

function initPhoneSceneDesktop(scene, left, center, right) {
	gsap.set(left, {
		x: -170,
		y: '-120%',
		rotation: -18,
		scale: 0.7,
		opacity: 0,
	});

	gsap.set(center, {
		x: '50%',
		y: -100,
		rotation: 8,
		scale: 0.65,
		opacity: 0,
	});

	gsap.set(right, {
		x: 170,
		y: '-10%',
		rotation: 18,
		scale: 0.7,
		opacity: 0,
	});

	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: scene,
			start: 'top 75%',
			end: 'bottom 35%',
			scrub: 1,
		},
	});

	timeline
		.to(
			left,
			{
				x: 80,
				y: 50,
				rotation: 12,
				scale: 1,
				opacity: 1,
				ease: 'power3.out',
			},
			0
		)
		.to(
			center,
			{
				y: 70,
				rotation: -5,
				scale: 1.5,
				opacity: 1,
				ease: 'power3.out',
			},
			0.1
		)
		.to(
			right,
			{
				x: -40,
				y: 150,
				rotation: 0,
				scale: 1,
				opacity: 1,
				ease: 'power3.out',
			},
			0
		);
}

function initPhoneSceneMobile(scene, left, center, right) {
	gsap.set(left, {
		x: '-30%',
		y: 100,
		rotation: -8,
		scale: 0.7,
		opacity: 0,
	});

	gsap.set(center, {
		x: '50%',
		y: 100,
		rotation: 6,
		scale: 0.7,
		opacity: 0,
	});

	gsap.set(right, {
		x: '-50%',
		y: 100,
		rotation: -6,
		scale: 0.7,
		opacity: 0,
	});

	const timeline = gsap.timeline({
		scrollTrigger: {
			trigger: scene,
			start: 'top 75%',
			end: 'bottom 25%',
			scrub: 1,
		},
	});

	timeline
		.to(
			left,
			{
				x: -150,
				y: -80,
				rotation: -4,
				scale: 1,
				opacity: 1,
				ease: 'power3.out',
			},
			0
		)
		.to(
			center,
			{
				x: -50,
				y: -50,
				rotation: 3,
				scale: 1,
				opacity: 1,
				ease: 'power3.out',
			},
			0.15
		)
		.to(
			right,
			{
				y: 70,
				rotation: -2,
				scale: 1,
				opacity: 1,
				ease: 'power3.out',
			},
			0.3
		);
}