import React, { Component } from 'react'
import './login.styles.sass'

import Form from '../../form-components/form/Form'
import InputField from '../../form-components/inputField/InputField'

import { login } from '../../../action/login'
import { connect } from 'react-redux'
import { Redirect, browserHistory } from 'react-router'

class Login extends Component {

    componentDidMount() {
        document.title = this.props.route.title
    }

    render() {
        return (
            <div className="login">
                <div className="content">
                    <h2>Welcome to fucking 1t </h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <InputField type="email" placeholder=" Your fucking Email" className="login-input" />
                        <InputField type="password" placeholder="Your fucking Password" className="login-input" />
                        <InputField type="submit" value="Fucking Login" className="login-submit" />
                        <a href="#">Fucking forgot password</a>
                    </Form>
                </div>
            </div>
        )
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.login()
        browserHistory.push('/search')
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.mainReducer.loggedIn
    }
}

export default connect(mapStateToProps, { login })(Login)
