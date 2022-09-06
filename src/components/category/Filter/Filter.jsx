import img_iphone from "../../../img/main_logo/iphone.png";
import classes from "../Category.module.css";
import React, {useState} from "react";


const category_filter = {
    colors: ['Green', 'Yellow', 'Black', 'Blue' ],
    cost: ['10000', '90500'],
    memory: ['128', '512', '1ТБ'],
}


const Products = ({posts}) => {
    return (
        posts.map(product =>
            (
                <div className={classes.cell}>
                    <a href="/">
                        <div className={classes.cell_inside}
                             style={{ backgroundImage:`url(${product.img})`,
                                 backgroundSize: `90%`}}>
                        </div>
                        <div className={classes.cell__text}>
                            <p>{product.name}   {product.memory}</p>

                        </div>
                    </a>
                </div>
            )
        )
    )
}

const Memory = () =>{

    return (
        category_filter.memory.map(category =>
            (
                <div>
                    <input type="checkbox" id="contactChoice2"
                           name="contact" value="phone"></input>
                    <label htmlFor="contactChoice2">{category}</label>
                </div>
            ))
    )
}

const Color = () =>{
    return (
        category_filter.colors.map(category =>
            (
                <div>
                    <input type="checkbox" id="contactChoice2"
                           name="contact" value="phone"></input>
                    <label htmlFor="contactChoice2">{category}</label>
                </div>
            ))
    )
}

export default Products;