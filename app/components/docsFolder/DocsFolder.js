import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './docsFolder.styles.sass'

export default class DocsFolder extends Component {
    render() {
        const items = this.props.folder.items.map(item => <li key={item.id} className="doc-item">{item.email}</li>)
        console.log('folder items', this.props.folder.items.toJS())
        return (
            <ul className="folder">
                <span className={`folder-name`} onClick={this.handleToggle}>{this.props.folder.name}</span>
                {items}
            </ul>
        )
    }
}

DocsFolder.PropTypes = {
    folder: PropTypes.object
}
