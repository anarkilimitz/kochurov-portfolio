import { initMenu } from './menu';
import { initHeroImage } from './heroImage.js';
import { initSmoothScroll } from './scroller.js';

document.addEventListener('DOMContentLoaded', () => {
	initMenu();
	initHeroImage();
	initSmoothScroll();
});
