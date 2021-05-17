
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import {CarWidget} from './carwidget'
import {Brand} from './brand'
import React, { useContext} from 'react';
import {CartContext} from '../context/cartContex'

export const NavBar = (props) => {
  const {cartQuantity}=useContext(CartContext)
return(
    <nav className=" navbar navbar-light bg-light">
          <Link to = '/'><Brand/> MyDoctor </Link>
          {props.categories.map((category,index)=>
    
            <Link key={index} to = {`/category/${category.description}`}>{category.description}</Link>
          )
          
          }
          <Link to = '/cart'><CarWidget/> </Link>
  </nav>
  
)
}
