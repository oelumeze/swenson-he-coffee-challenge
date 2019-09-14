import { Router } from 'express';
import { getCoffeePodsByProductType } from '../controllers/coffeePods';

const coffeePodsRouter = new Router();

coffeePodsRouter.get('/getcoffeeByProductype', getCoffeePodsByProductType);

export default coffeePodsRouter;