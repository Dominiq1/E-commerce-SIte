import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import { commerce } from '../pages/api/commerce'
import Link from 'next/link'
import { Notification } from 'grommet'
function Item(props) {

  const [itemAdded, setItemAdded] = useState(false)
  const [ notification, setNotification] = useState(false)

  const addItemToCart = async (productId) =>{

    setNotification(true)

    console.log("Product Id to add")
    setItemAdded(true)
    // const item = await commerce.cart

//uncomment
     const item = await commerce.cart.add(productId, 1).then(res=>{
       console.log("Successfully added Item to cart")
       console.log(res)
      // window.location.reload()
       
     })


    //  const clear = await commerce.cart.refresh().then(res=>{
    //   console.log("successfully refreshed cart.")
    //  })


   }

  return (


    <div className={styles.miniSqaure}>

{notification? (   <Notification
  title="Nice! "
  color="red"
  message="Item Added to Cart!"
  onClose={() =>setNotification(false)}
/>): (null) }
    <Link href={`/SpecificItem/${props.id}`}>
        
        <div className={styles.imageBox}>
          <img src={props.url} alt={'/vicircle.PNG'} className={styles.itemImage}/>


        </div>
        </Link>

                  <h1 className={styles.itemText}>
                            {props.name.substring(0, 25)}
                  </h1>

                  <h1 className={styles.itemText}>
                  {String(props.price)}
                  </h1>


                  
  {itemAdded?(<h1  className={styles.addedIcon}>
      Added ✓
      </h1>):(<h1 onClick={() => addItemToCart(props.id)} className={styles.shopButton}>
      Add to cart 
      </h1>)}

    

   



    </div>
  )
}

export default Item