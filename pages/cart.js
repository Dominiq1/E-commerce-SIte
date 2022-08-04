import React, { useState, useEffect } from 'react'
import { commerce } from './api/commerce'
import styles from '../styles/Home.module.css'
import Loader from '../Components/Spinner'
function Cart() {

    const [cart, setCart] = useState()

    const [cartItems, setCartitems] = useState([])


    const cartItemList = cartItems.map((item) => <li key={item.sku}>
    <div className={styles.cartItem}>


        <div className={styles.cartInfo}>
        <div className={styles.cartImage}>
            <img className={styles.image} src={item.image.url}/>
        </div>

        <p className={styles.itemName}>
        {item.name}
        </p>

        <p onClick={() => removeItem(item.id)} className={styles.removeitemText}> |  x  |  </p>


        </div>

    </div>

  </li>)



const checkout =(checkoutURL) =>{
    console.log("Checkout")
    window.open(checkoutURL);


}
const removeItem = async (productID) =>{



    await commerce.cart.remove(productID).then(res=>{

        console.log("Removed Cart Item")
        console.log(res)
        fetchCart()

        }).catch(err=>{
            console.log(err)

        })


}






    const fetchCart = async () =>{


        await commerce.cart.retrieve().then(res=>{

        setCart(res)

        setCartitems(res.line_items)

        console.log("Cart Items")

        console.log(cartItems)

        }).catch(err=>{
            console.log(err)

        })




    console.log("Cart")
        console.log(cart)
      }
    

    useEffect(() => {
        fetchCart()
    
      return () => {
        
      }
    })
    
  return (
    <div className={styles.container}>



{cart!=null ? (<>

<div className={styles.home}>
<h1>
Cart
</h1>
</div>

<div className={styles.itemList}>


<ul className={styles.catItemList}> {cartItemList}</ul>


<p className={styles.itemsCount}>
{`${cart.total_items} Total Items`}
</p>

<h1 className={styles.totalPrice}>
{`Total: ${cart.subtotal.formatted_with_symbol}`}
</h1>


<button onClick={()=>{checkout(cart.hosted_checkout_url)}} className={styles.cartButton}> Checkout →</button>

</div>


</>): (
<div className={styles.cartLoading}>

<Loader/>
  </div>




)}



    </div>
  )
}

export default Cart