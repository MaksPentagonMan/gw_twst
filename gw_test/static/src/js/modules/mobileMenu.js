export const initMobileHeader = () => {
	
	//burger
	const openBtn = document.getElementById('open-menu');
	const closeBtn = document.getElementById('close-menu');
	const menu = document.getElementById('mobile-menu');
	
	openBtn.addEventListener('click', () => {
		menu.classList.remove('-translate-x-full');
		document.body.style.overflow = 'hidden';
	});
	
	closeBtn.addEventListener('click', () => {
		menu.classList.add('-translate-x-full');
		document.body.style.overflow = 'auto';
	});
	
	
	
	const toggleButtons = document.querySelectorAll('.toggle-submenu');
	
	toggleButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			const submenu = btn.nextElementSibling; // Знаходимо <ul>, що йде за кнопкою
			const icon = btn.querySelector('i');
			
			// Перемикаємо видимість
			submenu.classList.toggle('hidden');
			
			// Повертаємо стрілочку (якщо хочеш візуальний ефект)
			if (submenu.classList.contains('hidden')) {
				icon.style.transform = 'rotate(0deg)';
			} else {
				icon.style.transform = 'rotate(180deg)';
			}
		});
	});
};