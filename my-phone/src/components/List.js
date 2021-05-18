import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './List.css';

export default class List extends Component {
 
state ={
    filterText: ''
};
onChangeFilterText = (e) =>
{
    
console.log(e.target.value);
this.setState({
    filterText: e.target.value
})
};

    render() {
        const filteredContacts= this.props.contacts.filter(
            contact =>{
             return contact.name.toLowerCase().indexOf(
                 this.state.filterText.toLowerCase()
             )!== -1
            }
        );
        return (
            <div className={"listArea"}>
                <input
                 name={"filter"}
                value={this.state.filterText}
                onChange={this.onChangeFilterText}
                 id={"filter"}
                 placeholder={"Rehberde Ara"} />
                <ul className={"list"}> 
                   {
                  filteredContacts.map(contact => 
                        <li key={contact.phone}>
                        <span className={"name"}>{contact.name}</span>
                        <span className={"phone"}>{contact.phone}</span>
                        <span className={"clearfix"}></span>
                           </li>
                  )
                   }
                   
                </ul>
            </div>
        )
    }
}
