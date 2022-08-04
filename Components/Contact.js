import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Bio from './bio'
import { CodeSandbox, Contact } from 'grommet-icons';
import {  TextInput, Button, Select, Spinner} from 'grommet';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useRouter } from 'next/router';

import { wrtieUserData } from '../pages/api/firebase';
import emailjs from '@emailjs/browser';
import Loader from './Spinner';

function ContactPage() {

  const router = useRouter()

  const [value, setValue] = useState(" ")


  const [name, setName] = useState(" ")
  const [sending, setSending] = useState(false)

  const [phoneNumber, setNumber] = useState()
  const [msg, setMsg] = useState(" ")
  

  const sendInquiry = ()=>{
    console.log(name)
    console.log("Send inquiry!...")
   
if (name != " "){ 
  setSending(true)
//  console.log(name.target.value)

//console.log(new Date().getMilliseconds())
  wrtieUserData(name.target.value).then(res=>{

     router.push('/success')
   })



}else{
  // alert("no name added")
}

        
  }

  return (

    
    <div className={styles.blackContainer}>


      {sending? (<Loader/>): (<>
        
        <div className={styles.titleBar}>
          <h1 className={styles.topTitle}>
           Stay in the loop <span> <Contact/></span>
          </h1>
         
        </div>
    
         



  
        <p className={styles.questionText}>
          Send me a reminder 10 minuted before the next drop of vintage Carhartt, Nike, & more.
        </p>
    





        
        <p className={styles.titleText}>
        Email
        </p>
        <div className={styles.nameInput} >
    
        <TextInput  placeholder="Name" value={name} onChange={setName}/>
    
        </div>
     
  
        {/* <div className={styles.messageInput}>
        <Select
        placeholder={"Late afternoon"}
          options={['Early Morning (6:00am - 8:00am)','Morning (8:00am - 10:00am)', 'Early Afternoon (10:00am - 2:00pm)','Late Afternoon (2:00pm - 4:00pm)', 'Evening (4:00pm - 8:00pm)']}
          value={msg}
          onChange={({ option }) => setMsg(option)}
        />
    </div> */}
    
        <div className={styles.sendButtonSection}   >
    
        <button className={styles.sendButton} onClick={sendInquiry}>Join </button>
    
        </div>
        </>
    )}


      </div>
  )
}

export default ContactPage