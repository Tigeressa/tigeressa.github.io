const navSlide = ()=> {
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li')

	const toggleMenu = () => {
		// Toggle nav
		nav.classList.toggle('nav-active');

	// Animate navlinks
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		// Hamburger animation
		hamburger.classList.toggle('toggle');
	}

	hamburger.addEventListener('click', toggleMenu);
	navLinks.forEach((link) => {
		link.addEventListener('click', toggleMenu);
	}); 
}

//envoke the function 
navSlide(); 