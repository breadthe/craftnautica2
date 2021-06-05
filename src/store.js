import { writable } from "svelte/store";
import itemsSn from "$lib/items-sn";
import itemsBz from "$lib/items-bz";

// Subnautica items
let defaultSnItems = [];
function initItemsSnStore() {
    const { subscribe, set } = writable(defaultSnItems);

    return {
        subscribe,
        set,
        init: () => {
            set(itemsSn);
        }
    };
}
export const itemsSnStore = initItemsSnStore();

// Below Zero items
let defaultBzItems = [];
function initItemsBzStore() {
    const { subscribe, set } = writable(defaultBzItems);

    return {
        subscribe,
        set,
        init: () => {
            set(itemsBz);
        }
    };
}
export const itemsBzStore = initItemsBzStore();

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


// Page (Main, Preferences)
// export const page = writable('Main');

// Theme: dark, light, automatic
// const storedTheme = settings.getSync('theme');
// export const theme = writable(storedTheme);
// theme.subscribe(value => {
//     settings.setSync('theme', value);
// });

// Editor
// const defaultEditor = 'PhpStorm';
// const storedEditor = settings.getSync('editor');// || defaultEditor
// export const editor = writable(storedEditor);
// editor.subscribe(value => {
//     settings.setSync('editor', value);
// });

// Port
// const defaultPort = 59999;
// const storedPort = settings.getSync('port') || defaultPort;
// export const port = writable(storedPort);
// port.subscribe(value => {
//     settings.setSync('port', value);
// });

// Float on top
// const storedFloating = settings.getSync('floating') || false;
// export const floating = writable(storedFloating);
// floating.subscribe(value => {
//     settings.setSync('floating', value);
// });

// Log items - each log item is an array of potentially multiple sub-items
// ... though in practice it seems there's only 1 item (index 0)
// let defaultLogItems = [];
// function createLogItems() {
//     const { subscribe, set } = writable(defaultLogItems);

//     return {
//         subscribe,
//         set,
//         push: (item) => {
//             const newLogItems = defaultLogItems;
//             newLogItems.push(item);
//             set(newLogItems);
//         },
//         removeItem: (itemId) => {
//             const ix = defaultLogItems.findIndex(i => i.id === itemId);
//             if (ix > -1) {
//                 defaultLogItems.splice(ix, 1);
//                 set(defaultLogItems);
//             }
//         },
//         clear: (filter) => {
//             const excluded = [];

//             // Remove only filtered items
//             if (filter.length) {
//                 defaultLogItems.forEach(i => { if (!filter.includes(i.style.color)) excluded.push(i) })
//             }

//             defaultLogItems = excluded;
//             set(defaultLogItems);
//         }
//     };
// }
// export const logItems = createLogItems();

// Filter (colors)
// let defaultFilter = [];
// function createFilter() {
//     const { subscribe, set } = writable(defaultFilter);

//     return {
//         subscribe,
//         set,
//         // TODO using push() & remove() as part of toggle is cleaner but couldn't get it to work
//         toggle: (color) => {
//             const ix = defaultFilter.indexOf(color);
//             if (ix > -1) {
//                 defaultFilter.splice(ix, 1);
//                 set(defaultFilter);
//             } else {
//                 const newFilter = defaultFilter;
//                 newFilter.push(color);
//                 set(newFilter);
//             }
//         },
//         push: (color) => {
//             const newFilter = defaultFilter;
//             newFilter.push(color);
//             set(newFilter);
//         },
//         remove: (color) => {
//             const ix = defaultFilter.indexOf(color);
//             if (ix > -1) {
//                 defaultFilter.splice(ix, 1);
//                 set(defaultFilter);
//             }
//         },
//         clear: () => {
//             defaultFilter = [];
//             set(defaultFilter);
//         }
//     };
// }
// export const filter = createFilter();
