import React, { Component } from 'react'

import { connect } from 'react-redux'
import DocsFolder from '../docsFolder/DocsFolder'

class DocsFoldersList extends Component {
    render() {
        const folders = this.props.folders.map(folder => <li key={folder.id}><DocsFolder folder={folder} /></li>)
        return (
            <ul>
                {folders}
            </ul>
        )
    }
}

export default connect(state => {
    return {
        folders: state.docsReducer.toArray()
    }
}, null)(DocsFoldersList)
