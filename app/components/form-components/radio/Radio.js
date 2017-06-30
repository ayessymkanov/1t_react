import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IoAndroidRadioButtonOff from 'react-icons/io/android-radio-button-off'
import IoAndroidRadioButtonOn from 'react-icons/io/android-radio-button-on'

import './radio.styles.sass'

export default class Radio extends Component {
    render() {

        const { isChecked, name, label, id, styleRadio, styleLabel } = this.props

        return (
            <div>
                <input type="radio" name={name} id={id} style={styleRadio} />
                <label htmlFor={id} style={styleLabel}>{label}</label>
            </div>
        )
    }
}

Radio.PropTypes = {
    isChecked: PropTypes.boolean || false,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    styleRadio: PropTypes.object || {},
    styleLabel: PropTypes.object || {}
}
