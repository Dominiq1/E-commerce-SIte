import React from 'react'
import Slider from "react-slick";

import styles from '../styles/Home.module.css'

const  ItemsCarousel = ({}) => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className={styles.ItemSection}>
            <img className={styles.itemSliderImage} src="/bluelights.png"/>
         
            <button className={styles.buyButton} >Shop</button>
  
        </div>
        <div className={styles.Section}>
          <h3>2</h3>
        </div>
        <div className={styles.Section}>
          <h3>3</h3>
        </div>
        <div className={styles.Section}>
          <h3>4</h3>
        </div>
        <div className={styles.Section}>
          <h3>5</h3>
        </div>
        <div className={styles.Section}>
          <h3>6</h3>
        </div>
      </Slider>)
}
export default ItemsCarousel