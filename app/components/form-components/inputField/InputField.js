import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './inputField.styles.sass'

export default class InputField extends Component {
    render() {
        const { type, placeholder, onChange, className, value } = this.props
        return (
            <input
                className={`${className} form-input`}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}/>
        )
    }
}

InputField.PropTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.string
}
