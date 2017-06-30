import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Content from '../content/Content'

class Workspace extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidebar></Sidebar>
                <Content><span>Workspace component</span></Content>
            </div>
        )
    }
}

export default Workspace
