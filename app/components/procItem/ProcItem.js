import React, { Component } from 'react'
import './procItem.styles.sass'

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
            </div>
        )
    }
}

export default ProcItem
