const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav__items');
const navlink = document.querySelectorAll('.nav__item');

const show = () => {
	hamburger.classList.toggle('active');
	navlinks.classList.toggle('show-nav');

	navlink.forEach((item) => {
		item.addEventListener('click', () => {
			navlinks.classList.remove('show-nav');
		});
	});
};

hamburger.addEventListener('click', show);
