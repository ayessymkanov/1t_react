import React, { Component } from 'react'
import DocsFolder from '../docsFolder/DocsFolder'
import { connect } from 'react-redux'
import { deleteDoc } from '../../action/docs'

class DocsFoldersList extends Component {

    render() {
        const folders = this.props.folders.map(folder => <li key={folder.id}><DocsFolder folder={folder} deleteDoc={this.props.deleteDoc} /></li>)
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
}, {deleteDoc})(DocsFoldersList)
