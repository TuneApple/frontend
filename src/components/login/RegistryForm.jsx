import React from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const RegistryForm = () => {
    return (
        <div>
            <Input type="password" placeholder="Логин"></Input>
            <Input type="password" placeholder="Пароль"></Input>
            <Input type="password" placeholder="Пароль"></Input>
            <Input type="tel" placeholder="Телефон"></Input>
            <Button>Войти</Button>
        </div>
    );
};

export default RegistryForm;