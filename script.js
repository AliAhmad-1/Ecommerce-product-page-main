const icon_menu = document.querySelector('.icon-menu');
const menu = document.querySelector('.nav-left');
const overlay = document.querySelector('.overlay-menu');
const closeBtn = document.querySelector('.icon-close');
const cart_item_buttom = document.querySelector('.cart-item');
const cart_content = document.querySelector('.cart-content');
const cart = document.querySelector('.cart');
const cart_empty = document.querySelector('.cart .empty')
const number_item_shopping_cart = document.querySelector('.amount-items ');
const images = document.querySelectorAll('.images_list img');
const main_image = document.querySelector('.main-image');
const blus_button = document.querySelector('.blus-button');
const minus_button = document.querySelector('.minus-button');
const counter_product = document.querySelector('.counter');
const add_to_cart = document.querySelector('.add-to-cart-botton')
const previus = document.querySelector('.previus');
const next = document.querySelector('.next');
const close_lightbox = document.querySelector('.close-lightbox ');
const lightbox_window = document.querySelector('.lightbox-container');
const main_image_lightbox = document.querySelector('.lightbox-container .image-main img');

let counter = 0;
let current = 1

function lightbox_window_open() {

    lightbox_window.style.display = 'flex';
    document.querySelector('.lightbox-overlay').classList.remove('hidden');
}

function lightbox_window_close() {

    lightbox_window.style.display = 'none';
    document.querySelector('.lightbox-overlay').classList.add('hidden');
}

function next_Image() {
    if (current >= 4) {
        current = 0
        current++
        main_image.src = `images/image-product-${current}.jpg`;
    } else {

        current++
        main_image.src = `images/image-product-${current}.jpg`;

    }
}

function previus_Image() {
    if (current <= 1) {

        current = 5
        current--
        main_image.src = `images/image-product-${current}.jpg`;
    } else {
        current--
        main_image.src = `images/image-product-${current}.jpg`;

    }
}

function open_menu() {
    menu.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

function close_menu() {

    menu.classList.add('hidden');
    overlay.classList.add('hidden');

}

function toggle_cart_item() {
    cart_content.classList.toggle('hidden');
}


function blus() {

    counter++;
    counter_product.innerHTML = counter;
}

function minus() {
    if (counter_product.textContent > 0) {
        counter--;
        counter_product.innerHTML = counter;
    }

}

function deleteItem() {
    cart.innerHTML = `
    <div class="empty">
    <p>Your cart is empty</p>
</div>`
    number_item_shopping_cart.classList.add('hidden');

}

function add_item() {
    num = counter_product.textContent
    if (num > 0) {
        result = num * 125.00
            // cart_empty.classList.remove('hidden')
        cart.innerHTML = ` 
    <div class="cart-item-product ">
    <div class="product-img">
        <img src="images/image-product-1.jpg" alt="image-product-1">
    </div>
    <div class="item-product-desc">
        <p class="title">Fall Limited Edition Sneakers</p>
        <div class="price"> $125.00 x <span class="number-of-item"> ${num}</span><span class="result">$ ${result}.00</span></div>
    </div>
    <div class="delete">
        <button> <img src="images/icon-delete.svg" alt="delete-icon" onclick="deleteItem()"></button>
    </div>
</div>
<div class="check-out"><button class="check-out-button">Checkout</button></div>`
        number_item_shopping_cart.classList.remove('hidden');
        number_item_shopping_cart.textContent = num;
    }


}

console.log(images)
images.forEach((image) => {
    image.addEventListener('click', () => {
        switch (image.getAttribute('src')) {
            case 'images/image-product-1.jpg':
                main_image.src = 'images/image-product-1.jpg';
                main_image_lightbox.src = 'images/image-product-1.jpg';
                break;
            case 'images/image-product-2.jpg':
                main_image.src = 'images/image-product-2.jpg';
                main_image_lightbox.src = 'images/image-product-2.jpg';
                break;
            case 'images/image-product-3.jpg':
                main_image.src = 'images/image-product-3.jpg';
                main_image_lightbox.src = 'images/image-product-3.jpg';
                break;
            case 'images/image-product-4.jpg':
                main_image.src = 'images/image-product-4.jpg';
                main_image_lightbox.src = 'images/image-product-4.jpg';
                break;

        }


    })

});
main_image.addEventListener('click', lightbox_window_open);
close_lightbox.addEventListener('click', lightbox_window_close);
previus.addEventListener('click', previus_Image);
next.addEventListener('click', next_Image);
add_to_cart.addEventListener('click', add_item);
minus_button.addEventListener('click', blus);
blus_button.addEventListener('click', minus);
icon_menu.addEventListener('click', open_menu);
closeBtn.addEventListener('click', close_menu);
cart_item_buttom.addEventListener('click', toggle_cart_item)