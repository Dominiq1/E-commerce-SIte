import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { commerce } from '../api/commerce'
import Item from '../../Components/item'

import Loader from '../../Components/Spinner'
import styles from '../../styles/Home.module.css'

import { motion, useMotionValue, useTransform, useViewportScroll, scrollY } from 'framer-motion'

function Category({categorySlug}) {

    const router = useRouter()

    const categoryPage = router.query.categorySlug


    const [categoryTitle, setCategoryTitle] = useState("")


    const [categoryImage, setCategoryImage] = useState("")

    const [newArrivals, setNewArrivals] = useState([])

    const [loading, setLoading] = useState(false)
  
    const [Sunglasses , setSunglasses] = useState([])



  
    //Raw Category List 
    const newArrivalCards = newArrivals.map((item) => <li key={item.sku}>
     <Item url={item.assets[0].url} id={item.id} name={item.name} price={item.price.formatted_with_symbol}/>
 
    </li>)
  
  //filtered List 
  const sunglassesList =  Sunglasses.map((item) => <li key={item.sku}>
  <div className={styles.miniSqaure}>
  
  
  <div className={styles.imageBox}>
    <img src={item.assets[0].url} alt={'/vicircle.PNG'} className={styles.itemImage}/>
  
  
  </div>
         
            <h1 className={styles.itemText}>
                      {item.name.substring(0, 35)}
            </h1>
  
            <h1 className={styles.itemText}>
             {String(item.price.formatted_with_symbol)}
            </h1>
  
        <h1 className={styles.shopButton}>
        Add to cart
        </h1>
      </div>
  </li>)



const setCategory = (categoryTitle) =>{


  switch(categoryTitle) {
    case 'jacket':
      setCategoryTitle("Jackets")
      setCategoryImage("/jackets.jpg")
       break;

  case 'tshirt':
      setCategoryTitle("T-Shirts")
      setCategoryImage("/tshirtsmania.jpg")
      break;
  case 'sweatshirt':
     setCategoryTitle("Sweatshirts")
     setCategoryImage("/sweatshirtsmania.jpg")
      break;
  case 'sunglass':
 
    setCategoryTitle("Sunglasses")
    setCategoryImage("/sunglasses.jpg")
          break;
  case 'denimjacket':
             setCategoryImage("/denim.jpg")
            setCategoryTitle("Denim Jackets")
            
             break;
  case 'pant':
    setCategoryTitle("Pants")
    setCategoryImage("/jeans.jpg")
    
        break;
    
    

  case 'All Vintage Inspired':
      setCategoryTitle("All VI")
      setCategoryImage("/drip.png")
      return 'bar';
    default:
      return 'foo';
  }

  
}
  
  const listNewArrivals = async() =>{

    
      if (categoryPage){


        setCategory(categoryPage)
        await commerce.products.list({
          category_slug: [categoryPage],
          limit: 40
          }).then(res=>{
        
          setNewArrivals(res.data)
          setLoading(false)
        
        
        
          }).catch(err=>{
            console.log(err)
          // alert("Error fetching items")
        
          })
      }else{ 
        setCategory("All Vintage Inspired")
        await commerce.products.list({
          limit: 40
          }).then(res=>{
        
          setNewArrivals(res.data)
          setLoading(false)
        
        
        
          }).catch(err=>{
            console.log(err)
          // alert("Error fetching items")
        
          })

      }


  }
  
    
  useEffect( () => {

    setLoading(true)
  
    console.log("Looking at category")
    //Set SLug info
    listNewArrivals()
    
 
    return () => {
      
    }
  }, [])
  
  
    return (
  
    <div className={styles.blackContainer}>
  
              <div className={styles.titleBar}>
          
              <div className={styles.searchHelpers}>
              {/* add image */}
              <img className={styles.image} src={categoryImage}/>
               </div>


            <h1 className={styles.topTitle}>
               {categoryTitle} → {loading} 
            </h1>

                



            {loading ?   (<Loader/>):(  
            <div className={styles.miniSquareSection}>
                <ul className={styles.noLines}>{newArrivalCards}</ul>
            </div>)}    

           
      
  
    
  
      </div>
  
  
  
      </div>
    )
}

export default Category