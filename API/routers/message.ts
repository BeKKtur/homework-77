import express, {raw} from 'express';
import fileDb from "../fileDb";
import {Message, MessageWithoutId} from "../types";

const messageRouters = express.Router();

messageRouters.get('/',async (req, res) => {
    const messages = await fileDb.getItem();
    res.send(messages);
});

messageRouters.get('/:id', async (req, res) => {
    const id = req.params.id
    res.send('id');
});

messageRouters.post('/', async (req, res) => {
    const messageData: MessageWithoutId = {
        author: req.body.author,
        message: req.body.message,
        image: req.body.image,
    }

    if(!messageData.author){
       messageData.author = 'Anonymous'
    }

    if(!messageData.message){
        return res.status(400).json({error:'message must be present in the request'});
    }

    const message = await fileDb.addItem(messageData);

    return  res.send(message);
});

export default messageRouters