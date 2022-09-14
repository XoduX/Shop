const productsHickvision = [
    {
        id: 1,
        name: "DS-2CD1021-I",
        images: "./images/hickvision.png",
        description: "2.0MP Bullet IP Camera,1920x1080:25fps(P)/30fps(N), 2.8mm/F2.0 lens ,30m  IR range,IP67, DWDR, 3D DNR, BLC,PoE",
        rating: "",
        price: "2440",
        count: 1
    },
    {
        id: 2,
        name: "DS-2CD1123G0-I",
        images: "./images/hickvision.png",
        description: "2MP IR Dome: H.265+/H265/H.264+&H.264, 3D DNR, BLC, IR range: up to 30m 2.8mm lens,PoE,IP67",
        rating: "",
        price: "2520",
        count: 1
    },
    {
        id: 3,
        name: "DS-2CD2020F-IW",
        images: "./images/hickvision.png",
        description: "Hikvision 2.0MP Wi-Fi Bullet ,HD 1920 x1080 25fps(N), 4mm/F1.2 lens, PoE, DWDR, 3D DNR, BLC,  Support on-board storage (SD card ] IP66",
        rating: "",
        price: "3520",
        count: 1
    },
    {
        id: 4,
        name: "DS-2CD2042WD-I",
        images: "./images/hickvision.png",
        description: "Hikvision 4Mp H.264+ WDR Bullet :2688¡Á1520: 20fps, 4mm/F2.0 lens,120db WDR, 3D DNR,IR range: up to 30m,PoE,IP66",
        rating: "",
        price: "4640",
        count: 1
    },
    {
        id: 5,
        name: "DS-2CD2122FWD-IS",
        images: "./images/hickvision.png",
        description: "2.0MP H.264+ WDR IR Dome: 4mm/F2.0 lens,120dB WDR, 3D DNR, BLC, 30m IR Range, Vandal-proof housing, IP67, DC12V & PoE, Audio/Alarm IO",
        rating: "",
        price: "3865",
        count: 1
    },
    {
        id: 6,
        name: "DS-2CD2125FWD-I",
        images: "./images/hickvision.png",
        description: "2Mp H.265+ Darkfighter Dome: 120dB Ture WDR,3D DNR; BLC, ICR,30m IR,2.8mm Lens,IP66,PoE,Built-in micro SD/SDHC/SDXC slot; HIK-Connect cloud service",
        rating: "",
        price: "5410",
        count: 1
    },
    {
        id: 7,
        name: "DS-2CD2232-I5",
        images: "./images/hickvision.png",
        description: "Hikvision 3.0MP Array IR Bullet ,HD (2048 x 1536) resolution ICR, 0.01lux/F1.2,  4mm/F2.0 lens ,DC12V & PoE (802.3af), DWDR, 3D DNR,EXIR range: up to 50m,IP66",
        rating: "",
        price: "6900",
        count: 1
    },
    {
        id: 8,
        name: "DS-2CD2655FWD-IZS",
        images: "./images/hickvision.png",
        description: "5Mp H.265 .120dB WDR; VCA functions. Motorized VF lens,Built-in micro SD/SDHC/SDXC slot; Built-in Audio/Alarm IO,",
        rating: "",
        price: "12450",
        count: 1
    },
    {
        id: 9,
        name: "DS-2CD2755FWD-IZS",
        images: "./images/hickvision.png",
        description: "5.Mp motorized VF EXIR Dome: H.265+, 2.8~12mm motorized VF lens; 120dB WDR; VCA functions,Built-in micro SD/SDHC/SDXC slot; Built-in Audio/Alarm IO,",
        rating: "",
        price: "12445",
        count: 1
    },
    {
        id: 10,
        name: "DS-2CD2T43G0-I8",
        images: "./images/hickvision.png",
        description: "4MP H.265+ ,120db WDR, 80m EXIR Distance,6mm Lens ,VCA Fucntions",
        rating: "",
        price: "5500",
        count: 1
    }
]

//close shopping cart modal (usually x button) with a class of producstOnCart
//remves stopScrolling class
function closeCart() {
	const cart = document.querySelector('.productsCart-container');
	cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling');
}

//open shopping cart modal using shopping cart logo with a class of shoppingCartButton
//Make user unable to scroll using class stopScrolling
const openShopCart = document.querySelector('.cart');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.productsCart-container');
	cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling');
});

//close shopping cart using closebutton
const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);


const parentElement = document.querySelector('.hikProducts');
const productList = document.querySelector('.hikProduct')
const nav = document.querySelector ('nav');

const arrayProducts = () => {for (let i = 0; i < productsHickvision.length; i++) {
    const element = productsHickvision[i];
    let result = `<div class="hikProduct">
                <div class="productUnder">
                    <figure class="product-image">
                        <img
                            src="${element.images}"
                            alt="popular labtops and computers"
                        />
                        <div class="product-over">
                            <button
                                class="btn btn-small addToCart"
                                data-product-id="${element.id}"
                            >
                                <i class="fas fa-cart-plus"></i>Add
                                to cart
                            </button>
                            <a
                                href="#"
                                class="btn btn-small"
                                >More Info</a
                            >
                        </div>
                    </figure>
                    <div class="product-summary">
                        <h4 class="productName">${element.name}</h4>
                        <p>
                        ${element.description}
                        </p>
                        <h6 class="price">
                        &#8369;<span class="priceValue">${element.price}</span>
                        </h6>
                    </div>
                </div>
            </div>`
        
            parentElement.innerHTML += result;
}}

arrayProducts()