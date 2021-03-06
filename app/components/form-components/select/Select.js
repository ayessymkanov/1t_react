import React, { Component } from 'react'
import propTypes from 'prop-types'
import Option from './Option'

import './select.styles.sass'

export default class Select extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showOptions: false,
            selected: ''
        }
    }

    render() {

        const { selected } = this.state
        const { placeholder } = this.props

        return (
            <div className={`select-container ${this.props.className}`}>
                <span className={`selected ${this.state.showOptions ? 'open' : ''}`} onClick={this.handleClick}>{selected ? selected : placeholder}</span>
                <ul className="options">
                    {this.showOptions()}
                </ul>
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    showOptions = () => {
        const { options } = this.props
        if(this.state.showOptions) {
            return options.map(item => {
                return <li key={item.value}><Option item={item} onClick={this.selectOption.bind(this, item)} /></li>
            })
        }
        return null
    }

    selectOption = (option) => {
        this.setState({
            selected: option.label,
            showOptions: !this.state.showOptions
        })
        this.props.onChange(this.props.type, option.value)
    }
}

Select.PropTypes = {
    options: propTypes.array.isRequired,
    onChange: propTypes.func,
    type: propTypes.string
}
