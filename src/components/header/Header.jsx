import React from 'react';
import logo_Telegram from '../../img/telegram_withe.svg'
import logo_TikTok from '../../img/tiktok_white.svg'
import logo_tune from '../../img/tune.png'
import burger from '../../img/burger_icon.jpg'
import classes from './Header.module.css'
import CitiesBox from "../citiesBox/citiesBox";
import LoginLogout from "../login/LoginLogout";

const Header = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.mobile}>
                <div className={classes.mobile__container_left}>
                    <button className={classes.mobile__container_left_button}
                            style={{ backgroundImage:`url(${burger})`, backgroundSize: `100%`}}
                    ></button>


                </div>
                <div className={classes.mobile_header} style={{ backgroundImage:`url(${logo_tune})`, backgroundSize: `70%`}}>
                </div>
                <div className={classes.mobile__container_right}>
                    <a href="/" className={classes.mobile__container_right_img}
                         style={{ backgroundImage:`url(${logo_Telegram})`, backgroundSize: `70%`}}>logo</a>
                    <a href="/" className={classes.mobile__container_right_img}
                         style={{ backgroundImage:`url(${logo_TikTok})`, backgroundSize: `70%`}}>logo</a>


                </div>

            </div>

            <div className={classes.content}>
                <div className={classes.content__up__wrapper}>

                    <div className={classes.content__up}>
                        <div className={classes.content__up__links}>
                            <a href="/">Главная</a>
                            <a href="/">Trade-in</a>
                            <a href="/src/pages">Ремонт</a>
                            <a href="/src/pages">Доставка и оплата</a>
                            <a href="/src/pages">Магазины</a>
                            <a href="/src/pages">Контакты</a>

                        </div>
                        <div className={classes.content__up__logo}>
                            <div className={classes.content__up__logo__img}
                                 style={{ backgroundImage:`url(${logo_Telegram})`, backgroundSize: `70%`}}></div>
                            <div className={classes.content__up__logo__img}
                                 style={{ backgroundImage:`url(${logo_TikTok})`, backgroundSize: `70%`}}></div>

                        </div>
                    </div>
                </div>
                <div className={classes.content__down__wrapper}>
                    <div className={classes.content__down}>
                        <div className={classes.content__down__logo}>

                        </div>
                        <div className={classes.content__down__links}>
                            <a href="/src/pages">Смартфоны</a>
                            <a href="/src/pages">Планшеты</a>
                            <a href="/src/pages">Часы</a>
                            <a href="/src/pages">Ноутбуки</a>
                            <a href="/src/pages">Наушники</a>
                            <a href="/src/pages">Аксессуары</a>

                        </div>
                        <div className={classes.content__down__nav}>
                            <div className={classes.content__down__nav__login}>
                                <LoginLogout/>
                            </div>
                            <div className={classes.content__down__nav__region}>
                                <CitiesBox/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;