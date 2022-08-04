import React from 'react'
import styles from '../styles/spinner.module.css'
import { Spinner } from 'grommet'




function Loader() {
  return (
    <div className={styles.spinner}> 
        <Spinner color={"lightblue"} size={"large"}/>
    </div>
  )
}

export default Loader