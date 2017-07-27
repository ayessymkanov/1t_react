import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
    render() {
        const { onSubmit, children, className } = this.props
        return (
            <form onSubmit={onSubmit} className={className}>
                {children}
            </form>
        )
    }
}

Form.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string
}
