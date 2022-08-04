import React from 'react'
import styles from '../styles/contactUs.module.css'
import ContactPage from '../Components/Contact'

function ContactUs() {
  return (
    <div className={styles.container}>
        <div className={styles.mainChildSection}>
        <ContactPage/>
        </div>

        </div>
  )
}

export default ContactUs