import React, { Component } from 'react'
import './searchBar.styles.sass'
import IosSearchStrong from 'react-icons/io/ios-search-strong'
import { connect } from 'react-redux'
import { startSearch } from '../../action/search'
import { Select, Option, Placeholder } from 'belle/lib'
// import Select from '../form-components/select/Select'

const options = [
    {label: 'Лот', value: 'Hello1'},
    {label: 'Объявление', value: 'Hello2'},
    {label: 'План закупок', value: 'Hello3'}
]

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            whereToSearch: null
        }
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSearch}>
                <Select className="search-options" onUpdate={this.handleChange}>
                    <Placeholder>Искать в </Placeholder>
                    <Option value="ob">Объявление</Option>
                    <Option value="lot">Лот</Option>
                    <Option value="plan">План закупок</Option>
                </Select>
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
                <div className="prices">
                    <span>Цены</span>
                    <input type="number" placeholder="от" step="1000"/>
                    <input type="number" placeholder="до" step="1000"/>
                </div>
            </form>
        )
    }
    handleChange = e => {
        const { inputValue, whereToSearch } = this.state
        this.setState({
            whereToSearch: e.value
        })
        this.props.startSearch(inputValue, whereToSearch)
    }
    handleSearch = e => {
        const { inputValue, whereToSearch } = this.state
        e.preventDefault()
        this.props.startSearch(inputValue, whereToSearch)
    }
    handleInput = e => {
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default connect(null, {startSearch}) (SearchBar)
