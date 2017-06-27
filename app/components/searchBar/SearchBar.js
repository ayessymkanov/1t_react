import React, { Component } from 'react'
import './searchBar.styles.sass'
import IosSearchStrong from 'react-icons/io/ios-search-strong'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSearch}>
                <input
                    type="text"
                    autoFocus
                    placeholder="Поиск по наименованию"
                    onChange={this.handleInput}
                    value={this.state.inputValue}
                />
                <button type="submit" className="search-btn">
                    <IosSearchStrong size={20} />
                    <span>Поиск</span>
                </button>
            </form>
        )
    }
    handleSearch = e => {
        e.preventDefault()
        console.log(this.state.inputValue)
    }
    handleInput = e => {
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default SearchBar
