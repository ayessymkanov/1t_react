import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar'
import Search from '../search/Search'
import News from '../news/News'
import Workspace from '../workspace/Workspace'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Main extends Component {

    componentDidMount() {
        document.title = this.props.route.title
    }

    render() {
        console.log('main props', this.props)
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col col--12-of-12">
                        <h4>Welcome to 1t</h4>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Main
