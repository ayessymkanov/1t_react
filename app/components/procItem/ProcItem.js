import React, { Component } from 'react'
import './procItem.styles.sass'
import { connect } from 'react-redux'
import { addToFolder1, addToFolder2, addToFolder3 } from '../../action/docs'

class ProcItem extends Component {
    render() {
        const { username, name, email, address: { city, street, suite, zipcode }} = this.props.item
        return (
            <div className="item">
                <div className="item-desc">
                    <div className="price">
                        {username}
                    </div>
                    <div className="desc">
                        <span>{name}</span>
                        <a href="#">{email}</a>
                    </div>
                </div>
                <div className="item-more">
                    <div className="more-item">{city}</div>
                    <div className="more-item">{street}</div>
                    <div className="more-item">{suite}</div>
                    <div className="more-item">{zipcode}</div>
                </div>
                <button onClick={this.addToFolder1}>
                    Add to folder1
                </button>
                <button onClick={this.addToFolder2}>
                    Add to folder2
                </button>
                <button onClick={this.addToFolder3}>
                    Add to folder3
                </button>
            </div>
        )
    }
    addToFolder1 = () => {
        console.log(this)
        this.props.addToFolder1(this.props.item)
    }
    addToFolder2 = () => {
        console.log(this)
        this.props.addToFolder2(this.props.item)
    }
    addToFolder3 = () => {
        console.log(this)
        this.props.addToFolder3(this.props.item)
    }
}

export default connect (null, {addToFolder1, addToFolder2, addToFolder3})(ProcItem)
