import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//coffee machine constants 
const COFFEE_MACHINE_LARGE = 'COFFEE_MACHINE_LARGE';
const COFFEE_MACHINE_SMALL = 'COFFEE_MACHINE_SMALL';
const ESPRESSO_MACHINE = 'ESPRESSO_MACHINE';


/**
 * define enumerations as static properties,
 * using JS Style Guide for defining enumerations
 */
const ProductTypes = Object.freeze({
    LargeCoffeeMachine: COFFEE_MACHINE_LARGE,
    SmallCoffeeMachine: COFFEE_MACHINE_SMALL,
    ExpressoMachine: ESPRESSO_MACHINE
});

/**
 * Water Line compatibilities enumerations
 */
const WaterLineCompatibilities = Object.freeze({
    True: true,
    False: false
});

const CoffeeMahineSchema = new Schema({
    itemNumber: {
        type: String,
        // required: true
    },
    product_type: {
        type: String,
        enum: Object.values(ProductTypes),
        required: true
    },
    water_line_compatible: {
        type: Boolean,
        enum: Object.values(WaterLineCompatibilities)
    },
});

/**
 * assign the entities of the enums as a static object
 */
Object.assign(CoffeeMahineSchema.statics, {
    ProductTypes,
    WaterLineCompatibilities
});

export const CoffeeMachineModel = mongoose.model('coffeeMachine', CoffeeMahineSchema);

