import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
//State tanımlamak :)
  state ={
    name: 'cihat',
      surname: 'can',
      age :25,
      makale:"Elonmusk nasıl zengin olduğunu acıkladı şok şok",
      number :0
  }
  changeName()
  {
    this.setState({
      name : "Adem"+ Math.floor(Math.random()*10),
      surname :"Can",
      age :26
    });
    
  }
  goOn()
  {
    this.setState(
      {
       makale:
       "Elon musk bitcoin alıp satarak bütün kazancını artırdı ve  dünyanın en zengin adamlarından biri olduğu bu başarısını söyle aktarıyor sabır ile bekledim        hisselerimi ve coinlerimi satmadım."
             
             
      }
    );
    
  }
  increment()
  {
       this.setState(
         {
          number:++this.state.number
         }
       );
  }
  decrement()
  {
    if(this.state.number==0)
    {
       
    } else 
    {
      this.setState(
        {
          number: --this.state.number
        });
    }
   
    
  }
  zero()
  {
    this.setState(
      {
        number: 0
      }
    )
  }
  render() {
    return (
      <div>
        <h3>Name : {this.state.name}</h3>
        <h3>Surname : {this.state.surname}</h3>
        <h3>Age : {this.state.age}</h3>
        <button onClick={this.changeName.bind(this)}>Change</button>
        <p>{this.state.makale}</p>
        <button onClick={this.goOn.bind(this)}>Devamı </button>
        <center>    <h1>{this.state.number}</h1>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
        <button onClick={this.zero.bind(this)}>Sıfırla</button>
        
        </center>
     
      </div>
    )
  }
}
export default  App;

