import React, {useContext} from 'react';
import classes from './citiesBox.module.css'
import {RegionContext} from "../../context";


const CitiesBox = ({children, ...props}) => {
    const {region, setRegion} = useContext(RegionContext)

    const newRegion = event => {
        event.preventDefault();
        localStorage.setItem('region', event.target.value)
        setRegion(event.target.value)

    }



    return (
        <select value={region} id="select_some_type" className={classes.container__selected} onChange={newRegion}>
            <option value='Санкт-Петербург'>Санкт-Петербург</option>
            <option value='Москва' selected>Москва</option>
        </select>

    );
};

export default CitiesBox;