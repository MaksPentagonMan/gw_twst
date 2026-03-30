import {initSwiper} from "./modules/carousel.js";
import {showMore} from "./modules/showMore.js";
import {searchPr} from "./modules/search.js";
import {initFavorites} from "./modules/favorites.js";
import {initMobileHeader} from "./modules/mobileMenu.js";

document.addEventListener('DOMContentLoaded', () => {
	lucide.createIcons();
	initSwiper()
	showMore()
	searchPr()
	initFavorites()
	initMobileHeader()
})