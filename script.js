const navLinks = document.querySelectorAll('nav ul li a');
const contentSections = document.querySelectorAll('.content');

navLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();

		navLinks.forEach(nav => nav.classList.remove('active'));
		contentSections.forEach(section => section.classList.remove('active'));

		link.classList.add('active');

		const targetId = link.getAttribute('href').substring(1);
		const targetSection = document.getElementById(targetId);
		if (targetSection) {
			targetSection.classList.add('active');
		}
	});
});
