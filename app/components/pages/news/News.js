import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar'
import { Sidebar } from '../../sidebar/Sidebar'
import Content from '../../content/Content'

class News extends Component {

    componentDidMount() {
        document.title = this.props.route.title
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <Sidebar>
                        <span>Filters will be displayed here</span>
                    </Sidebar>
                    <Content>
                        <h4>News component</h4>
                        <span>Here will be located all the news and notifications about subscriptions</span>
                    </Content>
                </div>
            </div>
        )
    }
}

export default News
