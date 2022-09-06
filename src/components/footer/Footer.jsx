import React from 'react';
import classes from './Footer.module.css'
import logo_tune from '../../img/tune.png'
import logo_Telegram from "../../img/telegram_withe.svg";
import logo_TikTok from "../../img/tiktok_white.svg";



const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <a href="/" style={{ backgroundImage:`url(${logo_tune})`, backgroundSize: `70%`}}>logo</a>
                </div>
                <div className={classes.link__container}>
                    <div className={classes.links}>
                        <h2> Меню</h2>
                        <a href="/">Trade-in</a>
                        <a href="/src/pages">Ремонт</a>
                        <a href="/src/pages">Доставка и оплата</a>
                        <a href="/src/pages">Магазины</a>
                        <a href="/src/pages">Контакты</a>
                    </div>

                    <div className={classes.catalog}>
                        <h2>Каталог</h2>

                        <a href="/">Главная</a>
                        <a href="/">Trade-in</a>
                        <a href="/src/pages">Ремонт</a>
                        <a href="/src/pages">Доставка и оплата</a>
                        <a href="/src/pages">Магазины</a>
                        <a href="/src/pages">Контакты</a>
                    </div>

                    <div className={classes.documentation}>
                        <h2> Документация</h2>

                        <a href="/">Политика конфиденциальности</a>
                        <a href="/">Оферта</a>
                    </div>

                </div>
                <div className={classes.phone}>

                    <div className={classes.phone__links}>
                        <a href="/" className={classes.phone__links_logo}
                           style={{ backgroundImage:`url(${logo_Telegram})`, backgroundSize: `70%`}}>logo</a>
                        <a href="/" className={classes.phone__links_logo}
                           style={{ backgroundImage:`url(${logo_TikTok})`, backgroundSize: `70%`}}>logo</a>
                    </div>

                    <div className={classes.phone__number}>
                        <a href="tel:+1234567890" >+7 (932) 222-54-45</a>
                    </div>

                    <div className={classes.phone__time}>
                        <p>Ежедневно <br/>
                            С 12:00 до 21:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;