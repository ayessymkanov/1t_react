import React, { Component } from 'react'
import './sidebar.styles.sass'

class Sidebar extends Component {
    render() {
        return (
            <aside className="col col--3-of-12">

                {this.props.children}
            </aside>
        )
    }
}

export default Sidebar
