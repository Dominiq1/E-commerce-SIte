import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Countdown from 'react-countdown';

import { Cart } from 'grommet-icons';
import { motion, useMotionValue, useTransform, useViewportScroll, scrollY } from 'framer-motion'



function DropCountdown() {

    const [isCounting, setCountdown ] = useState(false)



    const { scrollY, scrollYProgress } = useViewportScroll()

    const opacity = useTransform(scrollY, [1, 500], [1, 0])

    useEffect(() => {
      setCountdown(true)
    
      return () => {
        
      }
    }, [])
    
  return (
         <motion.div style={{opacity:opacity}} className={styles.countdownSection}>
        <div className={styles.countdownImage}>
            {/* <img className={styles.image} src={'/building.gif'}/> */}



<h1 className={styles.dropText}>  <Cart/>... Coming Soon </h1>
           {isCounting? (<Countdown  date={1658710800000} />): (null)} 


        </div>
        
        
        
        </motion.div>
  )
}

export default DropCountdown