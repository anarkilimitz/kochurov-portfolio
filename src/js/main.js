import { initSmoothScroll } from './scroll.js';
import { initCustomCursor } from './cursor.js';
import { initMenu } from './menu';
import { initHeroImage } from './heroImage.js';
import { initPageUp } from './pageup.js';
import { initObserverFixed } from './observerFixed.js';

document.addEventListener('DOMContentLoaded', () => {
	initSmoothScroll();
	initCustomCursor();
	initMenu();
	initHeroImage();
	initPageUp();
	initObserverFixed();
});