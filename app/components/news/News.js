import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Content from '../content/Content'

class News extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Sidebar></Sidebar>
                <Content><h1>News component</h1></Content>
            </div>
        )
    }
}

export default News
