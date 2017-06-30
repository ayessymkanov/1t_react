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
                <Content><h4>News component</h4></Content>
            </div>
        )
    }
}

export default News
