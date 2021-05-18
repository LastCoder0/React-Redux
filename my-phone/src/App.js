import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props)
  {
    super(props)
    this.addContact=this.addContact.bind(this);
  }
  state =
    {
      contacts : [
            {
                name :'Cihat',
                phone : '123213213'
            },
            {
                name : 'İbrahim',
               phone: '123123213'
            }

        ]

    };
    addContact(contact)
    {
      const {contacts} =this.state;
      contacts.push(contact);
      this.setState(
        {
          contacts
        }
      )
    }
  render() {
    return (
      <div className="App">
        <h2>Telefon Rehberi Uygulamasi</h2>
       <Contacts
       addContact={this.addContact}
       contacts={this.state.contacts} /> 
      </div>
    );
  }
}

