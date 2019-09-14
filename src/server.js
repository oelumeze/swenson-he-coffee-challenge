import express from 'express';
import cors from 'cors';

const PORT = 4000;
const app = express();

app.use(cors());
app.listen(PORT);

console.log(`server is listening on ${PORT}`);