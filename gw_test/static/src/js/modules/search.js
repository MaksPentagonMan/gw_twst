export const searchPr = () => {
	
	const searchDesktop = document.getElementById('desktop-search');
	const searchMobile = document.getElementById('mobile-search');
	const productGrid = document.querySelector(".product-result-search");
	
	const searchModal = document.getElementById('search-modal');
	const closeSearchBtn = document.getElementById('close-search');
	
	
	function toggleSearchModal(show) {
		if (show) {
			searchModal.classList.remove('hidden');
		} else {
			searchModal.classList.add('hidden');
			document.body.style.overflow = 'auto';
		}
	}
	closeSearchBtn.addEventListener('click', () => toggleSearchModal(false));
	
	
	function debounce(fn, delay) {
		let timeout;
		return (...args) => {
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(() => {
				fn.apply(null, args);
			}, delay);
		};
	}
	
	async function fetchSearchProducts(query) {
		const searchTerm = query.trim();
		
		if (searchTerm.length < 3) {
			productGrid.innerHTML = '';
			toggleSearchModal(false);
			return;
		}
		
		try {
			toggleSearchModal(true)
			const response = await fetch(` http://127.0.0.1:8000/search/?query=${encodeURIComponent(searchTerm)}`);
			
			if (!response.ok) throw new Error('Помилка сервера');
			
			const data = await response.json();
			renderFindProducts(data);
			
			const showAllBtn = document.getElementById('show-all-results');
			if (data.length > 0) showAllBtn.classList.remove('hidden');
			
		} catch (err) {
			console.error("Search Error:", err);
			productGrid.innerHTML = '<p class="text-red-500">Сталася помилка при пошуку</p>';
		}
	}
	
	function renderFindProducts(data) {
		productGrid.innerHTML = '';
		
		if (!data || data.length === 0) {
			productGrid.innerHTML = '<p class="col-span-full text-center py-4">Нічого не знайдено</p>';
			return;
		}
		
		
		data.forEach(product => {
			const card = `
            <div class="product-item ">
            <a href="#">
                <div class="w-full flex flex-row p-3">
                    <img src="${product.image}?=${product.id}" class="w-[60px] h-[70px] object-cover " alt="${product.name}">
                    <div class="pl-5">
                    <p class="">${product.name}</p>
                   <div class="flex flex-row">
                    <p class="">${product.price} UAH</p>
       							<p class="line-through text-gray-500 ml-2">${product.price_without_discount > product.price ? product.price_without_discount + ' UAN' : '' }</p>
                </div>
       							<p>${product.available ? 'В наявності' : 'Немає в наявності'}</p>
                </div>
                </div>
                </a>
            </div>
        `;
			productGrid.insertAdjacentHTML('beforeend', card);
		});
	}
	
	const debounceSearch = debounce((e) => fetchSearchProducts(e.target.value.trim()), 900);
	
	if (searchDesktop) searchDesktop.addEventListener('input', debounceSearch);
	if (searchMobile) searchMobile.addEventListener('input', debounceSearch);
	
}