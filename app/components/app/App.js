import React, { Component } from 'react'
import Main from '../pages/main/Main'
import Search from '../pages/search/Search'
import News from '../pages/news/News'
import Workspace from '../pages/workspace/Workspace'
import Login from '../pages/login/Login'
import ProcItemPage from '../pages/procItemPage/ProcItemPage'
import { Router, Route, browserHistory } from 'react-router'
import store from '../../store'
import { Provider } from 'react-redux'

class App extends Component {

    loggedIn = () => {
        const token = localStorage.getItem('token');
        if(!token) {
            return false
        }
        return true
    }

    requireAuth = (nextState, replace) => {
        console.log('nextState', nextState)
        if(!this.loggedIn()) {
            replace('/login')
        }
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main} title="1T | Главная" />
                <Route path="/news" component={News} onEnter={this.requireAuth} title="1T | Уведомления"/>
                <Route path="/search" component={Search} onEnter={this.requireAuth} title="1T | Поиск"/>
                <Route path="/workspace" component={Workspace} onEnter={this.requireAuth} title="1T | Рабочая область"/>
                <Route path="/login" component={Login} title="1T | Вход"/>
                <Route path="/:id" component={ProcItemPage} onEnter={this.requireAuth} title="1T | Статья расходов"/>
            </Router>
        )
    }
}

export default App
