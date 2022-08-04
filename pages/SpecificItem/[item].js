import React, {useEffect, useState} from 'react'
import { Router, useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { commerce } from '../api/commerce'
import { Notification } from 'grommet'

function Item({item}) {

   const router = useRouter() 

   const [currentImage, setCurrentImage] = useState(0)

   const [ notification, setNotification] = useState(false)

   const [ itemAdded, setItemAdded] = useState(false)

   const [itemSize, setItemSize ] = useState("N/A")

   const [loading, setLoading] = useState(false)
   const econItem = router.query.item
   const [viewedItem, setItem] = useState({})

   const addItemToCart = async (theItem) =>{

    setNotification(true)

    console.log("Product Id to add")
    setItemAdded(true)
    // const item = await commerce.cart

//uncomment
     const item = await commerce.cart.add(theItem, 1).then(res=>{
       console.log("Successfully added Item to cart")
       console.log(res)

     })


    //  const clear = await commerce.cart.refresh().then(res=>{
    //   console.log("successfully refreshed cart.")
    //  })


   }

   const switchImage = (direction) =>{

if (direction =="up"){
  if (currentImage > 3){
    setCurrentImage(0)
  }else{
    setCurrentImage(currentImage+1)
  }
}else{
  if (currentImage < 1){
    setCurrentImage(4)
  }else{
    setCurrentImage(currentImage-1)
  }
}

  
 



   }

  
   useEffect(() => {


    //if item id is present..
    if (econItem){

      //Retreive product with item ID
      commerce.products.retrieve(econItem).then((product) =>{
        console.log("Found Product")
        console.log(product)

        for(let i = 0; i> product.categories.length; i++){

          

          if( product.categories[i].slug =="SizeLarge"){
           
  
          }else if (product.categories[i].slug =="SizeSmall") {


          }
          else if (product.categories[i].slug =="SizeMedium") {

            
          }
          else if (product.categories[i].slug =="Size") {

            
          }
          else if (product.categories[i].slug =="SizeLarge") {

            
          }
          else if (product.categories[i].slug =="SizeLarge") {

            
          }

        }

       






        setItem(product)
      }).catch(err=>{
        // alert("Commerce.js is down right now, try again later.")
       })
  
    }else{ 
      console.log("Log SKU...")
      router.push('/')
    }

   

 

  },[]);

   
  return (
    <div className={styles.blackContainer}>

      {viewedItem.name? ( 
      
      <div className={styles.itemSection}>



<div className={styles.imageSection}>


 <img className={styles.itemImage} src={viewedItem.assets[currentImage].url}/>


 </div >
 <div className={styles.saleDetails}>
  <p onClick={() =>switchImage("up")} className={styles.scrollButton}> {`<`}</p>
  <p onClick={() =>switchImage("down")} className={styles.scrollButton}> {`>`}</p>


  </div>


 <div className={styles.saleDetails}>
  <p className={styles.priceDetails}> {`Price:${viewedItem.price.formatted_with_symbol} `}</p>
  <p className={styles.priceDetails}> {`Size:${itemSize} `}</p>


  </div>
  

<div className={styles.descriptionBox}>
            {/* Item Name */}
      <p className={styles.hello}>

      {viewedItem.name}

        </p >
     {/* Item description */}
      <p className={styles.description}>

      {viewedItem.description}

        </p >

  </div>



  {notification? (<Notification
  title="Nice!"
  toast={false}
  message="Item Added to Cart!"
  onClose={() => setNotification(false)}
/>): (null) }


{itemAdded? (<div className={styles.shopButtonSection}>

<button className={styles.addedIcon} onClick={() =>addItemToCart(econItem)}> Added  </button>


</div>) : (<div className={styles.shopButtonSection}>

<button className={styles.shopButton} onClick={() =>addItemToCart(econItem)}> Add to Cart </button>


</div>
)}



  

  </div>): (null)}



     

        
        </div>
  )
}

export default Item