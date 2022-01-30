const { Router } = require('express')
const Actuals = require('../models/ActualModel.js');

//TODO: Роут для актуального
const ActualRouter = Router();

//TODO: Написать запрос на получение списка актуального
ActualRouter.get('/', (req, res) => {
    Actuals.find({}, (error, actuals) => {
        if (error) { res.send('Актуальные темы не найдены') }

        else {
            const actualsArray = actuals.map((actual) => {
                const text = `<div style="background-color: rgba(25, 220, 128, 0.3); padding: 30px; padding-left: 40px; margin: 10px; width: 150px; border-radius: 215px"><i>${actual.theme}</i> <h2>${actual.title}</h2> <p>${actual.tweets} твитов  <br> ${actual.comments} комментариев</p></div>`
                return text
            })

            let allActuals = ''
            for (let actual of actualsArray) {
                allActuals += actual
            }

            res.send(allActuals)
        }
    })
})

module.exports = ActualRouter;