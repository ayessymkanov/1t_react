import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import IoAndroidCheckboxOutlineBlank from 'react-icons/io/android-checkbox-outline-blank'
// import IoAndroidCheckbox from 'react-icons/io/android-checkbox'

import './checkbox.styles.sass'

class Checkbox extends Component {
    render() {

        const { isChecked, id, label, styleCheckbox, styleLabel } = this.props

        return (
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id={id}
                    onChange={this.props.onChange}
                    style={styleCheckbox}
                    checked={isChecked} />
                <label htmlFor={id} style={styleLabel}>{label}</label>
            </div>
        )
    }
}

Checkbox.PropTypes = {
    isChecked: PropTypes.boolean || false,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    styleCheckbox: PropTypes.object || {},
    styleLabel: PropTypes.object || {},
}

export default Checkbox
