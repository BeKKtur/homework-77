import express from "express";
import messageRouters from "./routers/message";

const app = express();
const port = 8000;


app.use('/message', messageRouters);

app.listen(port, () => {
    console.log(`server ${port}`)
})