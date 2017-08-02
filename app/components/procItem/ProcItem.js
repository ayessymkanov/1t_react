import React, { Component } from 'react'
import { Select, Option, Placeholder } from 'belle/lib'
import ActionsDropdown from '../actionsDropdown/ActionsDropdown'
import './procItem.styles.sass'
import { connect } from 'react-redux'
import { addToFolder1, addToFolder2, addToFolder3 } from '../../action/docs'
import { Link } from 'react-router'

class ProcItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showActions: false
        }
    }

    render() {
        const { username, name, email, address: { city, street, suite, zipcode }} = this.props.item
        return (
            <div className="item">
                <Link to={`/${this.props.item.id}`} target="_blank">
                    <div className="main-info">
                        <div className="left">
                            <h4>{username}</h4>
                        </div>
                        <div className="right">
                            <h5>{name}</h5>
                            <p>{email}</p>
                        </div>
                    </div>
                    <div className="more-info">
                        <div className="more-item">{city}</div>
                        <div className="more-item">{street}</div>
                        <div className="more-item">{suite}</div>
                        <div className="more-item">{zipcode}</div>
                    </div>
                </Link>
                <ActionsDropdown
                    className="dropdown"
                    handleClick={this.toggleActionsShow}
                    showActions={this.state.showActions}
                    hideActions={this.hideActions}
                    addToFolder1={this.addToFolder1}
                    addToFolder2={this.addToFolder2}
                    addToFolder3={this.addToFolder3}
                 />
            </div>
        )
    }

    toggleActionsShow = () => {
        this.setState({
            showActions: !this.state.showActions
        })
    }

    hideActions = () => {
        this.setState({
            showActions: false
        })
    }

    addToFolder1 = () => {
        this.props.addToFolder1(this.props.item)
    }
    addToFolder2 = () => {
        this.props.addToFolder2(this.props.item)
    }
    addToFolder3 = () => {
        this.props.addToFolder3(this.props.item)
    }
}

export default connect (null, {addToFolder1, addToFolder2, addToFolder3})(ProcItem)
