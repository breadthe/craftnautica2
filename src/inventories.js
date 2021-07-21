class Inventories {
    set(data) {
        if (data) {
            localStorage.setItem('inventory', JSON.stringify(data));
        }
    }

    get(domain = null) {
        const inventory = JSON.parse(localStorage.getItem('inventory')) || {};

        if (domain) {
            return inventory[domain] || [];
        }

        return inventory || {};
    }

    // Reset the entire inventory, or pass the domain (sn, bz) to reset only the specific inventory
    reset(domain = null) {
        if (domain) {
            const tmpinv = Inventories.get();

            if (typeof tmpinv[domain] !== 'undefined') {
                tmpinv[domain] = [];
                localStorage.setItem('inventory', JSON.stringify(tmpinv));
            }
        }

        localStorage.setItem('inventory', JSON.stringify({}));
    }
}

export default Inventories;
