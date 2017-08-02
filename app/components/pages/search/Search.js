import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar'
import { Sidebar } from '../../sidebar/Sidebar'
import Content from '../../content/Content'
import SearchBar from '../../searchBar/SearchBar'
import { connect } from 'react-redux'
import { startSearch } from '../../../action/search'
import { filterData } from '../../../action/creators'
import ProcItem from '../../procItem/ProcItem'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Filter from '../../filter/Filter'
import { Loader } from '../../loader/Loader'

import './search.styles.sass'

class Search extends Component {

    render() {
        const { loading, loaded, data } = this.props
        const items = data.map(item => <li key={item.id}><ProcItem item={item} /></li>)

        return (
            <div>
                <Navbar />
                <div className="container">
                    <Sidebar>
                        <Filter onChangeCheckbox={this.handleFilter} idChecked={this.props.idGreaterThanFive} />
                    </Sidebar>
                    <Content>
                        <SearchBar />
                            {!loading && !loaded && <h4>Start searching for tenders</h4> }
                            {!loading && loaded && (data.length === 0) && <h4>Sorry, no matches found</h4>}
                            {!loading && loaded && (data.length !== 0) && <h6>Найдено тендеров: {data.size}</h6>}
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
    const { inputString } = state.searchReducer
    const reg = new RegExp(inputString, 'gi')
    return {
        // data: state.searchReducer.searchResults.filter(item => {
        //     if(state.searchReducer.idGreaterThanFive) {
        //         return item.id > 5 && (item.name.match(reg) || item.username.match(reg))
        //     }
        //     return item && (item.name.match(reg) || item.username.match(reg))
        // }),
        data: state.searchReducer.get('searchResults'),
        loading: state.searchReducer.get('loading'),
        loaded: state.searchReducer.get('loaded'),
        error: state.searchReducer.get('error'),
        idGreaterThanFive: state.searchReducer.get('idGreaterThanFive')
    }
}

export default connect(mapStateToProps, { filterData })(Search)
