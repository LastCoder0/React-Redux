import React, { Component } from 'react'

class Child extends Component {
    constructor(props)
    {
        super(props);
        console.log("Child Constructor");
    }
    componentWillMount() {
        console.log("Child componentWillMount ")
    }
    componentDidMount() {
        console.log("Child componentDidMount ")

    }
    
    componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps',nextProps);
    }
    
    render() {
        console.log("Child render");
        return (
            <div>
                Child
            </div>
        )
    }
}
export default Child;