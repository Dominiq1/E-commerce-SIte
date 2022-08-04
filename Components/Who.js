import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Bio from './bio'
import { commerce } from '../pages/api/commerce'
import Item from './item'


function Who() {

  const [newArrivals, setNewArrivals] = useState([])

  const [Sunglasses , setSunglasses] = useState([])


  const [cart, setCart] = useState({})




  const fetchCart = async () =>{

    await commerce.cart.retrieve().then(res=>{
      setCart(res)
    })






    // console.log("Cart")
    // console.log(cart)
  }


  const addItemToCart = async (productId) =>{

    console.log("Product Id to add")


    // const item = await commerce.cart

//uncomment
     const item = await commerce.cart.add(productId, 1).then(res=>{
       console.log("Successfully added Item to cart")
       console.log(res)
       window.location.reload()
       
     })


    //  const clear = await commerce.cart.refresh().then(res=>{
    //   console.log("successfully refreshed cart.")
    //  })


   }






  const fetchNewArrivals = async () =>{

    await commerce.products.list({
      limit: 4,
      sortDirection:  'asc',
      sortBy: 'name',
      category_slug: [ 'eighties','red']
    }).then(res=>{
      // console.log(res.data)
      setNewArrivals(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  const fetchSunglasses = async () =>{

    await commerce.products.list({
      limit: 4,
      category_slug: ['sunglass']
    }).then(res=>{
      // console.log(res.data)
      setSunglasses(res.data)
    }).catch(err=>{
      console.log(err)
    })
  
  
  }


  const newArrivalCards = newArrivals.map((item) =>
  
  <li key={item.sku}>
<Item url={item.assets[0].url} id={item.id} name={item.name} price={item.price.formatted_with_symbol}/>
  </li>
  )

const sunglassesList =  Sunglasses.map((item) => <li key={item.sku}>
<Item url={item.assets[0].url} id={item.id} name={item.name} price={item.price.formatted_with_symbol}/>
 
</li>)



  
useEffect(() => {


  console.log("load contents")
  //active users cart
  fetchCart()
  //new arrivals
  fetchNewArrivals()
  //sunglasses
  fetchSunglasses()
  


  return () => {
    
  }
}, cart)

console.log(cart)


  return (

  <div className={styles.blackContainer}>

    <div className={styles.titleBar}>


      <h1 className={styles.topTitle}>
        New Arrivals →
      </h1>


            
      <div className={styles.miniSquareSection}>
<ul className={styles.noLines}>{newArrivalCards}</ul>
      </div>


      <h1 className={styles.topTitle}>
      Sunglasses →
      </h1>


            
      <div className={styles.miniSquareSection}>
<ul className={styles.noLines}>{sunglassesList}</ul>
      </div>



 
      




    </div>



    </div>
  )
}

export default Who