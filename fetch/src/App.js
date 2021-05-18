import './App.css';
import Axios from 'axios';
import React, { Component } from 'react'
 class App extends Component {
   constructor()
   {
     super();
     setTimeout(() => {
      Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => users.data)
      .then(users =>
       {
         this.setState({
           users,
           isLoading:false
         });
       })
     },3000)
    }
   state ={
     users : [ ],
     isLoading :true
   };
  
   
  render() {
  const {isLoading} = this.state;

    return (
      <div>
        <h1>Users</h1>
        {
          isLoading ? 'Loading...' : ''
        }
        {
          this.state.users.map(user =>
            <div key={user.id}>
              {user.name} - @{user.username}
              </div>
            
            
            )
        }
      </div>
    )
  }
}


export default App ;