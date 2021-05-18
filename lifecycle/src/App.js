import './App.css';
import Child from './Child';
import React, { Component } from 'react'
import Yay from './Yay';
const sebep="Cihat";


export default class App extends Component {
  state ={
    name : 'Mert',
    tl:0
  }

  
  
  constructor()
  {
    super();
    this.state={
      name : 'Cihat Can'
    }
    console.log("Constructor ");
  }
  //cwm ile olusturuluyor will mount initilization dan sonra calisiyor
 componentWillMount() {
   console.log("Componentwillmount ");
   
 }
 //cdm render isleminden sonra calisiyor
 componentDidMount() {
   console.log("DidMount");


  }
 changeName  = () => 
 {
   this.setState({
        name :'Mert Tuncer'
   });
 }
 changeTL = (e) =>
 {
   this.setState({
    tl : e.target.value
   })
 };
 shouldComponentUpdate(nextProps, nextState) {
  // console.log('shouldComponentUpdate',nextProps,nextState);
   return (nextState.tl%10)===0;
 }
 componentWillUpdate(nextProps, nextState) {
   console.log("componentWillUpdate calisti");
 }
 componentDidUpdate(prevProps, prevState) {
   console.log("componentDidUpdate calisti");
 }
 
 
  
  render() {
    console.log('Render ');
    return (
      <div className="App">
               <Yay sebep={sebep} />

        
        
               {this.state.name} 
       <br/>
       
       <Child name={this.state.name}/> 
       <button onClick={this.changeName}>Change the name</button>
<br/>
<br/>
<br/>

<br/>


       <input name="tl" id="tl"  onChange={this.changeTL} />
       <br></br>
       Her Elma 10 TL<br></br>
       {this.state.tl/10} tane elma alabilirsiniz.
      </div>
    )
  }
}
