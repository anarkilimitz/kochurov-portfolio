export async function initPhoneScene() {
	const scene = document.querySelector('.phone-scene');

	if (!scene) return;

	await waitForImages(scene);

	const left = scene.querySelector('.phone-scene__card-left');
	const center = scene.querySelector('.phone-scene__card-top');
	const right = scene.querySelector('.phone-scene__card-right');
	const bottom = scene.querySelector('.phone-scene__card-bottom');

	const isMobile = window.matchMedia('(max-width: 768px)').matches;

	if (isMobile) {
		initPhoneSceneMobile(scene, left, center, right, bottom);
		return;
	}

	initPhoneSceneDesktop(scene, left, center, right, bottom);
}

// чтобы дождаться загрузки картинок именно для эффектов Гсап с координатами!!!
function waitForImages(container) {
	const images = [...container.querySelectorAll('img')];

	return Promise.all(
		images.map((img) => {
			if (img.complete) {
				return Promise.resolve();
			}

			return new Promise((resolve) => {
				img.addEventListener('load', resolve, { once: true });
				img.addEventListener('error', resolve, { once: true });
			});
		})
	);
}

function initPhoneSceneDesktop(scene, left, center, right, bottom) {
	const initialState = {
		left: {
			x: '-42%',
			y: '-65%',
			rotation: 13,
			scale: 0.2,
		},
		center: {
			x: '5%',
			y: '-82%',
			rotation: -11,
			scale: 0.17,
		},
		right: {
			x: '62%',
			y: '-93%',
			rotation: 9,
			scale: 0.3,
		},
		bottom: {
			x: '5%',
			y: '-40%',
			rotation: -3,
			scale: 0.4,
		},
	};

	gsap.set(left, initialState.left);
	gsap.set(center, initialState.center);
	gsap.set(right, initialState.right);
	gsap.set(bottom, initialState.bottom);

	scene.addEventListener('mouseenter', () => {
		gsap.to(left, {
			x: '-37%',
			y: '-65%',
			rotation: 13,
			scale: 0.22,
			duration: 0.3,
			ease: 'power1.out',
		});

		gsap.to(center, {
			x: '5%',
			y: '-68%',
			rotation: -11,
			scale: 0.17,
			duration: 0.3,
			ease: 'power1.out',
		});

		gsap.to(right, {
			x: '35%',
			y: '-100%',
			rotation: 9,
			scale: 0.35,
			duration: 0.3,
			ease: 'power1.out',
		});

		gsap.to(bottom, {
			x: '0%',
			y: '-65%',
			rotation: -3,
			scale: 0.54,
			duration: 0.3,
			ease: 'power1.out',
		});
	});

	scene.addEventListener('mouseleave', () => {
		gsap.to(left, {
			...initialState.left,
			duration: 0.3,
			ease: 'power3.inOut',
		});

		gsap.to(center, {
			...initialState.center,
			duration: 0.3,
			ease: 'power3.inOut',
		});

		gsap.to(right, {
			...initialState.right,
			duration: 0.3,
			ease: 'power3.inOut',
		});

		gsap.to(bottom, {
			...initialState.bottom,
			duration: 0.3,
			ease: 'power3.inOut',
		});
	});
}

function initPhoneSceneMobile(scene, left, center, right, bottom) {
	gsap.set(left, {
		x: '40%',
		y: -50,
		rotation: -8,
		scale: 0.7,
		opacity: 0,
	});

	gsap.set(center, {
		x: '-50%',
		y: -100,
		rotation: 6,
		scale: 0.7,
		opacity: 0,
	});

	gsap.set(right, {
		x: '-50%',
		y: -100,
		rotation: -6,
		scale: 0.7,
		opacity: 0,
	});

	gsap.set(bottom, {
		x: '50%',
		y: -200,
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
				y: -400,
				rotation: -4,
				scale: 1,
				opacity: 1,
				ease: 'power1.out',
			},
			0
		)
		.to(
			center,
			{
				x: -150,
				y: -800,
				rotation: 3,
				scale: 1,
				opacity: 1,
				ease: 'power1.out',
			},
			0.15
		)
		.to(
			right,
			{
				x: 50,
				y: -170,
				rotation: 4,
				scale: 1,
				opacity: 1,
				ease: 'power1.out',
			},
			0.3
		)
		.to(
			bottom,
			{
				x: 20,
				y: -470,
				rotation: -2,
				scale: 1,
				opacity: 1,
				ease: 'power1.out',
			},
			0.3
		);
}
