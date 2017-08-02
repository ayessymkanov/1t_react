import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar'

export default class ProcItemPage extends Component {
    render() {
        console.log(this.props.params)
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}
