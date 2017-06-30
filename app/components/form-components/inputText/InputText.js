import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class InputText extends Component {
    render() {

        const { placeholder, style } = this.props

        return (
            <input type="text" placeholder={placeholder} style={style}/>
        )
    }
}

InputText.PropTypes = {
    placeholder: PropTypes.string,
    style: PropTypes.object || {}
}
