import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Content from '../content/Content'
import SearchBar from '../searchBar/SearchBar'

class Search extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sidebar><h1>This is a sidebar</h1></Sidebar>
                <Content>
                    <SearchBar />
                </Content>
            </div>
        )
    }
}

export default Search
