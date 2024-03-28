import express from 'express';

const messageRouters = express.Router();

messageRouters.get('/',(req, res) => {
    res.send('get');
});

messageRouters.get('/:id', (req, res) => {
    res.send('id');
});

messageRouters.post('/', (req, res) => {
    res.send('post')
});

export default messageRouters