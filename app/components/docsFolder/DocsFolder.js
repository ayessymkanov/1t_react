import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './docsFolder.styles.sass'

export default class DocsFolder extends Component {
    render() {
        const items = this.props.folder.items.map(item => {
            return (<li key={item.id} className="doc-item">
                <div className="doc-title">{item.email}</div>
                <i className="delete-doc" onClick={this.handleDelete.bind(this, item.id)}></i>
            </li>)}
        )
        return (
            <ul className="folder">
                <span className={`folder-name`} onClick={this.handleToggle}>{this.props.folder.name}</span>
                {items}
            </ul>
        )
    }
    handleDelete(id){
        this.props.deleteDoc(this.props.folder.id, id)
    }
}

DocsFolder.PropTypes = {
    folder: PropTypes.object
}
