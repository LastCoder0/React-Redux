import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Coins from './components/Coins';

import React, { Component } from 'react'
class App extends Component {
  
  state ={
        coins :[
          {
            key:1,
          isim:"Bitcoin",
          deger: "$49,640.53",
          yirmidortsaat : "^0.34%	",
          piyasadeger : "$924,448,706,989"

          },
          {
            key:2,
            isim:"Ethereum",
            deger: "$4,040.86",
            yirmidortsaat : "^5.94%",
            piyasadeger : "$469,798,785,635"       
          },
          {
            key:3,
            isim:"Binance Coin",
            deger: "$605.93",
            yirmidortsaat : "^3.01%",
            piyasadeger : "$92,616,615,049"
          },
          {
            key:4,
            isim:"Dogecoin",
            deger: "$0.5519",
            yirmidortsaat : "^13.01%",
            piyasadeger : "$71,616,615,049"
          },
          {
            key:5,
            isim: "Ada Cardano",
            deger: "$2,01",
            yirmidortsaat : "^20.01%",
            piyasadeger : "$64,616,615,049"
          },
          {
            key:6,
            isim:"XRP",
            deger: "$1.53",
            yirmidortsaat : "^5.01%",
            piyasadeger : "$49,616,615,049"
          },
          {
            key:7,
            isim:"Polkadot",
            deger: "$47.33",
            yirmidortsaat : "^0.01%",
            piyasadeger : "$44,616,615,049"
          },
          {
            key:8,
            isim:"Tron(TRX)",
            deger: "$0.1253",
            yirmidortsaat : "^33.01%",
            piyasadeger : "$8,616,615,049"
          }
        ]
  }
      
  render() {
    return (
      <div>
         <Navbar/>
     <Coins  coins={this.state.coins}/>
      </div>
    )
  }
}

export default  App;