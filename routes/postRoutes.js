const { Router } = require('express')
const Posts = require('../models/PostModel.js');
const bodyParser = require('body-parser');

//Для чтения тела POST запроса
const urlencodedParser = bodyParser.urlencoded({ extended: false })
//const urlencodedParser = urlencoded({ extended: false });

//TODO: Написать роут для твиттов (напр. /post)
const PostRouter = Router();

//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
PostRouter.get('/', (req, res) => {
    Posts.find({}, (error, posts) => {
        if (error) { 
            res.send("Посты не найдены") 
        } else {
            res.json(posts)
        }
    })
})
//TODO: Написать запрос для получения твитта по его ID
PostRouter.get('/:name', (req, res) => {
    Posts.findOne({ name: req.params.name }, (error, post) => {
        if (error) {
             res.send('Пост не найден')
        } else {
            res.send(post)
        }  // else { post != null ? res.send(postStyle + `<h1>${post.name}<h3>${post.nickname}</h3></h1> <i>${post.date}</i> <p style="font-size: 20px;">${post.text}</p> <p>${post.likes} лайков - ${post.comments} комментариев - ${post.retweets} ретвитов</p></div></body>`) : res.send('Неправильный номер') }
    })
})
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
PostRouter.post('/', urlencodedParser, (req, res) => {
    const Post = Posts ({
        name: req.body.name,
        date: req.body.date,
        text: req.body.text,
        image: req.body.image,  
        avatar: req.body.avatar,
        verified: req.body.verified,
        tagName: req.body.tagName,
        likeNumber: req.body.likeNumber,
        commentNumber: req.body.commentNumber,
        shareNumber: req.body.shareNumber,
        retweetNumber: req.body.retweetNumber,
        liked: req.body.liked   
    })
    Post.save()
    res.send(Post)
    res.send("Post add")
})

module.exports = PostRouter;

/*PostRouter.patch('/:id', urlencodedParser, (req, res) => {
    Posts.findOne({ id: req.params.id }, (error, post) => {
        if (error) { res.status(400) }
        
        else {
            post.likes = req.body.likes
            post.save()

            res.json('OK')
        }
    })
})*/