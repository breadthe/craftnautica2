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

    // ============= Recipes.Fabricator.Personal.Tools
    'Air_Bladder': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Silicone_Rubber', q: 1 },
            { c: 'Bladderfish', q: 1 },
        ],
    },
    'Flare': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Crystalline_Sulfur', q: 1 },
        ],
    },
    'Flashlight': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Battery', q: 1 },
            { c: 'Glass', q: 1 },
        ],
    },
    'Habitat_Builder': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Wiring_Kit', q: 1 },
            { c: 'Computer_Chip', q: 1 },
            { c: 'Battery', q: 1 },
        ],
    },
    'Laser_Cutter': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Diamond', q: 1 },
            { c: 'Battery', q: 1 },
            { c: 'Titanium', q: 1 },
            { c: 'Crystalline_Sulfur', q: 1 },
        ],
    },
    'Light_Stick': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Battery', q: 1 },
            { c: 'Titanium', q: 1 },
            { c: 'Glass', q: 1 },
        ],
    },
    'Mineral_Detector': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Battery', q: 1 },
            { c: 'Titanium', q: 1 },
            { c: 'Copper_Wire', q: 1 },
            { c: 'Silicone_Rubber', q: 1 },
        ],
    },
    'Pathfinder_Tool': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Creepvine_Seed_Cluster', q: 1 },
            { c: 'Titanium', q: 1 },
            { c: 'Battery', q: 1 },
        ],
    },
    'Propulsion_Cannon': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Wiring_Kit', q: 1 },
            { c: 'Battery', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    'Repair_Tool': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Silicone_Rubber', q: 1 },
            { c: 'Crystalline_Sulfur', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    'Scanner': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Battery', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    'Survival_Knife': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Silicone_Rubber', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    'Tether_Tool': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Titanium', q: 2 },
            { c: 'Silicone_Rubber', q: 1 },
            { c: 'Ion_Cube', q: 1 },
        ],
    },
    'Thermoblade': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Survival_Knife', q: 1 },
            { c: 'Battery', q: 1 },
        ],
    },
    'Thumper': {
        t: 'Recipes.Fabricator.Personal.Tools',
        m: [
            { c: 'Battery', q: 1 },
            { c: 'Magnetite', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },

    // ============= Recipes.Habitat_Builder
    Scanner_Room: {
        t: 'Recipes.Habitat_Builder',
        m: [
            { c: 'Titanium', q: 5 },
            { c: 'Copper_Ore', q: 2 },
            { c: 'Gold', q: 1 },
            { c: 'Table_Coral_Sample', q: 1 },
        ],
    },
    /* Solar_Panel: {
        t: 'Recipes.Habitat_Builder',
        m: [
            { c: 'Quartz', q: 2 },
            { c: 'Copper_Ore', q: 1 },
            { c: 'Titanium', q: 2 },
        ],
    }, */
    /* Radio: {
        t: 'Recipes.Habitat_Builder',
        m: [
            { c: 'Copper_Ore', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    }, */

    // ============= Recipes.Habitat_Builder.Base_Pieces
    I_Glass_Compartment: {
        t: 'Recipes.Habitat_Builder.Base_Pieces',
        m: [
            { c: 'Glass', q: 2 },
        ],
    },
    Control_Room: {
        t: 'Recipes.Habitat_Builder.Base_Pieces',
        m: [
            { c: 'Titanium', q: 4 },
            { c: 'Advanced_Wiring_Kit', q: 1 },
            { c: 'Glass', q: 1 },
        ],
    },
    Large_Room: {
        t: 'Recipes.Habitat_Builder.Base_Pieces',
        m: [
            { c: 'Plasteel_Ingot', q: 2 },
        ],
    },
    Multipurpose_Room_Glass_Dome: {
        t: 'Recipes.Habitat_Builder.Base_Pieces',
        m: [
            { c: 'Enameled_Glass', q: 2 },
            { c: 'Titanium', q: 2 },
            { c: 'Lithium', q: 1 },
        ],
    },
    Large_Room_Glass_Dome: {
        t: 'Recipes.Habitat_Builder.Base_Pieces',
        m: [
            { c: 'Enameled_Glass', q: 4 },
            { c: 'Titanium', q: 4 },
            { c: 'Lithium', q: 2 },
        ],
    },

    // ============= Recipes.Habitat_Builder.Exterior_Modules
    Snowfox_Hoverpad: {
        t: 'Recipes.Habitat_Builder.Exterior_Modules',
        m: [
            { c: 'Titanium', q: 2 },
            { c: 'Wiring_Kit', q: 1 },
        ],
    },
    Spotlight: {
        t: 'Recipes.Habitat_Builder.Exterior_Modules',
        m: [
            { c: 'Glass', q: 1 },
            { c: 'Titanium', q: 2 },
        ],
    },
    "Base-attached_Air_Pump": {
        t: 'Recipes.Habitat_Builder.Exterior_Modules',
        m: [
            { c: 'Titanium', q: 2 },
        ],
    },
    Snowman: {
        t: 'Recipes.Habitat_Builder.Exterior_Modules',
        m: [
            { c: 'Snowball', q: 3 },
            { c: 'High_Capacity_O₂_Tank', q: 1 },
            { c: 'Rebreather', q: 1 },
        ],
    },

    // ============= Recipes.Habitat_Builder.Interior_Pieces
    Large_Room_Partition: {
        t: 'Recipes.Habitat_Builder.Interior_Pieces',
        m: [
            { c: 'Titanium', q: 1 },
        ],
    },
    Large_Room_Partition_Door: {
        t: 'Recipes.Habitat_Builder.Interior_Pieces',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Quartz', q: 1 },
        ],
    },

    // ============= Recipes.Habitat_Builder.Interior_Modules
    Jukebox: {
        t: 'Recipes.Habitat_Builder.Interior_Modules',
        m: [
            { c: 'Quartz', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    Jukebox_Speaker: {
        t: 'Recipes.Habitat_Builder.Interior_Modules',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Copper_Ore', q: 1 },
        ],
    },
    Basic_Plant_Pot: {
        t: 'Recipes.Habitat_Builder.Interior_Modules',
        m: [
            { c: 'Titanium', q: 2 },
        ],
    },
    Composite_Plant_Pot: {
        t: 'Recipes.Habitat_Builder.Interior_Modules',
        m: [
            { c: 'Titanium', q: 2 },
        ],
    },
    Chic_Plant_Pot: {
        t: 'Recipes.Habitat_Builder.Interior_Modules',
        m: [
            { c: 'Titanium', q: 2 },
        ],
    },
    Indoor_Growbed: {
        t: 'Recipes.Habitat_Builder.Interior_Modules',
        m: [
            { c: 'Titanium', q: 4 },
        ],
    },
    Recyclotron: {
        t: 'Recipes.Habitat_Builder.Interior_Modules',
        m: [
            { c: 'Ion_Cube', q: 1 },
            { c: 'Titanium_Ingot', q: 1 },
        ],
    },

    // ============= Recipes.Habitat_Builder.Miscellaneous
    Basic_Double_Bed: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 2 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    Quilted_Double_Bed: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 2 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    Single_Bed: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    "Jeremiah's_Bed": {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    "Sam's_Bed": {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    "Zeta's_Bed": {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    "Danielle's_Bed": {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    "Emmanuel's_Bed": {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 2 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    "Fred's_Bed": {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    "Parvan's_Bed": {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
            { c: 'Fiber_Mesh', q: 1 },
        ],
    },
    Executive_Desk: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
        ],
    },
    Swivel_Chair: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
        ],
    },
    Office_Chair: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
        ],
    },
    Command_Chair: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Titanium', q: 1 },
        ],
    },
    Fridge: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Glass', q: 1 },
            { c: 'Titanium', q: 2 },
        ],
    },
    Shower: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Pipe', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    Sink: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Pipe', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    Small_Stove: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Copper_Wire', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    Toilet: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Pipe', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    Aromatherapy_Lamp: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Battery', q: 1 },
            { c: 'Young_Cotton_Anemone', q: 1 },
        ],
    },
    Executive_Toy: {
        t: 'Recipes.Habitat_Builder.Miscellaneous',
        m: [
            { c: 'Magnetite', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },

    // ============= Recipes.Scanner_Room
    Scanner_Room_HUD_Chip: {
        t: 'Recipes.Scanner_Room',
        m: [
            { c: 'Computer_Chip', q: 1 },
            { c: 'Magnetite', q: 1 },
        ],
    },
    Camera_Drone: {
        t: 'Recipes.Scanner_Room',
        m: [
            { c: 'Computer_Chip', q: 1 },
            { c: 'Battery', q: 1 },
            { c: 'Glass', q: 1 },
            { c: 'Titanium', q: 1 },
        ],
    },
    Scanner_Room_Range_Upgrade: {
        t: 'Recipes.Scanner_Room',
        m: [
            { c: 'Copper_Ore', q: 1 },
            { c: 'Magnetite', q: 1 },
        ],
    },
    Scanner_Room_Speed_Upgrade: {
        t: 'Recipes.Scanner_Room',
        m: [
            { c: 'Silver_Ore', q: 1 },
            { c: 'Gold', q: 1 },
        ],
    },

    // ============= Recipes.Mobile_Vehicle_Bay
    Seatruck: {
        t: 'Recipes.Mobile_Vehicle_Bay',
        m: [
            { c: 'Titanium_Ingot', q: 1 },
            { c: 'Advanced_Wiring_Kit', q: 1 },
            { c: 'Glass', q: 2 },
            { c: 'Power_Cell', q: 1 },
        ],
    },
    Seatruck_Aquarium_Module: {
        t: 'Recipes.Mobile_Vehicle_Bay',
        m: [
            { c: 'Titanium_Ingot', q: 1 },
            { c: 'Wiring_Kit', q: 2 },
            { c: 'Enameled_Glass', q: 2 },
        ],
    },
    Seatruck_Docking_Module: {
        t: 'Recipes.Mobile_Vehicle_Bay',
        m: [
            { c: 'Titanium_Ingot', q: 1 },
            { c: 'Advanced_Wiring_Kit', q: 1 },
            { c: 'Lead', q: 3 },
        ],
    },
    Seatruck_Fabricator_Module: {
        t: 'Recipes.Mobile_Vehicle_Bay',
        m: [
            { c: 'Titanium_Ingot', q: 1 },
            { c: 'Computer_Chip', q: 1 },
            { c: 'Lead', q: 3 },
        ],
    },
    Seatruck_Sleeper_Module: {
        t: 'Recipes.Mobile_Vehicle_Bay',
        m: [
            { c: 'Titanium_Ingot', q: 1 },
            { c: 'Fiber_Mesh', q: 2 },
            { c: 'Lead', q: 3 },
        ],
    },
    Seatruck_Storage_Module: {
        t: 'Recipes.Mobile_Vehicle_Bay',
        m: [
            { c: 'Titanium_Ingot', q: 1 },
            { c: 'Wiring_Kit', q: 1 },
            { c: 'Lead', q: 3 },
        ],
    },
    Seatruck_Teleportation_Module: {
        t: 'Recipes.Mobile_Vehicle_Bay',
        m: [
            { c: 'Titanium_Ingot', q: 1 },
            { c: 'Advanced_Wiring_Kit', q: 1 },
            { c: 'Aerogel', q: 2 },
        ],
    },
    Prawn_Suit: {
        t: 'Recipes.Mobile_Vehicle_Bay',
        m: [
            { c: 'Computer_Chip', q: 1 },
            { c: 'Plasteel_Ingot', q: 1 },
            { c: 'Power_Cell', q: 1 },
            { c: 'Enameled_Glass', q: 1 },
        ],
    },

    // ============= Recipes.Vehicle_Upgrade_Console
    Prawn_Suit_Depth_Module_MK1: {
        t: 'Recipes.Vehicle_Upgrade_Console',
        m: [
            { c: 'Synthetic_Fibers', q: 1 },
            { c: 'Enameled_Glass', q: 1 },
            { c: 'Ruby', q: 3 },
        ],
    },
    Prawn_Suit_Depth_Module_MK2: {
        t: 'Recipes.Vehicle_Upgrade_Console',
        m: [
            { c: 'Prawn_Suit_Depth_Module_MK1', q: 1 },
            { c: 'Kyanite', q: 1 },
            { c: 'Nickel_Ore', q: 2 },
        ],
    },
    Prawn_Suit_Drill_Arm: {
        t: 'Recipes.Vehicle_Upgrade_Console',
        m: [
            { c: 'Titanium', q: 5 },
            { c: 'Lithium', q: 1 },
            { c: 'Diamond', q: 4 },
        ],
    },
    Prawn_Suit_Jump_Jet_Upgrade: {
        t: 'Recipes.Vehicle_Upgrade_Console',
        m: [
            { c: 'Nickel_Ore', q: 2 },
            { c: 'Crystalline_Sulfur', q: 3 },
            { c: 'Titanium', q: 5 },
            { c: 'Lithium', q: 1 },
        ],
    },
    Prawn_Suit_Propulsion_Cannon: {
        t: 'Recipes.Vehicle_Upgrade_Console',
        m: [
            { c: 'Computer_Chip', q: 1 },
            { c: 'Titanium', q: 5 },
            { c: 'Lithium', q: 1 },
            { c: 'Magnetite', q: 2 },
        ],
    },
    Storage_Module: {
        t: 'Recipes.Vehicle_Upgrade_Console',
        m: [
            { c: 'Titanium', q: 3 },
            { c: 'Lithium', q: 1 },
        ],
    },
    Prawn_Suit_Thermal_Reactor: {
        t: 'Recipes.Vehicle_Upgrade_Console',
        m: [
            { c: 'Kyanite', q: 2 },
            { c: 'Polyaniline', q: 2 },
            { c: 'Wiring_Kit', q: 1 },
        ],
    },
    Prawn_Suit_Torpedo_Arm: {
        t: 'Recipes.Vehicle_Upgrade_Console',
        m: [
            { c: 'Titanium', q: 5 },
            { c: 'Lithium', q: 1 },
            { c: 'Aerogel', q: 1 },
        ],
    },
    Prawn_Suit_Grappling_Arm: {
        t: 'Recipes.Vehicle_Upgrade_Console',
        m: [
            { c: 'Benzene', q: 1 },
            { c: 'Advanced_Wiring_Kit', q: 1 },
            { c: 'Titanium', q: 2 },
            { c: 'Lithium', q: 1 },
        ],
    },

    // ============= Recipes.Snowfox_Hoverpad
    // Snowfox_Hoverpad
    // Snowfox
};
