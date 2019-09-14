import { CoffeeMachineModel } from '../schema/coffeeMachine';

export const getCoffeeMachineByProductType = (req, res, next) => {
    CoffeeMachineModel.find({ product_type: req.query.productType })
        .then((coffeeMachine) => {
                console.log("coffee machine", coffeeMachine)
        }).catch((error) => {

        })
}

export const createCoffeeMachine = (req, res, next) => {
    let coffeeMachineInfo = {
        itemNumber: req.body.itemNumber,
        product_type: req.body.product_type,
        water_line_compatible: true
    };
   
    CoffeeMachineModel.create(coffeeMachineInfo).then((_coffeeMachine) => {
        if(_coffeeMachine) {
            return res.status(201).json({
                success: true,
                error: false,
                coffeeMachine: _coffeeMachine
            })
        }
    }).catch((_error) => {
        return res.status(401).json({
            success: false,
            error: true,
            message: _error.message
        })
    })
}