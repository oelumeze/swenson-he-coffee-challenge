import dotenv from 'dotenv';
import { CoffeeMachineModel } from '../schema/coffeeMachine';
import { CoffeePodsModel } from '../schema/coffeePods';
import { getCoffeeMachineData } from '../utilities/insertCoffeeMachines';
import { getCoffeePodsData } from '../utilities/insertCoffeePods';
dotenv.config();

export const checkScriptsLoaded = () => {
    if (process.env.COFFEE_PODS_SCRIPT_LOADED === "false") {
        CoffeeMachineModel.insertMany(getCoffeeMachineData())
            .then((coffeeMachine) => {
                console.log("insert", coffeeMachine)
            }).catch((error) => {
                console.log("error", error)
            })
    }

    if(process.env.COFFEE_MACHINE_SCRIPT_LOADED === "false") {
        CoffeePodsModel.insertMany(getCoffeePodsData())
            .then((coffeePods) => {

            }).catch((error) => {
                console.log("error", error)
            })
    }
    return null;
}