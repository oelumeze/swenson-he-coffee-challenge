import { Router } from 'express';
import { createCoffeeMachine, getCoffeeMachineByProductType, getCoffeeMachineByWaterLine } from '../controllers/coffeeMachine';

const coffeeMachineRouter = new Router();

coffeeMachineRouter.post('/createCoffeeMachine', createCoffeeMachine);
coffeeMachineRouter.get('/getByProductType/:product_type', getCoffeeMachineByProductType);
coffeeMachineRouter.get('/getByWaterline/:water_line_compatible', getCoffeeMachineByWaterLine)

export default coffeeMachineRouter;