export default {
    // ============= Raw_Materials.Minerals
    Copper_Ore: { t: 'Raw_Materials.Minerals', m: null },
    Crystalline_Sulfur: { t: 'Raw_Materials.Minerals', m: null },
    Diamond: { t: 'Raw_Materials.Minerals', m: null },
    Gold: { t: 'Raw_Materials.Minerals', m: null },
    Ion_Cube: { t: 'Raw_Materials.Minerals', m: null },
    Kyanite: { t: 'Raw_Materials.Minerals', m: null },
    Lead: { t: 'Raw_Materials.Minerals', m: null },
    Lithium: { t: 'Raw_Materials.Minerals', m: null },
    Magnetite: { t: 'Raw_Materials.Minerals', m: null },
    Metal_Salvage: { t: 'Raw_Materials.Minerals', m: null },
    Nickel_Ore: { t: 'Raw_Materials.Minerals', m: null },
    Quartz: { t: 'Raw_Materials.Minerals', m: null },
    Ruby: { t: 'Raw_Materials.Minerals', m: null },
    Salt_Deposit: { t: 'Raw_Materials.Minerals', m: null },
    Silver_Ore: { t: 'Raw_Materials.Minerals', m: null },
    Snowball: { t: 'Raw_Materials.Minerals', m: null },
    Titanium: { t: 'Raw_Materials.Minerals', m: null },
    Uraninite_Crystal: { t: 'Raw_Materials.Minerals', m: null },

    // ============= Raw_Materials.Biological
    Creepvine_Sample: { t: 'Raw_Materials.Biological', m: null },
    Creepvine_Seed_Cluster: { t: 'Raw_Materials.Biological', m: null },
    Fevered_Pepper: { t: 'Raw_Materials.Biological', m: null },
    Flowering_Spore: { t: 'Raw_Materials.Biological', m: null },
    Frost_Vase_Plant: { t: 'Raw_Materials.Biological', m: null },
    Gel_Sack: { t: 'Raw_Materials.Biological', m: null },
    Ribbon_Plant: { t: 'Raw_Materials.Biological', m: null },
    Root_Globule: { t: 'Raw_Materials.Biological', m: null },
    "Preston's_Plant_Leaf": { t: 'Raw_Materials.Biological', m: null },
    Snow_Stalker_Fur: { t: 'Snow_Stalker_Fur', m: null },
    Spiral_Plant_Clipping: { t: 'Spiral_Plant_Clipping', m: null },
    Table_Coral_Sample: { t: 'Raw_Materials.Biological', m: null },
    Young_Cotton_Anemone: { t: 'Raw_Materials.Biological', m: null },

    // ============= Raw_Materials.Fauna
    Bladderfish: { t: 'Raw_Materials.Fauna', m: null },

    // ============= Recipes.Fabricator.Basic_Materials
    Titanium_Ingot: {
        t: 'Recipes.Fabricator.Basic_Materials',
        m: [
            { c: 'Titanium', q: 10 },
        ],
    },
    Fiber_Mesh: {
        t: 'Recipes.Fabricator.Basic_Materials',
        m: [
            { c: 'Creepvine_Sample', q: 2 },
        ],
    },
    Silicone_Rubber: {
        t: 'Recipes.Fabricator.Basic_Materials',
        m: [
            { c: 'Creepvine_Seed_Cluster', q: 1 },
        ],
    },
    Glass: {
        t: 'Recipes.Fabricator.Basic_Materials',
        m: [
            { c: 'Quartz', q: 2 },
        ],
    },
    Lubricant: {
        t: 'Recipes.Fabricator.Basic_Materials',
        m: [
            { c: 'Creepvine_Seed_Cluster', q: 1 },
        ],
    },
    Enameled_Glass: {
        t: 'Recipes.Fabricator.Basic_Materials',
        m: [
            { c: 'Glass', q: 1 },
            { c: 'Diamond', q: 1 },
            { c: 'Lead', q: 1 },
        ],
    },
    Plasteel_Ingot: {
        t: 'Recipes.Fabricator.Basic_Materials',
        m: [
            { c: 'Titanium_Ingot', q: 1 },
            { c: 'Lithium', q: 2 },
        ],
    },

    // ============= Recipes.Fabricator.Advanced_Materials
    Hydrochloric_Acid: {
        t: 'Recipes.Fabricator.Advanced_Materials',
        m: [
            { c: 'Young_Cotton_Anemone', q: 3 },
            { c: 'Salt_Deposit', q: 1 },
        ],
    },
    Benzene: {
        t: 'Recipes.Fabricator.Advanced_Materials',
        m: [
            { c: 'Flowering_Spore', q: 2 },
            { c: 'Ribbon_Plant', q: 1 },
        ],
    },
    Synthetic_Fibers: {
        t: 'Recipes.Fabricator.Advanced_Materials',
        m: [
            { c: 'Ruby', q: 1 },
            { c: 'Spiral_Plant_Clipping', q: 1 },
        ],
    },
    Aerogel: {
        t: 'Recipes.Fabricator.Advanced_Materials',
        m: [
            { c: 'Gel_Sack', q: 1 },
            { c: 'Ruby', q: 1 },
        ],
    },
    Polyaniline: {
        t: 'Recipes.Fabricator.Advanced_Materials',
        m: [
            { c: 'Gold', q: 1 },
            { c: 'Hydrochloric_Acid', q: 1 },
        ],
    },
    Hydraulic_Fluid: {
        t: 'Recipes.Fabricator.Advanced_Materials',
        m: [
            { c: 'Creepvine_Seed_Cluster', q: 1 },
            { c: 'Gel_Sack', q: 4 },
        ],
    },

    // ============= Recipes.Fabricator.Electronics
    Advanced_Wiring_Kit: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Wiring_Kit', q: 1 },
            { c: 'Gold', q: 2 },
            { c: 'Computer_Chip', q: 1 },
        ],
    },
    Battery: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Copper_Ore', q: 1 },
            { c: 'Ribbon_Plant', q: 2 },
        ],
    },
    Computer_Chip: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Table_Coral_Sample', q: 2 },
            { c: 'Gold', q: 1 },
            { c: 'Copper_Wire', q: 1 },
        ],
    },
    Copper_Wire: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Copper_Ore', q: 2 },
        ],
    },
    Ion_Battery: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Ion_Cube', q: 1 },
            { c: 'Gold', q: 1 },
            { c: 'Silver_Ore', q: 1 },
            { c: 'Lithium', q: 1 },
        ],
    },
    Ion_Power_Cell: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Ion_Battery', q: 2 },
            { c: 'Silicone_Rubber', q: 1 },
            { c: 'Wiring_Kit', q: 1 },
        ],
    },
    Parallel_Processing_Unit: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Gold', q: 1 },
            { c: 'Silver_Ore', q: 1 },
            { c: 'Table_Coral_Sample', q: 1 },
        ],
    },
    Power_Cell: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Battery', q: 2 },
            { c: 'Silicone_Rubber', q: 1 },
        ],
    },
    Reactor_Rod: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Uraninite_Crystal', q: 2 },
            { c: 'Lead', q: 1 },
            { c: 'Titanium', q: 1 },
            { c: 'Glass', q: 1 },
        ],
    },
    Test_Override_Module: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Parallel_Processing_Unit', q: 1 },
            { c: 'Titanium', q: 1 },
            { c: 'Lead', q: 1 },
            { c: 'Copper_Wire', q: 1 },
        ],
    },
    Wiring_Kit: {
        t: 'Recipes.Fabricator.Electronics',
        m: [
            { c: 'Silver_Ore', q: 2 },
        ],
    },

    // ============= Recipes.Fabricator.Sustenance.Water
    Water_Purification_Tablet: {
        t: 'Recipes.Fabricator.Sustenance',
        m: [
            { c: 'Frost_Vase_Plant', q: 1 },
            { c: 'Salt_Deposit', q: 1 },
        ],
    },

    // ============= Recipes.Fabricator.Sustenance.Cooked_Food
    // TODO

    // ============= Recipes.Fabricator.Sustenance.Cured_Food
    // TODO

    // ============= Recipes.Fabricator.Deployables
    Beacon: {
        t: 'Recipes.Fabricator.Deployables',
        m: [
            { c: 'Copper_Ore', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    Grav_Trap: {
        t: 'Recipes.Fabricator.Deployables', m: [
            { c: 'Battery', q: 1 },
            { c: 'Copper_Ore', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    Mobile_Vehicle_Bay: {
        t: 'Recipes.Fabricator.Deployables', m: [
            { c: 'Titanium_Ingot', q: 1 },
            { c: 'Lubricant', q: 1 },
            { c: 'Computer_Chip', q: 1 },
        ],
    },
    Quantum_Locker: {
        t: 'Recipes.Fabricator.Deployables', m: [
            { c: 'Titanium', q: 2 },
            { c: 'Advanced_Wiring_Kit', q: 1 },
            { c: 'Ion_Cube', q: 1 },
        ],
    },
    Seaglide: {
        t: 'Recipes.Fabricator.Deployables', m: [
            { c: 'Battery', q: 1 },
            { c: 'Lubricant', q: 1 },
            { c: 'Copper_Wire', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    Spy_Pengling: {
        t: 'Recipes.Fabricator.Deployables', m: [
            { c: 'Titanium', q: 2 },
            { c: 'Wiring_Kit', q: 1 },
            { c: 'Silicone_Rubber', q: 1 },
            { c: 'Battery', q: 1 },
        ],
    },
    Spy_Pengling_Remote: {
        t: 'Recipes.Fabricator.Deployables', m: [
            { c: 'Titanium', q: 1 },
            { c: 'Copper_Wire', q: 1 },
        ],
    },
    Snowfox_Hop_Module: {
        t: 'Recipes.Fabricator.Deployables', m: [
            { c: 'Titanium', q: 2 },
            { c: 'Wiring_Kit', q: 1 },
        ],
    },
    Snowfox_Ice_Worm_Attack_Reduction_Module: {
        t: 'Recipes.Fabricator.Deployables', m: [
            { c: 'Titanium', q: 2 },
            { c: 'Wiring_Kit', q: 1 },
        ],
    },
    Waterproof_Locker: {
        t: 'Recipes.Fabricator.Deployables', m: [
            { c: 'Titanium', q: 4 },
        ],
    },

    // ============= Recipes.Fabricator.Personal.Equipment
    Booster_Tank: {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'High_Capacity_O₂_Tank', q: 1 },
            { c: 'Wiring_Kit', q: 1 },
        ],
    },
    Cold_Suit: {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Fiber_Mesh', q: 2 },
            { c: 'Snow_Stalker_Fur', q: 2 },
        ],
    },
    Compass: {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Copper_Wire', q: 2 },
            { c: 'Wiring_Kit', q: 2 },
        ],
    },
    Fins: {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Silicone_Rubber', q: 2 },
        ],
    },
    First_Aid_Kit: {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    Floting_Air_Pump: {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Titanium', q: 2 },
        ],
    },
    Headlamp: {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Ion_Battery', q: 1 },
            { c: 'Glass', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    /**
     * TODO: This could get weird, Standard O2 Tank is not calculated as a basic mat, even though it is.
     * It may require a special flag to indicate that it should be treated as a raw material,
     * to prevent adding the components that were already used when constructing the original item.
     */
    'High_Capacity_O₂_Tank': {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Standard_O₂_Tank', q: 1 },
            { c: 'Glass', q: 2 },
            { c: 'Titanium', q: 4 },
            { c: 'Silver_Ore', q: 1 },
        ],
    },
    'Pipe': {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Titanium', q: 2 },
        ],
    },
    'Rebreather': {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Wiring_Kit', q: 1 },
            { c: 'Silicone_Rubber', q: 1 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    'Reinforced_Dive_Suit': {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Synthetic_Fibers', q: 1 },
            { c: 'Diamond', q: 2 },
            { c: 'Titanium', q: 2 },
        ],
    },
    'Standard_O₂_Tank': { // TODO: Figure out if non-ASCII subscript works for linking & stuff
        t: 'Recipes.Fabricator.Sustenance.Personal.Equipment',
        m: [
            { c: 'Titanium', q: 2 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    'Stillsuit': {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Synthetic_Fibers', q: 1 },
            { c: 'Aerogel', q: 2 },
            { c: 'Copper_Wire', q: 2 },
        ],
    },
    'Swim_Charge_Fins': {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Fins', q: 1 },
            { c: 'Polyaniline', q: 1 },
            { c: 'Wiring_Kit', q: 1 },
        ],
    },
    'Thermos': {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Glass', q: 1 },
        ],
    },
    'Ultra_High_Capacity_Tank': {
        t: 'Recipes.Fabricator.Personal.Equipment',
        m: [
            { c: 'High_Capacity_O₂_Tank', q: 1 },
            { c: 'Lithium', q: 4 },
        ],
    },

    // TODO: Personal.Tools

    // ============= Recipes.Habitat_Builder
    Scanner_Room: {
        t: 'Recipes.Habitat_Builder',
        m: [
            { c: 'Copper_Ore', q: 2 },
            { c: 'Gold', q: 1 },
            { c: 'Table_Coral_Sample', q: 1 },
            { c: 'Titanium', q: 5 },
        ],
    },
    Solar_Panel: {
        t: 'Recipes.Habitat_Builder',
        m: [
            { c: 'Quartz', q: 2 },
            { c: 'Copper_Ore', q: 1 },
            { c: 'Titanium', q: 2 },
        ],
    },
    Radio: {
        t: 'Recipes.Habitat_Builder',
        m: [
            { c: 'Copper_Ore', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },

    // ============= Recipes.Scanner_Room
    Scanner_Room_Range_Upgrade: {
        t: 'Recipes.Scanner_Room',
        m: [
            { c: 'Copper_Ore', q: 1 },
            { c: 'Magnetite', q: 1 },
        ],
    },
};
