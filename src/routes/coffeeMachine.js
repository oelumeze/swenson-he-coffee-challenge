import { Router } from 'express';
import { createCoffeeMachine, getCoffeeMachineByProductType } from '../controllers/coffeeMachine';

const coffeeMachineRouter = new Router();

coffeeMachineRouter.post('/createCoffeeMachine', createCoffeeMachine);
coffeeMachineRouter.get('/getByProductType', getCoffeeMachineByProductType);

export default coffeeMachineRouter;