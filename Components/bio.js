import React from 'react'
import styles from '../styles/Home.module.css'


function Bio(props) {
  return (
    <div className={styles.bio}>

<div className={styles.bioImageSection} >

<img className={styles.bioPic}  src={props.bioPic} /> 

</div>
<div className={styles.bioTextSection} >

<p className={styles.bioText} > {props.bioText}  </p>
</div>

      </div>
  )
}

export default Bio