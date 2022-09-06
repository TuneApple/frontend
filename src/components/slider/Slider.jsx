import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./TopSlider.module.css"
import image_1 from "../../img/news/image_1.svg"
import image_2 from "../../img/news/image_2.svg"
import image_3 from "../../img/news/image_3.svg"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{...style,
                display: "block",
                width: "50px",
                height: "50px",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{...style,
                display: "block",
                width: "50px",
                height: "50px",
                marginLeft: "30px",
                zIndex: "1",
            }}
            onClick={onClick}
        />
    );
}
export default class TopSlider extends Component {
        render() {
            const settings = {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: <SamplePrevArrow/>,
                nextArrow: <SampleNextArrow/>,
                autoplay: true,
                speed: 800,
                autoplaySpeed: 3500,
                cssEase: "linear",
                appendDots: dots => (
                    <div
                        style={{
                            backgroundColor: "#000",
                            padding: "10px",

                        }}
                    >
                        <ul style={{ margin: "4px" }}> {dots} </ul>
                    </div>
                ),
                customPaging: i => (
                    <div>
                        <div style={{
                            width: "30px",
                            height: "10px",
                            margin: "10px",
                            backgroundColor: "white"
                        }}>

                        </div>
                    </div>
                )
            }
            return (
                <Slider {...settings} className={classes.Top}>

                    <div className={classes.slide}>
                        <div className={classes.container}>

                            <div className={classes.caption}>
                                <p className={classes.caption__head}>iPhone 14 Pro</p>
                                <p className={classes.caption__text}>Сильный мира сего</p>
                                <p className={classes.caption__link}><a href="/">Подробнее</a></p>
                            </div>
                            <img src={image_1} alt=""/>

                        </div>
                    </div>

                    <div className={classes.slide}>
                        <div className={classes.container}>

                            <div className={classes.caption}>
                                <p className={classes.caption__head}>iPhone 14 Pro</p>
                                <p className={classes.caption__text}>Сильный мира сего</p>
                                <p className={classes.caption__link}><a href="/">Подробнее</a></p>
                            </div>
                            <img src={image_2} alt=""/>

                        </div>
                    </div>

                    <div className={classes.slide}>
                        <div className={classes.container}>

                            <div className={classes.caption}>
                                <p className={classes.caption__head}>iPhone 14 Pro</p>
                                <p className={classes.caption__text}>Сильный мира сего</p>
                                <p className={classes.caption__link}><a href="/">Подробнее</a></p>
                            </div>
                            <img src={image_3} alt=""/>

                        </div>
                    </div>
                </Slider>
        );
    }
}
