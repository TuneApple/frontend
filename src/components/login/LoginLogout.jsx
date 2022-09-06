import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";
import classes from './LoginLogout.module.css'


const LoginLogout = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const loginOut = event => {
        event.preventDefault();
        setIsAuth(false);
        localStorage.removeItem('auth')

    }
    if (isAuth) {
        return (
            <button
                onClick={loginOut}
            >Выйти</button>
        );
    } else {
        return (
            <div className={classes.login}>
                <Link to="/registry">Регистрация</Link>
                <Link to="/login">Войти</Link>
            </div>
        );
    }
};

export default LoginLogout;