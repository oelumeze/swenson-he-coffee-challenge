import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//coffee pods constants 
const COFFEE_POD_LARGE = 'COFFEE_POD_LARGE';
const COFFEE_POD_SMALL = 'COFFEE_POD_SMALL';
const ESPRESSO_POD = 'ESPRESSO_POD';

//coffee flavor constants
const COFFEE_FLAVOR_VANILLA = 'vanilla';
const COFFEE_FLAVOUR_CARAMEL = 'caramel';
const COFFEE_FLAVOR_PSL = 'psl';
const COFFEE_FLAVOR_MOCHA = 'mocha';
const COFFEE_FLAVOR_HAZELNUT = 'hazelnut';

//pack size constants
const ONE_DOZEN = 'ONE_DOZEN';
const THREE_DOZEN = 'THREE_DOZEN';
const FIVE_DOZEN = 'FIVE_DOZEN';
const SEVEN_DOZEN = 'SEVEN_DOZEN';


/**
 * define enumerations as static properties,
 * using JS Style Guide for defining enumerations
 */
const ProductTypes = Object.freeze({
    LargeCoffeePod: COFFEE_POD_LARGE,
    SmallCoffeePod: COFFEE_POD_SMALL,
    ExpressoPod: ESPRESSO_POD
});

/**
 * Coffee Flavors enumerations
 */
const CoffeeFlavors = Object.freeze({
   CoffeeFlavorVanilla: COFFEE_FLAVOR_VANILLA,
   CoffeeFlavorCaramel: COFFEE_FLAVOUR_CARAMEL,
   CoffeeFlavorPsl: COFFEE_FLAVOR_PSL,
   CoffeeFlavorMocha: COFFEE_FLAVOR_MOCHA,
   CoffeeFlavorHazelNut: COFFEE_FLAVOR_HAZELNUT
});

/**
 * Pack sizes enumerations
 */
const PackSizes = Object.freeze({
    OneDozen: ONE_DOZEN,
    ThreeDozen: THREE_DOZEN,
    FiveDozen: FIVE_DOZEN,
    SevenDozen: SEVEN_DOZEN
})

const CoffeePodsSchema = new Schema({
    itemNumber: {
        type: String,
        required: true
    },
    product_type: {
        type: String,
        enum: Object.values(ProductTypes)
    },
    coffee_flavor: {
        type: String,
        enum: Object.values(CoffeeFlavors)
    },
    pack_size: {
        type: String,
        enum: Object.values(PackSizes)
    }
});


/**
 * assign the entities of the enums as a static object
 */
Object.assign(CoffeePodsSchema.statics, {
    ProductTypes,
    CoffeeFlavors,
    PackSizes
});



export const CoffeePodsModel = mongoose.model('coffeePods', CoffeePodsSchema);

