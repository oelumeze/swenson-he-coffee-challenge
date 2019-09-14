import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//coffee pods constants 
const COFFEE_POD_LARGE = 'COFFEE_POD_LARGE';
const COFFEE_POD_SMALL = 'COFFEE_POD_SMALL';
const ESPRESSO_POD = 'ESPRESSO_POD';

//coffee flavor constants
const COFFEE_FLAVOR_VANILLA = 'COFFEE_FLAVOR_VANILLA';
const COFFEE_FLAVOUR_CARAMEL = 'COFFEE_FLAVOUR_CARAMEL';
const COFFEE_FLAVOR_PSL = 'COFFEE_FLAVOR_PSL';
const COFFEE_FLAVOR_MOCHA = 'COFFEE_FLAVOR_MOCHA';
const COFFEE_FLAVOR_HAZELNUT = 'COFFEE_FLAVOR_HAZELNUT';

//pack size constants
const ONE_DOZEN = 12;
const THREE_DOZEN = 36;
const FIVE_DOZEN = 60;
const SEVEN_DOZEN = 84;


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
        type: Number,
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

