import { writable } from "svelte/store";
import itemsSn from "$lib/items-sn";
import itemsBz from "$lib/items-bz";
import util from "$lib/util";
import Cart from './cart';
import Inventories from './inventories';
import _findIndex from 'lodash.findindex';

//========================== Items store
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

//========================== Search string
export const search = writable('');

//========================== Cart
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

            const cart = new Cart();
            const storedCart = cart.get();

            const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

            const ix = _findIndex(domainCart, id);

            if (ix > -1) {
                domainCart.splice(ix, 1);
            }

            storedCart[domain] = domainCart;

            set(storedCart);

            cart.set(storedCart);
        },
        incrementQty(obj) {
            const { domain, id } = { ...obj };

            const cart = new Cart();
            const storedCart = cart.get();

            const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

            const ix = _findIndex(domainCart, id);

            if (ix > -1) {
                domainCart[ix][id]++; // items is in cart, increment qty
            }

            storedCart[domain] = domainCart;

            set(storedCart);

            cart.set(storedCart);
        },
        decrementQty(obj) {
            const { domain, id } = { ...obj };

            const cart = new Cart();
            const storedCart = cart.get();

            const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

            const ix = _findIndex(domainCart, id);

            if (ix > -1) {
                if (domainCart[ix][id] > 1) {
                    domainCart[ix][id]--; // items is in cart, decrement qty, make sure it doesn't go to 0
                }
            }

            storedCart[domain] = domainCart;

            set(storedCart);

            cart.set(storedCart);
        },
        emptyCart(obj) {
            const { domain } = obj;

            const cart = new Cart();
            const storedCart = cart.get();

            storedCart[domain] = [];

            set(storedCart);

            cart.set(storedCart);
        },
    };
}
export const cart = initCart();

//========================== Inventories
let defaultInventories = [];
function initInventories() {
    const { subscribe, set } = writable(defaultInventories);

    return {
        subscribe,
        set,
        init: () => {
            const inventories = new Inventories();

            const storedInventories = inventories.get();
            if (Object.keys(storedInventories).length) {
                set(storedInventories);
            } else {
                inventories.reset();
            }
        },
        addToInventory(obj) {
            const { domain, inv, id, qty } = { ...obj };

            const inventories = new Inventories();
            const storedInventories = inventories.get();
            const domainInventories = storedInventories[domain] || []; // inventory.sn | inventory.bz

            if (typeof domainInventories[inv] === 'undefined') {
                domainInventories[inv] = { [id]: parseInt(qty, 10) };
            } else {
                domainInventories[inv][id] = parseInt(qty, 10);
            }

            storedInventories[domain] = { ...domainInventories };

            set(storedInventories);

            inventories.set(storedInventories);
        },
        deleteItem(obj) {
            const { domain, id } = { ...obj };

            const cart = new Cart();
            const storedCart = cart.get();

            const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

            const ix = _findIndex(domainCart, id);

            if (ix > -1) {
                domainCart.splice(ix, 1);
            }

            storedCart[domain] = domainCart;

            set(storedCart);

            cart.set(storedCart);
        },
        incrementQty(obj) {
            const { domain, id } = { ...obj };

            const cart = new Cart();
            const storedCart = cart.get();

            const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

            const ix = _findIndex(domainCart, id);

            if (ix > -1) {
                domainCart[ix][id]++; // items is in cart, increment qty
            }

            storedCart[domain] = domainCart;

            set(storedCart);

            cart.set(storedCart);
        },
        decrementQty(obj) {
            const { domain, id } = { ...obj };

            const cart = new Cart();
            const storedCart = cart.get();

            const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

            const ix = _findIndex(domainCart, id);

            if (ix > -1) {
                if (domainCart[ix][id] > 1) {
                    domainCart[ix][id]--; // items is in cart, decrement qty, make sure it doesn't go to 0
                }
            }

            storedCart[domain] = domainCart;

            set(storedCart);

            cart.set(storedCart);
        },
        emptyCart(obj) {
            const { domain } = obj;

            const cart = new Cart();
            const storedCart = cart.get();

            storedCart[domain] = [];

            set(storedCart);

            cart.set(storedCart);
        },

        // === Getters ===
        /* domainInventories: (domain) => inventories[domain] || {}, */

        // List of inventories per domain
        inventoriesList: (domain) => {
            // Merge default inventories...

            // ... with user-created ones
            const domainInventories = typeof inventories[domain] !== 'undefined'
                ? Object.keys(inventories[domain]).sort()
                : [];

            // Ensure default inventories are always at the top of the list
            return Array.from(new Set([...util.defaultInventories, ...domainInventories]));
        },

        // Total inventories per domain
        /* inventoriesCount: domain => (
            typeof inventories[domain] !== 'undefined'
                ? Object.keys(inventories[domain]).length
                : 0
        ), */

        // Counts how much qty of an item is in a specific inventory
        /* itemCountInInventory: (domain, inventory, id) => {
            const domainInventories = inventories[domain];
            if (typeof domainInventories === 'undefined') {
                return 0;
            }
            if (typeof domainInventories[inventory] === 'undefined') {
                return 0;
            }
            return parseInt(domainInventories[inventory][id], 10);
        }, */

    };
}
export const inventories = initInventories();
