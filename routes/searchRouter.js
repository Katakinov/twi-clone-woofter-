const { Router } = require('express');
//const postsDb = require('../models/postDb.js');

const searchRouter = Router();
//const postsData = postsDb;

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
searchRouter.get('/:text', (req, res) => {
    /*const posts = postsData.filter((value) => value.text.includes(req.body.search));
    if (posts != null)
    {
        res.send(posts);
    }
    else
    {
        res.send('Posts undefined');
    }*/
    const test = PostModel.find((value) => value.text == req.params.text);
    if(test){
        res.send(test)
    }
    else{
        res.send("not found")
    }
})

searchRouter.get('/', (req, res) => {
    res.send('Введите в продолжении адресной строки то, что хотите найти.')
})

module.exports = searchRouter;