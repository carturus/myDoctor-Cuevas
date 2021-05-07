
import {NavBar}from './components/navbar'
import {ItemListContainer} from './components/itemlistcontainer'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { ItemDetailContainer } from './components/itemdetailcontainer';
import {Cart} from './components/cart'
function App() {

  const categories=[
    {id:1,
    description:"Uniformes",

    },
    {id:2,
      description:"Materiales",
  
      },
      {id:3,
        description:"Equipos",
    
        },  
  ]
  
  return (
    <div>
      <BrowserRouter>
    <NavBar categories={categories}/> 
    <Switch>
    <Route exact path='/'>
    <ItemListContainer 
    gretting='Welcome to MyDoctor, The site that takes care of yourself'/>
  </Route>
  <Route path='/category/:categoryId'>
    <ItemListContainer 
    gretting='Welcome to MyDoctor, The site that takes care of yourself'/>
  </Route>
  
  <Route path='/itemdetail/:itemId'>
    <ItemDetailContainer/>
  </Route>

  <Route path='/cart'>
    <Cart/>
  </Route>
  

  </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
