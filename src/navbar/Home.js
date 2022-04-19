import React from 'react'
import axios from "axios";
import {useEffect,useState} from "react";
import CardItem from "../components/CardItem"

const Home = () => {


    const [veri, setVeri] = useState([])

    const fetching=  async () => {
       // const response = await axios("https://jsonplaceholder.typicode.com/todos");
       const {data}= await axios("https://fakestoreapi.com/products");
       // console.log(response);
       // console.log(data);
       setVeri(data)
     
     
     }
     useEffect(() => {
       fetching()
   }, [])
  
 
 /* useEffect(() => {
   fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
   .then(data =>setVeri(data));
 
 }, [])
  */

  return (
    <div>
              {veri.map((item)=> (
        <>
     <CardItem item={item}/>
        </>
      ))}
    </div>
  )
}

export default Home