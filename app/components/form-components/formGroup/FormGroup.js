import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './formGroup.styles.sass'

export default class FormGroup extends Component {
    render() {

        const { groupLabel, children } = this.props

        return (
            <div className="group-container">
                <span className="group-label">{groupLabel}</span>
                {children}
            </div>
        )
    }
}

FormGroup.PropTypes = {
    groupLabel: PropTypes.string || ''
}
