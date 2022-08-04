import React from 'react'
import styles from '../styles/store.module.css'

function Store() {

  const getDirections =() =>{
    window.open("https://www.google.com/maps/dir//vintage+inspired/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80c2bd3afb4cab1b:0xbb359721cfb2243?sa=X&ved=2ahUKEwjtmtOC7Yv5AhWkKkQIHVmRDN4Q9Rd6BAh8EAQ")
    
  }
  return (
    <div className={styles.container}>
<div className={styles.storeimage}>
  
      <img src={'/Vintage Billboard.png'} className={styles.image}/>


</div>

<div className={styles.storeInfo}>
<h1> Vintage Inspired</h1>

<h1> Located at</h1>
<h1> 950 Gayley Avenue Westwood Village, CA 90024</h1>

</div>


<div className={styles.buttonSection}>

  <button className={styles.button} onClick={() => getDirections()}> Get Directions</button>

</div>
     
        </div>
  )
}

export default Store