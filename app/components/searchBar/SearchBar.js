import React, { Component } from 'react'
import './searchBar.styles.sass'
import IosSearchStrong from 'react-icons/io/ios-search-strong'
import { connect } from 'react-redux'
import { startSearch } from '../../action/search'
import { Select, Option, Placeholder } from 'belle/lib'
import { changeSearchArea, changeSearchTerm, changeUnitPriceFrom, changeUnitPriceThru } from '../../action/filter'
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
                <Select className="search-options" onUpdate={this.changeSearchArea}>
                    <Placeholder>Искать в </Placeholder>
                    <Option value="announcements">Объявление</Option>
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
                    <input type="number" placeholder="от" step="1000" onChange={this.changeUnitPriceFrom}/>
                    <input type="number" placeholder="до" step="1000" onChange={this.changeUnitPriceThru}/>
                </div>
            </form>
        )
    }
    changeSearchArea = arg => {
        this.props.changeSearchArea(arg.value)
        this.props.startSearch()
    }
    changeUnitPriceFrom = e => {
        this.props.changeUnitPriceFrom(e.target.value)
    }
    changeUnitPriceThru = e => {
        this.props.changeUnitPriceThru(e.target.value)
    }
    handleSearch = e => {
        const { inputValue, whereToSearch } = this.state
        e.preventDefault()
        this.props.startSearch()
    }
    handleInput = e => {
        this.setState({
            inputValue: e.target.value
        })
        this.props.changeSearchTerm(e.target.value)
    }
}

export default connect(null, {startSearch, changeSearchArea, changeSearchTerm, changeUnitPriceFrom, changeUnitPriceThru}) (SearchBar)
