import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as connection from './connection/index';
import router from './routes/index';


const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    (req, res, next) => {   
    connection.connectdb()
    next();
}
);//connection to the database
app.use('/', router) //set up all routes/endpoints

app.listen(PORT);

console.log(`server is listening on ${PORT}`);