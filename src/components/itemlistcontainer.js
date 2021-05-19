
import {ItemList} from './itemlist'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {getFirestore} from '../firebase'
//import  items from './datos/items.json'

export const ItemListContainer =(props)=>{

const {categoryId}=useParams()
    const [items,setItems]=useState([])
    //const [itemId,setItemId]=useState([])

useEffect(() => {
    const db=getFirestore();
    let itemCollection=db.collection('items');
   
    if(categoryId){
        itemCollection=itemCollection.where('categoryId','==',categoryId)   
    }

    itemCollection.get().then((querySnapshot)=>{
            if(querySnapshot.size===0){
                console.log('No results');  
            }
            setItems(querySnapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))

    } ).catch((error)=>{
        console.log("Error searching items",error)
    })
}, [categoryId])




    return(
        <div >
          
        <h2>{props.gretting}  </h2>  

          <div style={{
          display:'flex',
          justifyContent:'space-around',
          flexWrap:'wrap',
        }}>
        
        <ItemList items={items}/>
        </div>
          </div>
    )
}