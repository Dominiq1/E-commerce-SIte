import React from 'react'
import styles from '../styles/Home.module.css'

import { motion, useMotionValue, useTransform, useViewportScroll, scrollY } from 'framer-motion'
import { Down } from 'grommet-icons'


function Home() {



  const { scrollY, scrollYProgress } = useViewportScroll()
  
  const opacity = useTransform(scrollY, [0, 200], [1,0])


  return (
    <div className={styles.container}>
    
    
    <main className={styles.main}>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} className={styles.Section} style={{opacity:opacity}}>
        {/* <img className={styles.SectionImage} src="https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/17/20/bella_hadid_26.jpg" />
      */}

{/* <img className={styles.SectionImage} src='/brownpeakImage.jpg' /> 
 */}


    {/* FULL SCREEN IMAGE  */}


       <div className={styles.fulscreenImage}>

       <img className={styles.image} src={'/header.png'}/>
       </div>


       <div className={styles.squaresSection}>


<div className={styles.rectangle}>
  <h1 className={styles.centertext}>
   SHOP BY CATEGORY
  </h1>

</div>
</div>
       

       




      </motion.div>

    </main>

    </div>
  )
}

export default Home