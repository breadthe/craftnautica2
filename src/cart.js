class Cart {
    set(data) {
        if (data) {
            localStorage.setItem('cart', JSON.stringify(data));
        }
    }

    get(domain = null) {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};

        if (domain) {
            return cart[domain] || [];
        }

        return cart || {};
    }

    // Reset the entire cart, or pass the domain (sn, bz) to reset only the specific cart
    reset(domain = null) {
        if (domain) {
            const tmpcart = Cart.get();

            if (typeof tmpcart[domain] !== 'undefined') {
                tmpcart[domain] = [];
                localStorage.setItem('cart', JSON.stringify(tmpcart));
            }
        }

        localStorage.setItem('cart', JSON.stringify({}));
    }
}

export default Cart;
