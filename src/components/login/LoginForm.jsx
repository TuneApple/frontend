import React, {useContext} from 'react';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import {AuthContext} from "../../context";
import classes from './LoginLogout.module.css'
import postLogin from "../../API/Auth";


function setAccessToken(response, setIsAuth) {
    if (response.status === 200) {
        setIsAuth(true)
        const token = response.data.access_token
        const token_type = response.data.token_type
        localStorage.setItem('auth', 'true');
        localStorage.setItem('token', token);
        localStorage.setItem('token_type', token_type);

        return true;
    }
    localStorage.removeItem('auth');
    setIsAuth(false)

    return false;

}

const LoginForm = () => {
    const {setIsAuth} = useContext(AuthContext);

    const login = event => {

        event.preventDefault();
        const form_username = event.target[0].value
        const form_password = event.target[1].value

        const res = postLogin(form_username, form_password)
        res.then(function (response) {
            setAccessToken(response, setIsAuth)
        })
    };

    return (
        <div className={classes.container}>
            <form onSubmit={login} className={classes.form__login}>
                <Input type="text" placeholder="Логин"></Input>
                <Input type="password" placeholder="Пароль"></Input>
                <Button>Вход</Button>
            </form>
        </div>
        )

};

export default  LoginForm;