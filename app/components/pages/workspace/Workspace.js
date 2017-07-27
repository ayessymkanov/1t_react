import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar'
import { Sidebar } from '../../sidebar/Sidebar'
import Content from '../../content/Content'
import DocsFoldersList from '../../docsFoldersList/DocsFoldersList'

class Workspace extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Sidebar>
                        <DocsFoldersList />
                    </Sidebar>
                    <Content>
                        <h4>Workspace</h4>
                        <span>You will be able to select a document (procurement) from sidebar and preview it</span>
                    </Content>
                </div>
            </div>
        )
    }
}

export default Workspace
