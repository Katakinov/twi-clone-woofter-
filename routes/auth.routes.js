const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const User = require('../models/User.js')
const bodyParser = require('body-parser');

const router = Router()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// /api/register
router.post(
    '/register', urlencodedParser,
    //валиадация
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        //отлов ошибок валиадации
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        //получение данных с фронта
        const {email, name, password} = req.body 

        //проверка не существования пользователя с таким же эмейлом
        const candidate = await User.findOne({ email })

        if (candidate){
            return res.status(400).json({ message: "Такой пользователь уже существует"})
        }

        //хэширование пароля
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, name, password: hashedPassword })

        //сохранение пользователя
        await user.save()
        res.status(201).json({ message: 'Пользователь создан'})
        res.send("Пользователь создан" + user)

    //отлов ошибок вообще
    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
        res.send("ошибка в конце")
    }
})

// /api/login
/*router.post(
    '/register',
    //валиадация
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        //отлов ошибок валиадации
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        //получение данных с фронта
        const {email, password} = req.body 

        //проверка не существования пользователя с таким же эмейлом
        const candidate = await User.findOne({ email })

        if (candidate){
            return res.status(400).json({ message: "Такой пользователь уже существует"})
        }

        //хэширование пароля
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword })

        //сохранение пользователя
        await user.save()
        res.status(201).json({ message: 'Пользователь создан'})

    //отлов ошибок вообще
    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})*/



// /api/login
router.post(
    '/login',
    //условия валидности
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
    try {
        //отлов ошибок валидации
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
            })
        }

        //получение данных с фронта
        const {email, password, name} = req.body

        //поиск зарегистрированного пользователя по эмейлу в базе
        const user = await User.findOne({ email })

        if (!user){
            return res.status(400).json({ message: 'Пользователь не найден'})
        }

        //проверка пароля
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
        }

        //токен
        const token = jwt.sign(
            { userId: user.id,
              userName: user.name },
            //секретный ключ
            config.get('jwtSecret'),
            //сохранение авторизации в течении часа
            { expiresIn: '1h' }
        )

        //при успешном входе передача данных
        res.json({ token, userId: user.id, userName: user.name })

    //отлов ошибок вообще вообще
    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})

module.exports = router;