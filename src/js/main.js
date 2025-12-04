import { initMenu } from './menu';
import { initHeroImage } from './heroImage.js';
import { initPageUp } from './pageup.js';
// import { initSmoothScroll } from './scroller.js';

document.addEventListener('DOMContentLoaded', () => {
	initMenu();
	initHeroImage();
	initPageUp();
	// initSmoothScroll();
});
