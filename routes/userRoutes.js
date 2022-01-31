const express = require('express');
const { Router } = require('express')
const User = require('../models/User.js');
const bodyParser = require('body-parser');
const authMiddleware = require('../middleware/auth.middleware')
const jwt = require('jsonwebtoken')
const config = require('config')
//const localStorage = require('localeStorage')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const UserRouter = Router();

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
// UserRouter.get('/:id', (req, res) => {
//     Auth.findOne({ id: req.params.id }, (error, user) => {
//         if (error) { res.send('Пользователь не найден') }

//         else { user != null ? res.send(`<div style="background-color: rgba(25, 220, 128, 0.3); padding: 30px; padding-left: 40px; margin: 10px; width: 450px; border-radius: 215px"><h1>${user.name}</h1><h3>${user.nickname}</h3><h2>${user.description}</h2><p>Дата регистрации: ${user.registration.day} * ${user.registration.month} * ${user.registration.year}</p></div>`) : res.send('Такого ID нет') }
//     })
// })

UserRouter.get('/email/:email', (req, res) => {
    User.findOne({ email: req.params.email }, (error, user) => {
        if (error) { res.send('Пользователь не найден') }

        else {
            console.log(user);
            res.json(user)
        }
    })
})

UserRouter.get('/current/:id', async (req, res) => {

    User.findOne({ _id: req.params.id }, (error, user) => {
        if (error) { res.send('Пользователь не найден') }

        else {
            console.log(user);
            res.json(user)
        }
    })

    /*try {
        //const currentUser = await User.findOne({_id: req.params.id})
        await User.findOne({_id: req.params.id}, (error, user))
        res.json(user)
    } catch (e) {
        res.status(500).json({message: "Что то пошло не так"})    
    }*/
})

//TODO: Написать запрос на получение всех пользователей
/*UserRouter.get('/current',
    async (req, res) => {
        try {
            //userrr = localStorage.getItem('id')
            //userrr = "sda"
            //res.send({message: tryGet})
            const userData = req.body
            const user = await User.findOne({_id: userData})
            //const token = jwt.sign({id: user.id}, config.get("jwtSecret"), {expiresInL: "1h"})
            return res.json({
                user: {
                    email: user.email,
                    name: user.name,
                }
            })
        } catch(e) {
            console.log(e)
            res.send({message: "server error"})
        }
})*/

module.exports = UserRouter;