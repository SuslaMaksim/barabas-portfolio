import React from 'react';
import Home from './Components/Home/Home'
import {makeStyles} from "@material-ui/core/styles";
import {Route,Switch} from 'react-router-dom'
import AboutMe from "./Components/AboutMe/AboutMe";
import Services from "./Components/Services/Services";
import Contacts from './Components/Contacts/Contacts'
import {items} from './data'
import Portfolio from "./Components/Portfolio/Portfolio";



let useStyle = makeStyles({

    appContainer: {
    }

})


function App(props) {
    let classes = useStyle();
  return (
       <div className={classes.appContainer}>
           <Switch>
               <Route exact path='/' component={()=><Home items = {items}/>} />
               <Route path='/aboutme' component={()=><AboutMe data = {items}/>} />
               <Route path='/portfolio' component ={()=> <Portfolio data ={items}/>}/>
               <Route path='/services' component={()=><Services data = {items}/>} />
               <Route path='/contacts' component ={()=> <Contacts data ={items}/>}/>
               <Route component={()=> <div>404 Not found</div>} />
           </Switch>


       </div>
  );
}

export default App;
