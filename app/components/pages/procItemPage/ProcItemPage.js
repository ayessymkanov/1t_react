import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar'

export default class ProcItemPage extends Component {

    componentDidMount() {
        document.title = this.props.route.title
    }

    render() {
        console.log(this.props.params)
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}
