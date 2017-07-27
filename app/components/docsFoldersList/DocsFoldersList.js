import React, { Component } from 'react'

import { connect } from 'react-redux'
import DocsFolder from '../docsFolder/DocsFolder'

class DocsFoldersList extends Component {
    render() {
        console.log('docs props', this.props)
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
        folders: Object.keys(state.docsReducer).map(key => state.docsReducer[key])
    }
}, null)(DocsFoldersList)
