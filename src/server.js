import express from 'express';
import cors from 'cors';
import * as connection from './connection/index';


const PORT = 4000;
const app = express();
app.use(cors());
app.use(() => {    
    connection.connectdb();
});//connection to the database

app.listen(PORT);

console.log(`server is listening on ${PORT}`);