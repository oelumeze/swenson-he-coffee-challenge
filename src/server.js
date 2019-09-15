import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as connection from './connection/index';
import router from './routes/index';
import { checkCoffeeMachineDataIsLoaded, checkCoffeePodDataIsLoaded} from './preloaders';
import dotenv from 'dotenv';

dotenv.config()
const PORT = 8001 || process.env.HTTP_PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



connection.connectdb();//connection to the database
checkCoffeeMachineDataIsLoaded();
checkCoffeePodDataIsLoaded();

app.use('/', router) //set up all routes/endpoints

app.listen(PORT);

console.log(`server is listening on ${PORT}`);

export default app; //i am using this for testing purpose