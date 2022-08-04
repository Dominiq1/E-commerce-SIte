import React, { useState, useEffect } from "react"
import { Sidebar, Button, Nav ,Box, Collapsible, Text , Notification } from "grommet";
import Link from "next/link";
import { useRouter } from "next/router";
import { commerce } from "../pages/api/commerce";
import Modal from 'react-modal';
import { motion, useMotionValue, useTransform, useViewportScroll, scrollY } from 'framer-motion'

import styles from '../styles/Home.module.css'

import {Contact, Cart, Close, Menu, Search, Shop, Star, User } from 'grommet-icons';



const TopHeader = ({}) => {

  



  const [cart, setCart] = useState({})

  const [cartItems, setCartitems] = useState([])
    const [open, setOpen] = React.useState(false);

    const router = useRouter()
  
  const { scrollY, scrollYProgress } = useViewportScroll()

  const opacity = useTransform(scrollY, [300, 500,550], [0,1,0])


  const [ notification, setNotification] = useState(false)

  
  const cartItemList = cartItems.map((item) => <li key={item.sku}>
    <div className={styles.cartItem}>


        <div className={styles.cartInfo}>
        <div className={styles.cartImage}>
            <img className={styles.image} src={item.image.url}/>
        </div>

        <p className={styles.itemName}>
        {item.name}
        </p>
        </div>

        <p onClick={()=>removeItem(item.id)} className={styles.removeitemText}> remove item</p>
    </div>

  </li>)


    const [menuShow, setMenu] = useState(false)


    const removeItem = async (productID) =>{


      setNotification(true)


        await commerce.cart.remove(productID).then(res=>{
      
            console.log("Removed Cart Item")
            console.log(res)
            fetchCart()
      
            }).catch(err=>{
                console.log(err)
      
            })
      
      
      }
      


      const viewCart = () =>{

        setMenu(!menuShow)
        router.push('/cart')
        console.log("view cart")
      }

    const fetchCart = async () =>{


        await commerce.cart.retrieve().then(res=>{


        //set cart but check if its got a new item
        setCart(res)

        setCartitems(res.line_items.slice(-3))

        // console.log("Cart Items")

        // console.log(cartItems)

        }).catch(err=>{
            console.log(err)

        })
    // console.log("Cart")
    //     console.log(cart)
      }
    
    const navigate = () =>{
        router.push('/contactUs')
        setMenu(false)
        console.log("navigating to contact page...")
    }



    useEffect(() => {
    fetchCart()
    // console.log(cart)
    
      return () => {
        
      }
    })
    

return ( <div className={styles.mainHeaderContainer}>

{menuShow? (null): (


<div className={styles.header}>
 
 {/*     
     <h1 className={styles.hea
    derText}>Saint Kyro</h1>
      */}

      
    <Link href={'/'}>
  
        <img className={styles.logo} src='/vioval.PNG' /> 

    </Link>
   

    
 
     <div className={styles.topBarCrenter}>

   

         
     </div>
     <div className={styles.tabBar}>
 

  
    <Cart onClick={() => setMenu(!menuShow)} size="medium" color="black"   /> 


{cart.total_items > 0 ? ( <p className={styles.cartCount}>
        {cart.total_items}
    </p>): (null)}
   

    {/* <Search onClick={() => setMenu(!menuShow)} size="medium" color="black"   /> */}

 
</div>



 
 
 </div>
 


 
 )}


{menuShow ? (     

 <Sidebar className={styles.sidebar}

header={ 
    <div className={styles.tab}>
<Close onClick={() => setMenu(!menuShow)}  color="white"/>

    </div>
}
>
    
<Nav gap="small">
<div className={styles.itemList}>

  
{notification? (<Notification
  title="Removed item from cart"
  toast={false}
  
  onClose={() => setNotification(false)}
/>): (null) }

 
<ul className={styles.catItemList}> {cartItemList}</ul>

<p className={styles.itemsCount}>
{` + more Items`}
</p>
<h1 className={styles.totalPrice}>
{`Total: ${cart.subtotal.formatted_with_symbol}`}
</h1>



<button onClick={() => viewCart()} className={styles.cartButton}> View Cart →</button>

</div>
</Nav>
</Sidebar>


) : (null)}


{/* <Modal
        isOpen={false}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        contentLabel="Example Modal"
      >


       <ul className={styles.catItemList}> {cartItemList}</ul>
    
      
      </Modal> */}







</div>)
}


export default TopHeader