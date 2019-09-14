import { CoffeePodsModel } from '../schema/coffeePods';

export const getCoffeePodsByProductType = (req, res, next) => {
    CoffeePodsModel.find({ product_type: req.query.productType })
    .then((coffeePods) => {
            console.log("coffee machine", coffeePods)
            return res.status(201).json({
                error: false,
                success: true,
                coffeePods: coffeePods
            })
    }).catch((error) => {
            return res.status(401).json({
                error: true,
                success: false,
                message: error.message
            })
    })
}