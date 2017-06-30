import React, { Component } from 'react'

export default class Option extends Component {
    render() {
        console.log('option props', this.props)
        return (
            <div className="option" onClick={this.props.onClick}>
                {this.props.item.label}
            </div>
        )
    }
    handleClick = () => {
    }
}
