const products = document.querySelectorAll('.product-items')
const showMoreBtn = document.querySelector("#show-more")

let howMoreShow = 12

export function showMore() {
	
	products.forEach((el, index) => {
		if (index < howMoreShow) {
			el.classList.remove('hidden')
		}
	})
	
	if (howMoreShow >= products.length) {
		showMoreBtn.style.display = 'none'
	}
	
}

showMore()

showMoreBtn.addEventListener('click', () => {
	howMoreShow += 12
	showMore()
})

