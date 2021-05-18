import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
    constructor(props)
    {
        super();
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    
    
    static propTypes={
        addContact:PropTypes.func
    }
    state =
    {
        name: '',
        phone:''
    }
    onChange(e)
    {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
            
        );
    }
    onSubmit(e)
    {
        e.preventDefault();
        this.props.addContact(
            {
            ...this.state
            }
        );
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="name" id="name" 
                    onChange={this.onChange} value={this.state.name}
                     placeholder="Bir isim giriniz"/>
                    <br></br>
                    <input name="phone" id="phone"
                    onChange={this.onChange} value={this.state.phone} 
                    placeholder="Bir numara giriniz." />
                    <br>
                    </br>
                    <button>Rehbere Ekle</button>
                </form>
                
            </div>
        )
    }
}
