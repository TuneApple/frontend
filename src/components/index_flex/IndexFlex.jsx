import React from 'react';
import img_iphone from '../../img/main_logo/iphone.png'
import img_ipad from '../../img/main_logo/ipad.png'
import img_mac from '../../img/main_logo/mac.png'
import img_airpods from '../../img/main_logo/airpods.png'
import img_watch from '../../img/main_logo/watch.png'
import img_other from '../../img/main_logo/other.png'
import classes from './IndexFlex.module.css'
import {Link} from "react-router-dom";


const IndexFlex = () => {
    return (

    <div className={classes.wrap}>
        <div className={classes.catalog}>
            <div className={classes.cell}>
                <Link to="/category">
                <div className={classes.cell_inside}
                     style={{ backgroundImage:`url(${img_iphone})`,
                         backgroundSize: `90%`}}>
                </div>
                <div className={classes.cell__text}>
                    <p>iPhone</p>

                </div>
                </Link>
            </div>
            <div className={classes.cell}>
                <a href="/">
                    <div className={classes.cell_inside} style={{ backgroundImage:`url(${img_ipad})`,
                        backgroundSize: `100%`}}>

                    </div>
                    <div className={classes.cell__text}>
                        <p>iPad</p>

                    </div>
                </a>
            </div>
            <div className={classes.cell}>
                <a href="/">
                    <div className={classes.cell_inside} style={{ backgroundImage:`url(${img_mac})`,
                        backgroundSize: `90%`}}>

                    </div>
                    <div className={classes.cell__text}>
                        <p>MacBook</p>

                    </div>
                </a>
            </div>
            <div className={classes.cell}>
                <a href="/">
                    <div className={classes.cell_inside} style={{ backgroundImage:`url(${img_airpods})`,
                        backgroundSize: `70%`}}>

                    </div>
                    <div className={classes.cell__text}>
                        <p>AirPods</p>

                    </div>
                </a>
            </div>
            <div className={classes.cell}>
                <a href="/">
                    <div className={classes.cell_inside} style={{ backgroundImage:`url(${img_watch})`,
                        backgroundSize: `100%`}}>

                    </div>
                    <div className={classes.cell__text}>
                        <p>Watch</p>

                    </div>
                </a>
            </div>
            <div className={classes.cell}>
                <a href="/">
                    <div className={classes.cell_inside} style={{ backgroundImage:`url(${img_other})`,
                        backgroundSize: `90%`}}>

                    </div>
                    <div className={classes.cell__text}>
                        <p>Аксессуары</p>

                    </div>
                </a>
            </div>
        </div>
    </div>
    );
};

export default IndexFlex;