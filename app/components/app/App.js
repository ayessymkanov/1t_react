import React, { Component } from 'react'
import Main from '../pages/main/Main'
import Search from '../pages/search/Search'
import News from '../pages/news/News'
import Workspace from '../pages/workspace/Workspace'
import Login from '../pages/login/Login'
import { Router, Route, browserHistory } from 'react-router'
import store from '../../store'
import { Provider } from 'react-redux'

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main} />
                <Route path="/news" component={News}/>
                <Route path="/search" component={Search}/>
                <Route path="/workspace" component={Workspace}/>
                <Route path="/login" component={Login}/>
            </Router>
        )
    }
}

export default App
