import React from 'react'
import styles from '../styles/success.module.css'
import { useRouter } from 'next/router'


function Success() {

    const router = useRouter()

    const goHome = () =>{
        
        console.log("Go Home")
        router.push('/')
    }
  return (
    <div className={styles.container}>
        
        <div className={styles.successfulPage}>
          
      <h1>
     WELCOME TO THE CLUB!
      </h1>

      <h1 className={styles.codeText}>
     Your member discount dode is : <p className={styles.boldCode}> VIMEMBER20 </p> 
      </h1>
      
      
      <button onClick={goHome} className={styles.button}> OK</button>
      
    </div>
        
        </div>
  )
}

export default Success