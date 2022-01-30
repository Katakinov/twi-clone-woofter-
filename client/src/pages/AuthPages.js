import React, {useContext, useEffect, useState} from "react";
import "./AuthPages.css";
import { useHttp } from "../hooks/http.hook";
import { UseMessage } from "../hooks/message.hook";
import PetsIcon from '@material-ui/icons/Pets';
import { AuthContext } from "../context/AuthContext"
import BigIcon from '../trifle/BigIcon.js'

export const AuthPages = () => {

    const auth = useContext(AuthContext)
    const {token} = useContext(AuthContext)
    const message = UseMessage()

    const {loading, error, request, clearError} = useHttp()

    const [form, setForm] = useState({
        email: '', name: '', password: ''
    })

    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            //console.log('Data', data)
            message(data.message)
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            //const current = await request('/find/current', 'GET', null, { Authorization: `Bearer ${token}` })
            auth.login(data.token, data.userId, data.userName)
            //console.log(current)
        } catch (e) {}
    }

    return (
        <div className="authPages">
            <div className="containerForms">
                <BigIcon Icon={PetsIcon} className="petsIconBig"/>                <div className="content">
                    <div className="formTitle">Авторизация/Регистрация</div>
                    <div className="formInput">

                        <label htmlFor="email">Email</label>
                        <input 
                            placeholder={"Введите email"}
                            id="email"
                            type="text"
                            name="email"
                            className="secondLine"
                            value={form.email}
                            onChange={changeHandler}
                        />

                        <label htmlFor="name">Имя</label>
                        <input 
                            placeholder={"Введите Имя"}
                            id="name"
                            type="text"
                            name="name"
                            className="secondLine"
                            value={form.name}
                            onChange={changeHandler}
                        />
                        
                        <label htmlFor="email">Пароль</label>
                        <input 
                            placeholder={"Введите пароль"}
                            id="password"
                            type="password"
                            name="password"
                            className="passLine"
                            value={form.password}
                            onChange={changeHandler}
                        />
                        

                    </div>
                    <div className="formsUnder">
                        
                        <button 
                        className="confirmButton"
                        disabled={loading}
                        onClick={loginHandler}
                        >
                            Войти                            
                        </button>

                        <button
                        className="confirmButton1"
                        onClick={registerHandler}
                        disabled={loading}
                        >
                            Зарегистрироваться
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}