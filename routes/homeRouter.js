const { Router } = require('express');

//const app = express();

const homeRouter = Router();

//Для чтения тела POST запроса
//const urlencodedParser = express.urlencoded({extended: false});

homeRouter.get('/', (req, res) => {
    res.send('Hello World!');
})

/*homeRouter.post('/', urlencodedParser, (req, res) => {
    const name = req.body.name;
    const responseMessage = "Hello " + name + "!";
    res.send(responseMessage);
})*/

module.exports = homeRouter;