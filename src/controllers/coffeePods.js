import { CoffeePodsModel } from '../schema/coffeePods';
import { success, failure } from '../utilities/responseHandler';

export const getCoffeePodsByProductType = (req, res, next) => {
    CoffeePodsModel.find({ product_type: req.query.productType })
        .then(success(res, 200))
        .catch(failure(res, 401), next)
}