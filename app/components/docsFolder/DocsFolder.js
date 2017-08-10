import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './docsFolder.styles.sass'

export default class DocsFolder extends Component {

    constructor() {
        super()
        this.state = {
            showDocs: true
        }
    }

    render() {
        const items = this.props.folder.items.map(item => {
            return (<li key={item.id} className="doc-item">
                <div className="doc-title">{item.gswNameRu}</div>
                <i className="delete-doc" onClick={this.handleDelete.bind(this, item.id)}></i>
            </li>)}
        )
        return (
            <ul className="folder">
                <span className={this.state.showDocs ? 'folder-name shown' : 'folder-name'} onClick={this.toggleDocs}>{this.props.folder.name}</span>
                {this.state.showDocs ? items : null}
            </ul>
        )
    }
    handleDelete(id){
        this.props.deleteDoc(this.props.folder.id, id)
    }
    toggleDocs = () => {
        this.setState({
            showDocs: !this.state.showDocs
        })
    }
}

DocsFolder.PropTypes = {
    folder: PropTypes.object
}
