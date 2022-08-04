import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactFullpage from '@fullpage/react-fullpage'
import { commerce } from '../lib/commerce'
import ItemsCarousel from '../Components/itemsCarousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Home from '../Components/Home'
import Contact from '../Components/Contact'
import About from '../Components/About'
import Who from '../Components/Who'
import Store from '../Components/store'
import { useState } from 'react'
import DropCountdown from '../Components/countdown'





export default function App() {

  const [siteIsLive, setSiteLive] = useState(true)


  return (
    <>
            <Head>

          <title>Vintage Inspired</title>
          <meta name="description" content="The largest archive on vintage fashion." />
              <link rel="icon" href="/vicircle.PNG" /> 

          <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com"  />

            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@800&family=Manrope:wght@300&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
          
          
            </Head>
    {siteIsLive? ( <>
            <Home/>
            <About/>
            <Who/>
            <Store/>
            <Contact/>
            </>

      ): (
        <>
        
          <DropCountdown/>
    
             {/* <Countdown/> */}
              <Store/>
              <Contact/>
      
       </>)}

   </>
     
       

  )
}
