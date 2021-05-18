import React, { Component } from 'react'

export default class 
 extends Component {
     constructor(props)
     {
         super(props);
     
     }
    render() {
        const coin=   this.props.coins;
        return (
            <div>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">İsim</th>
      <th scope="col">Değeri </th>
      <th scope="col">24 Saat Yüzde %</th>
      <th scope="col">Piyasa değeri</th>

    </tr>
  </thead>
  <tbody>
        {
            coin.map(coin =>
                <tr>
     <th scope="row">{coin.key}</th>
      <td>{coin.isim}</td>
      <td>{coin.deger}</td>
      <td>{coin.yirmidortsaat}</td>
      <td>{coin.piyasadeger}</td>
    
    </tr>
                
                )
        }

      
      
  </tbody>
</table>

            </div>
        )
    }
}
