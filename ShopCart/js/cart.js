let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productsInCart){
	productsInCart = [];
}
const parentElementCart = document.querySelector('#buyItems');
const cartSumItem = document.querySelector('.cart p');
const checkOuttTotalPrice = document.querySelector('#totalPrices');
const products = document.querySelectorAll('.productUnder');
// const cartSumPrice = document.querySelector('#sum-prices');
//Sum of 
const countTheSumPrice = () => { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}
 

//get selected items and store in local storage
const updateShoppingCartHTML = function () {  // 3
	localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
	if (productsInCart.length > 0) {
		let result = productsInCart.map(product => {
            console.log(product.price);
			return `
				<li class="buyItem">
					<img src="${product.image}">
					<div class="cartProductDetails">
						<h5>${product.name}</h5>
							<h6>&#8369; ${product.price}</h6>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>`
		});
		parentElementCart.innerHTML = result.join(''); //Displays/Join items on div with ID of #buyItems.
		document.querySelector('.checkout').classList.remove('hidden');
		cartSumItem.innerHTML = countTotal(); //Displays total amount on div with ID of #sum-prices.
		checkOuttTotalPrice.innerHTML = '&#8369;' + countTheSumPrice();

	}
	else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElementCart.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
		cartSumItem.innerHTML = '';
		checkOuttTotalPrice.innerHTML = '';
	}
}

//update product array
function updateProductsInCart(product) { // 2
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
		}
	}
	productsInCart.push(product);
}

const countTotal = () => {
    total = 0;
    for (let i = 0; i < productsInCart.length; i++) {
        total += productsInCart[i].count;
    }
    return total;
} 

products.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
        console.log('products', e.target.classList);
		if (e.target.classList.contains('addToCart')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.productName').innerHTML;
			const productPrice = item.querySelector('.priceValue').innerHTML;
			const productImage = item.querySelector('img').src;
			let product = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			}
			console.log('products', product.price);
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});


//increments and decrements value of item, also remove from shopping cart item with 0 count 
parentElementCart.addEventListener('click', (e) => { // Last
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
	if (isPlusButton || isMinusButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
					productsInCart[i].count += 1
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
				}
				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			}
			if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}
		}
		updateShoppingCartHTML();
	}
});

//delete shopping cart array and clear local storage after clicking checkout button with class checkout
const clearShopCart = document.querySelector('.checkout');

clearShopCart.addEventListener('click', (e) => {
	if (e.target.classList.contains('checkout')) {
		if (productsInCart != null) {
			productsInCart.splice(0 , productsInCart.length);
			localStorage.clear();
			updateShoppingCartHTML();
		}
	}
});

updateShoppingCartHTML();