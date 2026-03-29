export function initFavorites() {
	const KEY = 'Likes_Products';
	
	const updateUI = () => {
		const rawLikes = JSON.parse(localStorage.getItem(KEY)) || [];
		const likes = rawLikes.map(id => String(id));
		
		const allButtons = document.querySelectorAll('.likes-btn');
		
		allButtons.forEach(btn => {
			const productId = String(btn.value);
			const svg = btn.querySelector('svg');
			
			if (!svg) return;
			
			if (likes.includes(productId)) {
				svg.style.fill = '#ef4444';
				svg.classList.add('active-like');
			} else {
				svg.style.fill = 'none';
				svg.style.stroke = 'currentColor';
				svg.classList.remove('active-like');
			}
		});
	};
	
	document.addEventListener('click', (e) => {
		const btn = e.target.closest('.likes-btn');
		if (!btn) return;
		
		e.preventDefault();
		const productId = String(btn.value);
		let likes = JSON.parse(localStorage.getItem(KEY)) || [];
		likes = likes.map(id => String(id));
		
		if (likes.includes(productId)) {
			likes = likes.filter(id => id !== productId);
		} else {
			likes.push(productId);
		}
		
		localStorage.setItem(KEY, JSON.stringify(likes));
		updateUI();
	});
	
	updateUI();
}