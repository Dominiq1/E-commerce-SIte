import React from "react"
import styles from '../styles/Home.module.css'
import TopHeader from "./header"
import Footer from "./footer"


const Layout = ({children}) => {

    return ( 
    <div className={styles.background}>

            <TopHeader/>

        {children}

        <Footer/>

    </div>


    )
}


export default Layout