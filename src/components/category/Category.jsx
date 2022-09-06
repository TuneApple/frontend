import React, {useState} from 'react';
import classes from './Category.module.css'
import Products from "./Filter/Filter";
import img_iphone from "../../img/main_logo/iphone.png";

const data = [
    {
        name: 'iPhone 13 Pro Blue',
        img: img_iphone,
        memory: '512',

    },
    {
        name: 'iPhone 13 Pro Green',
        img: img_iphone,
        memory: '128',
    },
    {
        name: 'iPhone White',
        img: img_iphone,
        memory: '512',
    },
    {
        name: 'iPhone 13 Pro Sierra Blue',
        img: img_iphone,
        memory: '128',
    },
    {
        name: 'iPhone 12 Plus Blue',
        img: img_iphone,
        memory: '512',
    },
    {
        name: 'iPhone 13 Pro Blue',
        img: img_iphone,
        memory: '128',
    },
    {
        name: 'iPhone 13 Pro Green',
        img: img_iphone,
        memory: '512',
    },
    {
        name: 'iPhone White',
        img: img_iphone,
        memory: '128',
    },
    {
        name: 'iPhone 13 Pro Sierra Blue',
        img: img_iphone,
        memory: '512',
    },
    {
        name: 'iPhone 12 Plus Blue',
        img: img_iphone,
        memory: '128',
    },

]
const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};


const Category = () => {
    const [selectedSort, setSelectedSort] = useState('')
    const [posts, setPosts] = useState(data)
    const sortPost = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort(
            (a, b) => a[sort].localeCompare(b[sort])
        ))
    }
    return (
        <div className={classes.wrap}>
            <div className={classes.filter}>
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                defaultValue="Сортир"
                options={[
                    {value: 'name', name: 'По имени'},
                    {value: 'memory', name: 'По памяти'},
                ]}
                />

            </div>
            <div className={classes.catalog}>
                <Products posts={posts}/>
            </div>
        </div>
    );
};


export default Category;