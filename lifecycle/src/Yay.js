import React, { Component } from 'react'

export default class Yay extends Component {

    state ={
        key:1,
        name :"Bitcoin"
    }
    render() {
        console.log(this.props.sebep);

        return (
            <div>
                <p>{this.props.sebep}</p>
            </div>
        )
    }
}
