import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Content from '../content/Content'
import SearchBar from '../searchBar/SearchBar'
import { connect } from 'react-redux'
import { startSearch } from '../../action/search'
import { filterData } from '../../action/creators'
import ProcItem from '../procItem/ProcItem'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Filter from '../filter/Filter'

import './search.styles.sass'
import './animation.css'

const Loader = props => {
    return (
        <div className="loader">
            <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
            </div>
            <span>Загрузка</span>
        </div>
    )
}

class Search extends Component {

    render() {

        const { loading, loaded, data } = this.props

        console.log('search props', this.props.data)

        const items = data.map(item => <li key={item.id}><ProcItem item={item} /></li>)

        return (
            <div>
                <Navbar />
                <div className="row">
                    <Sidebar>
                        {/* <div className="sidebar-content">
                            <input
                                type="checkbox"
                                onChange={this.handleFilter}
                                checked={this.props.idGreaterThanFive}
                            />
                            <label htmlFor="">ID greater than 5</label>
                        </div> */}
                        <Filter onChangeCheckbox={this.handleFilter} idChecked={this.props.idGreaterThanFive} />
                    </Sidebar>
                    <Content>
                        <SearchBar />
                            {!loading && !loaded && <h4>Start searching for tenders</h4> }
                            {!loading && loaded && (data.length === 0) && <h4>Sorry, no matches found</h4>}
                            {!loading && loaded && (data.length !== 0) && <h6>Найдено тендеров: {data.length}</h6>}
                            {loading ? <Loader /> : <ul>
                                <CSSTransitionGroup
                                    transitionName="appear"
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}
                                    >
                                {items}
                                </CSSTransitionGroup>
                            </ul>
                            }
                    </Content>
                </div>
            </div>
        )
    }
    handleFilter = () => {
        this.props.filterData()
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    const { inputString } = state
    const reg = new RegExp(inputString, 'gi')
    return {
        data: state.searchResults.filter(item => {
            // state.idGreaterThanFive ? (item.id > 5 && item.name.match(reg)) : (item && item.name.match(reg))
            if(state.idGreaterThanFive) {
                return item.id > 5 && (item.name.match(reg) || item.username.match(reg))
            }
            return item && (item.name.match(reg) || item.username.match(reg))
        }),
        loading: state.loading,
        loaded: state.loaded,
        error: state.error,
        idGreaterThanFive: state.idGreaterThanFive
    }
}

export default connect(mapStateToProps, { filterData })(Search)
