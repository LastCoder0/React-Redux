import './App.css';
import {BrowserRouter as Router,Route,NavLink, Redirect,Switch} from 'react-router-dom';

import React, { Component } from 'react';
import News from './components/News';
import Profile from './components/Profile';
import Error from './components/Error';



export default class App extends Component {
//Olduğu gibi zorluyor strict
state ={
  loggedIn :false

};
onClickButton =() =>
{
  this.setState(prevState => ({
    loggedIn : !prevState.loggedIn
  }))
};
  render() {
    return (
      <Router>
       <div>
        <NavLink activeClassName="activeLink" exact to="/" >Homepage</NavLink><br></br>
        <NavLink activeClassName="activeLink" exact to="/contact" >Contact</NavLink><br></br>
        <NavLink activeClassName="activeLink"  exact to="/News/2" >News</NavLink><br></br>
        <NavLink activeClassName="activeLink"  exact to="/profile" >Profil Page</NavLink><br></br>
         <br>
         </br>
         <input 
         type="button"
          onClick={this.onClickButton}
             value={this.state.loggedIn ? 'Logout' : 'Login'}
         />
         <Switch>


         
         <Route path="/" exact 
         render={
           () => {
             return(
             
             <h1>Home page</h1>)
           }
         }>
           
         </Route>
         <Route path="/contact" strict render={
           () => {
             return(<h1>Contact</h1>)
           }
         }>
         </Route>
         <Route 
         path="/news/:id"
          strict 
          component={News}
         >
         </Route>
         <Route path="/profile" strict render={() =>(
           this.state.loggedIn ? (<Profile/>) : (<Redirect to="/"/>)
         )}>
          
         </Route>
         <Route component={Error} >

         </Route>
         </Switch>

       </div>
      </Router>

    )
  }
}

