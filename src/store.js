import { writable } from "svelte/store";
import itemsSn from "$lib/items-sn";
import itemsBz from "$lib/items-bz";
import Cart from './cart';
import _findIndex from 'lodash.findindex';

// Items store
let defaultItems = [];
function initItemsStore() {
    const { subscribe, set } = writable(defaultItems);

    return {
        subscribe,
        set,
        init: (domain) => {
            if (domain === 'sn') set(itemsSn);
            if (domain === 'bz') set(itemsBz);
        }
    };
}
export const itemsStore = initItemsStore();

// Search string
export const search = writable('');

// Cart
let defaultCart = [];
function initCart() {
    const { subscribe, set } = writable(defaultCart);

    return {
        subscribe,
        set,
        init: () => {
            const cart = new Cart();

            const storedCart = cart.get();
            if (Object.keys(storedCart).length) {
                set(storedCart);
            } else {
                cart.reset();
            }
        },
        addToCart(obj) {
            const { domain, id, qty } = { ...obj };
            const cart = new Cart();
            const storedCart = cart.get();

            const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

            const ix = _findIndex(domainCart, id);

            if (ix > -1) {
                domainCart[ix][id] += qty; // items is in cart, increment qty
            } else {
                domainCart.push({ [id]: qty }); // item is not in cart, add it
            }

            storedCart[domain] = domainCart;

            set(storedCart);

            cart.set(storedCart);
        },
        deleteItem(obj) {
            const { domain, id } = { ...obj };
            //
        },
        incrementQty(obj) {
            const { domain, id } = { ...obj };
            //
        },
        decrementQty(obj) {
            const { domain, id } = { ...obj };
            //
        },
        emptyCart(obj) {
            const { domain } = { ...obj };
            //
        },
    };
}
export const cart = initCart();
