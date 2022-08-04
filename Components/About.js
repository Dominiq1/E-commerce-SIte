import React from 'react'

import styles from '../styles/Home.module.css'

import { motion, useMotionValue, useTransform, useViewportScroll, scrollY } from 'framer-motion'
import Link from 'next/link'
function About() {


  const { scrollY, scrollYProgress } = useViewportScroll()

  const opacity = useTransform(scrollY, [20, 500, 3700], [0,1, 0])
  return (
    <div className={styles.container}>
    
    
      <main className={styles.main}>

        <motion.div className={styles.Section} style={{opacity:opacity}}>
       
        
         {/* <h1 className={styles.aboutHeadline}> Its smooth Sailing with Us</h1>
       <h1 className={styles.aboutText}> Orlando Santiago is the managing partner with Brown Peak Capital. He has been in the financial service industry since 2019. Orlando has professional experience with Merrill Lynch and J.P. Morgan most recently where he was a Vice President in the Portfolio Management arm of the bank. Orlando is educated from the University of California Los Angeles (UCLA).  </h1> */}

<div className={styles.squaresSection}>
<Link href={`/categories/${"tshirt"}`}>

<div className={styles.square}>
<img className={styles.Categoryimage} src={'tshirtsmania.jpg'}/>
  
  <h1 className={styles.categoryText}>
  T-SHIRTS
  </h1>

</div>
</Link>




<Link href={`/categories/${"sweatshirt"}`}>
<div className={styles.square}>
<img className={styles.Categoryimage} src={'sweatshirtsmania.jpg'}/>
  
  <h1 className={styles.categoryText}>
SWEATSHIRTS
  </h1>

</div>
</Link>

</div>

<div className={styles.squaresSection}>


<Link href={`/categories/${"jacket"}`}>
<div className={styles.square}>

  <img className={styles.Categoryimage} src={'jackets.jpg'}/>

  <h1 className={styles.categoryText}>
 JACKETS
  </h1>

</div>

</Link>

<Link href={`/categories/${"denimjacket"}`}>
<div className={styles.square}>
 <img className={styles.Categoryimage} src={'denim.jpg'}/>
  
  <h1 className={styles.categoryText}>
DENIM JACKETS
  </h1>
</div>

</Link>

</div>



<div className={styles.squaresSection}>


<Link href={`/categories/${"sunglass"}`}>
<div className={styles.square}>
<img className={styles.Categoryimage} src={'sunglasses.jpg'}/>
  
  <h1 className={styles.categoryText}>
SUNGLASSES
  </h1>

</div>
</Link>

<Link href={`/categories/${"pant"}`}>
<div className={styles.square}>

<img className={styles.Categoryimage} src={'jeans.jpg'}/>
  
  <h1 className={styles.categoryText}>
 PANTS
  </h1>

</div>
</Link>


</div>

        </motion.div>

      </main>

      </div>
  )
}

export default About