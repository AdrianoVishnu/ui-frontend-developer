window.onload = function() {
	const el = document.querySelector('.toggleBtn');
	const nav = document.querySelector('.block__mainNav');
	el.onclick = () => nav.classList.toggle('active');
};
