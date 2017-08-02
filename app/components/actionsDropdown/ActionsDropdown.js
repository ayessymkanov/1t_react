import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'

import './actionsDropdown.styles.sass'

class ActionsDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showActions: false
        }
    }

    render() {
        return (
            <div className={this.props.showActions ? 'actions-dropdown shown' : 'actions-dropdown'} onClick={this.props.handleClick}>
                Добавить в...
                {this.props.showActions ? <ul className="actions">
                    <li className="action" onClick={this.props.addToFolder1}>Папку 1</li>
                    <li className="action" onClick={this.props.addToFolder2}>Папку 2</li>
                    <li className="action" onClick={this.props.addToFolder3}>Папку 3</li>
                </ul> : null}
            </div>
        )
    }
    handleClickOutside = () => {
        this.props.hideActions()
    }
}

export default onClickOutside(ActionsDropdown)
