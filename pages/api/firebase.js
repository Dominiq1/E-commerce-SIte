// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
import { getDatabase , ref, set } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMLDLkms6AWOOUv83BHfyXSW20b5xdgXA",
  authDomain: "vitool-b8d4b.firebaseapp.com",
  projectId: "vitool-b8d4b",
  storageBucket: "vitool-b8d4b.appspot.com",
  messagingSenderId: "1028387094947",
  appId: "1:1028387094947:web:7c4c837fbcb856a0841a16",
  measurementId: "G-GBLJ7MXHMM"
};

// Initialize Firebase




export const app = initializeApp(firebaseConfig);
export const storage = getStorage()


export async function wrtieUserData(userEmail){

 const slug = String(new Date())

 console.log("Test")
  console.log(userEmail)
  console.log(slug)
console.log("Item to be listed: ")

const item = {
  sku: slug, 
  name: userEmail
}




// const db = getDatabase(app);
// set(ref(db, 'soldItems/' + item.sku), item).then(res=>{
//   console.log("Firebase result.")
//   console.log(res)
//     return res
//   })



const db = getDatabase(app);
set(ref(db, 'emails/'+ item.sku) , item).then(res=>{
  console.log("Firebase result.")
  console.log(res)
    return res
  }).catch(err=>{
    console.log(err)
  })

}
