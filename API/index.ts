import express from "express";
import messageRouters from "./routers/message";
import fileDb from "./fileDb";
import cors from 'cors'

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())
app.use('/message', messageRouters);


const run = async () => {
    await fileDb.init()
    app.listen(port, () => {
        console.log(`server ${port}`)
    });
}

void run()
