import React, { Component } from 'react'
import Main from '../main/Main'
import Search from '../search/Search'
import News from '../news/News'
import Workspace from '../workspace/Workspace'
import { Router, Route, browserHistory } from 'react-router'

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main} />
                <Route path="/news" component={News}/>
                <Route path="/search" component={Search}/>
                <Route path="/workspace" component={Workspace}/>
            </Router>
        )
    }
}

export default App
