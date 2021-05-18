import React, {PureComponent } from 'react'

export default class SecondNumber extends PureComponent {
y2
    render() {

        return (
            <div>
                {this.props.secondNumber}
            </div>
        )
    }
}
