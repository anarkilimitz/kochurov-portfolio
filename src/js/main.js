import { initCustomCursor } from './cursor.js';
import { initMenu } from './menu';
import { initHeroImage } from './heroImage.js';
import { initPageUp } from './pageup.js';

document.addEventListener('DOMContentLoaded', () => {
	initCustomCursor();
	initMenu();
	initHeroImage();
	initPageUp();
});
