import itemsBz from '../../src/lib/items-bz';
import Algo from '../../src/lib/algo';

const algo = new Algo(itemsBz);

describe('Test recipes', () => {
    /* Raw_Materials.Minerals */
    test('it returns the correct Raw_Materials.Minerals', () => {
        expect(algo.listOfMaterials('Copper_Ore')).toEqual([{ c: 'Copper_Ore', q: 1 }]);
        expect(algo.listOfMaterials('Crystalline_Sulfur')).toEqual([{ c: 'Crystalline_Sulfur', q: 1 }]);
        expect(algo.listOfMaterials('Diamond')).toEqual([{ c: 'Diamond', q: 1 }]);
        expect(algo.listOfMaterials('Gold')).toEqual([{ c: 'Gold', q: 1 }]);
        expect(algo.listOfMaterials('Ion_Cube')).toEqual([{ c: 'Ion_Cube', q: 1 }]);
        expect(algo.listOfMaterials('Kyanite')).toEqual([{ c: 'Kyanite', q: 1 }]);
        expect(algo.listOfMaterials('Lead')).toEqual([{ c: 'Lead', q: 1 }]);
        expect(algo.listOfMaterials('Lithium')).toEqual([{ c: 'Lithium', q: 1 }]);
        expect(algo.listOfMaterials('Magnetite')).toEqual([{ c: 'Magnetite', q: 1 }]);
        expect(algo.listOfMaterials('Metal_Salvage')).toEqual([{ c: 'Metal_Salvage', q: 1 }]);
        expect(algo.listOfMaterials('Nickel_Ore')).toEqual([{ c: 'Nickel_Ore', q: 1 }]);
        expect(algo.listOfMaterials('Quartz')).toEqual([{ c: 'Quartz', q: 1 }]);
        expect(algo.listOfMaterials('Ruby')).toEqual([{ c: 'Ruby', q: 1 }]);
        expect(algo.listOfMaterials('Salt_Deposit')).toEqual([{ c: 'Salt_Deposit', q: 1 }]);
        expect(algo.listOfMaterials('Silver_Ore')).toEqual([{ c: 'Silver_Ore', q: 1 }]);
        expect(algo.listOfMaterials('Snowball')).toEqual([{ c: 'Snowball', q: 1 }]);
        expect(algo.listOfMaterials('Titanium')).toEqual([{ c: 'Titanium', q: 1 }]);
        expect(algo.listOfMaterials('Uraninite_Crystal')).toEqual([{ c: 'Uraninite_Crystal', q: 1 }]);
    });

    /* Raw_Materials.Biological */
    test('it returns the correct Raw_Materials.Biological', () => {
        expect(algo.listOfMaterials('Creepvine_Sample')).toEqual([{ c: 'Creepvine_Sample', q: 1 }]);
        expect(algo.listOfMaterials('Creepvine_Seed_Cluster')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 1 }]);
        expect(algo.listOfMaterials('Fevered_Pepper')).toEqual([{ c: 'Fevered_Pepper', q: 1 }]);
        expect(algo.listOfMaterials('Flowering_Spore')).toEqual([{ c: 'Flowering_Spore', q: 1 }]);
        expect(algo.listOfMaterials('Frost_Vase_Plant')).toEqual([{ c: 'Frost_Vase_Plant', q: 1 }]);
        expect(algo.listOfMaterials('Gel_Sack')).toEqual([{ c: 'Gel_Sack', q: 1 }]);
        expect(algo.listOfMaterials('Ribbon_Plant')).toEqual([{ c: 'Ribbon_Plant', q: 1 }]);
        expect(algo.listOfMaterials('Root_Globule')).toEqual([{ c: 'Root_Globule', q: 1 }]);
        expect(algo.listOfMaterials('Preston\'s_Plant_Leaf')).toEqual([{ c: 'Preston\'s_Plant_Leaf', q: 1 }]);
        expect(algo.listOfMaterials('Snow_Stalker_Fur')).toEqual([{ c: 'Snow_Stalker_Fur', q: 1 }]);
        expect(algo.listOfMaterials('Spiral_Plant_Clipping')).toEqual([{ c: 'Spiral_Plant_Clipping', q: 1 }]);
        expect(algo.listOfMaterials('Table_Coral_Sample')).toEqual([{ c: 'Table_Coral_Sample', q: 1 }]);
        expect(algo.listOfMaterials('Young_Cotton_Anemone')).toEqual([{ c: 'Young_Cotton_Anemone', q: 1 }]);
    });

    /* Recipes.Fabricator.Basic_Materials */
    test('it returns the correct list of base materials for Recipes.Fabricator.Basic_Materials', () => {
        expect(algo.listOfMaterials('Titanium_Ingot')).toEqual([{ c: 'Titanium', q: 10 }]);
        expect(algo.listOfMaterials('Fiber_Mesh')).toEqual([{ c: 'Creepvine_Sample', q: 2 }]);
        expect(algo.listOfMaterials('Silicone_Rubber')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 1 }]);
        expect(algo.listOfMaterials('Glass')).toEqual([{ c: 'Quartz', q: 2 }]);
        expect(algo.listOfMaterials('Lubricant')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 1 }]);
        expect(algo.listOfMaterials('Enameled_Glass')).toEqual([{ c: 'Quartz', q: 2 }, { c: 'Diamond', q: 1 }, { c: 'Lead', q: 1 }]);
        expect(algo.listOfMaterials('Plasteel_Ingot')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Lithium', q: 2 }]);
    });

    /* Recipes.Fabricator.Advanced_Materials */
    test('it returns the correct list of base materials for Recipes.Fabricator.Advanced_Materials', () => {
        expect(algo.listOfMaterials('Hydrochloric_Acid')).toEqual([{ c: 'Young_Cotton_Anemone', q: 3 }, { c: 'Salt_Deposit', q: 1 }]);
        expect(algo.listOfMaterials('Benzene')).toEqual([{ c: 'Flowering_Spore', q: 2 }, { c: 'Ribbon_Plant', q: 1 }]);
        expect(algo.listOfMaterials('Synthetic_Fibers')).toEqual([{ c: 'Ruby', q: 1 }, { c: 'Spiral_Plant_Clipping', q: 1 }]);
        expect(algo.listOfMaterials('Aerogel')).toEqual([{ c: 'Gel_Sack', q: 1 }, { c: 'Ruby', q: 1 }]);
        expect(algo.listOfMaterials('Polyaniline')).toEqual([{ c: 'Gold', q: 1 }, { c: 'Young_Cotton_Anemone', q: 3 }, { c: 'Salt_Deposit', q: 1 }]);
        expect(algo.listOfMaterials('Hydraulic_Fluid')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 1 }, { c: 'Gel_Sack', q: 4 }]);
    });

    /* Recipes.Fabricator.Electronics */
    test('it returns the correct list of base materials for Recipes.Fabricator.Electronics', () => {
        expect(algo.listOfMaterials('Advanced_Wiring_Kit')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 2 }]);
        expect(algo.listOfMaterials('Battery')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Ribbon_Plant', q: 2 }]);
        expect(algo.listOfMaterials('Computer_Chip')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 2 }]);
        expect(algo.listOfMaterials('Copper_Wire')).toEqual([{ c: 'Copper_Ore', q: 2 }]);
        expect(algo.listOfMaterials('Ion_Battery')).toEqual([{ c: 'Ion_Cube', q: 1 }, { c: 'Gold', q: 1 }, { c: 'Silver_Ore', q: 1 }, { c: 'Lithium', q: 1 }]);
        expect(algo.listOfMaterials('Ion_Power_Cell')).toEqual([{ c: 'Ion_Cube', q: 2 }, { c: 'Gold', q: 2 }, { c: 'Silver_Ore', q: 4 }, { c: 'Lithium', q: 2 }, { c: 'Creepvine_Seed_Cluster', q: 1 }]);
        expect(algo.listOfMaterials('Parallel_Processing_Unit')).toEqual([{ c: 'Gold', q: 1 }, { c: 'Silver_Ore', q: 1 }, { c: 'Table_Coral_Sample', q: 1 }]);
        expect(algo.listOfMaterials('Power_Cell')).toEqual([{ c: 'Copper_Ore', q: 2 }, { c: 'Ribbon_Plant', q: 4 }, { c: 'Creepvine_Seed_Cluster', q: 1 }]);
        expect(algo.listOfMaterials('Reactor_Rod')).toEqual([{ c: 'Uraninite_Crystal', q: 2 }, { c: 'Lead', q: 1 }, { c: 'Titanium', q: 1 }, { c: 'Quartz', q: 2 }]);
        expect(algo.listOfMaterials('Test_Override_Module')).toEqual([{ c: 'Gold', q: 1 }, { c: 'Silver_Ore', q: 1 }, { c: 'Table_Coral_Sample', q: 1 }, { c: 'Titanium', q: 1 }, { c: 'Lead', q: 1 }, { c: 'Copper_Ore', q: 2 }]);
        expect(algo.listOfMaterials('Wiring_Kit')).toEqual([{ c: 'Silver_Ore', q: 2 }]);
    });

    /* Recipes.Fabricator.Sustenance.Water */
    test('it returns the correct list of base materials for Recipes.Fabricator.Sustenance.Water', () => {
        expect(algo.listOfMaterials('Water_Purification_Tablet')).toEqual([{ c: 'Frost_Vase_Plant', q: 1 }, { c: 'Salt_Deposit', q: 1 }]);
    });

    /* Recipes.Fabricator.Deployables */
    test('it returns the correct list of base materials for Recipes.Fabricator.Deployables', () => {
        expect(algo.listOfMaterials('Beacon')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Titanium', q: 1 }]);
        expect(algo.listOfMaterials('Grav_Trap')).toEqual([{ c: 'Copper_Ore', q: 2 }, { c: 'Ribbon_Plant', q: 2 }, { c: 'Titanium', q: 1 }]);
        expect(algo.listOfMaterials('Mobile_Vehicle_Bay')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Creepvine_Seed_Cluster', q: 1 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 2 }]);
        expect(algo.listOfMaterials('Quantum_Locker')).toEqual([{ c: 'Titanium', q: 2 }, { c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Ion_Cube', q: 1 }]);
        expect(algo.listOfMaterials('Seaglide')).toEqual([{ c: 'Copper_Ore', q: 3 }, { c: 'Ribbon_Plant', q: 2 }, { c: 'Creepvine_Seed_Cluster', q: 1 }, { c: 'Titanium', q: 1 }]);
        expect(algo.listOfMaterials('Spy_Pengling')).toEqual([{ c: 'Titanium', q: 2 }, { c: 'Silver_Ore', q: 2 }, { c: 'Creepvine_Seed_Cluster', q: 1 }, { c: 'Copper_Ore', q: 1 }, { c: 'Ribbon_Plant', q: 2 }]);
        expect(algo.listOfMaterials('Spy_Pengling_Remote')).toEqual([{ c: 'Titanium', q: 1 }, { c: 'Copper_Ore', q: 2 }]);
        expect(algo.listOfMaterials('Snowfox_Hop_Module')).toEqual([{ c: 'Titanium', q: 2 }, { c: 'Silver_Ore', q: 2 }]);
        expect(algo.listOfMaterials('Snowfox_Ice_Worm_Attack_Reduction_Module')).toEqual([{ c: 'Titanium', q: 2 }, { c: 'Silver_Ore', q: 2 }]);
        expect(algo.listOfMaterials('Waterproof_Locker')).toEqual([{ c: 'Titanium', q: 4 }]);
    });

    /* Recipes.Fabricator.Personal.Equipment */
    test('it returns the correct list of base materials for Recipes.Fabricator.Personal.Equipment', () => {
        expect(algo.listOfMaterials('Booster_Tank')).toEqual([{ c: 'Titanium', q: 6 }, { c: 'Creepvine_Sample', q: 2 }, { c: 'Quartz', q: 4 }, { c: 'Silver_Ore', q: 3 }]);
        expect(algo.listOfMaterials('Cold_Suit')).toEqual([{ c: 'Creepvine_Sample', q: 4 }, { c: 'Snow_Stalker_Fur', q: 2 }]);
        expect(algo.listOfMaterials('Compass')).toEqual([{ c: 'Copper_Ore', q: 4 }, { c: 'Silver_Ore', q: 4 }]);
        expect(algo.listOfMaterials('Fins')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 2 }]);
        expect(algo.listOfMaterials('First_Aid_Kit')).toEqual([{ c: 'Creepvine_Sample', q: 2 }]);
        expect(algo.listOfMaterials('Floting_Air_Pump')).toEqual([{ c: 'Titanium', q: 2 }]);
        expect(algo.listOfMaterials('Headlamp')).toEqual([{ c: 'Ion_Cube', q: 1 }, { c: 'Gold', q: 1 }, { c: 'Silver_Ore', q: 1 }, { c: 'Lithium', q: 1 }, { c: 'Quartz', q: 2 }, { c: 'Titanium', q: 1 }]);
        expect(algo.listOfMaterials('High_Capacity_O₂_Tank')).toEqual([{ c: 'Titanium', q: 6 }, { c: 'Creepvine_Sample', q: 2 }, { c: 'Quartz', q: 4 }, { c: 'Silver_Ore', q: 1 }]);
        expect(algo.listOfMaterials('Pipe')).toEqual([{ c: 'Titanium', q: 2 }]);
        expect(algo.listOfMaterials('Rebreather')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Creepvine_Seed_Cluster', q: 1 }, { c: 'Creepvine_Sample', q: 2 }]);
        expect(algo.listOfMaterials('Reinforced_Dive_Suit')).toEqual([{ c: 'Ruby', q: 1 }, { c: 'Spiral_Plant_Clipping', q: 1 }, { c: 'Diamond', q: 2 }, { c: 'Titanium', q: 2 }]);
        expect(algo.listOfMaterials('Standard_O₂_Tank')).toEqual([{ c: 'Titanium', q: 2 }, { c: 'Creepvine_Sample', q: 2 }]);
        expect(algo.listOfMaterials('Stillsuit')).toEqual([{ c: 'Ruby', q: 3 }, { c: 'Spiral_Plant_Clipping', q: 1 }, { c: 'Gel_Sack', q: 2 }, { c: 'Copper_Ore', q: 4 }]);
        expect(algo.listOfMaterials('Swim_Charge_Fins')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Young_Cotton_Anemone', q: 3 }, { c: 'Salt_Deposit', q: 1 }, { c: 'Silver_Ore', q: 2 }]);
        expect(algo.listOfMaterials('Thermos')).toEqual([{ c: 'Titanium', q: 1 }, { c: 'Quartz', q: 2 }]);
        expect(algo.listOfMaterials('Ultra_High_Capacity_Tank')).toEqual([{ c: 'Titanium', q: 6 }, { c: 'Creepvine_Sample', q: 2 }, { c: 'Quartz', q: 4 }, { c: 'Silver_Ore', q: 1 }, { c: 'Lithium', q: 4 }]);
    });

    /* Recipes.Fabricator.Personal.Tools */
    // @todo
});
