import { Router } from 'express';
import { getCoffeePodsByProductType, getCoffeePodsByFlavour, getCoffeeByPackSize } from '../controllers/coffeePods';

const coffeePodsRouter = new Router();

coffeePodsRouter.get('/getByProductType/:product_type', getCoffeePodsByProductType);
coffeePodsRouter.get('/getByCoffeeFlavor/:coffee_flavor', getCoffeePodsByFlavour);
coffeePodsRouter.get('/getByPackSizes/:pack_size', getCoffeeByPackSize)

export default coffeePodsRouter;