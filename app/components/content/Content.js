import React, { Component } from 'react'
import './content.styles.sass'

class Content extends Component {
    render() {
        return (
            <main className="col col--9-of-12">
                {this.props.children}
            </main>
        )
    }
}

export default Content
