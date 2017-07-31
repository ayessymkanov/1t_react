import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../form-components/checkbox/Checkbox'
import Radio from '../form-components/radio/Radio'
import FormGroup from '../form-components/formGroup/FormGroup'
import { Select, Option } from 'belle/lib'
import { changeProcurementSource } from '../../action/filter'
import { connect } from 'react-redux'

import './filter.styles.sass'

const items = [
    {label: 'Гос. закупки', value: 'GZ'},
    {label: 'Самрук-Казына', value: 'SK'}
]

class Filter extends Component {
    render() {
        return (
            <div className="filter-container">
                <FormGroup groupLabel="Checkboxes">
                    <Checkbox id="id" label="ID greater than 5" onChange={this.props.onChangeCheckbox} isChecked={this.props.idChecked} />
                    <Checkbox id="id2" label="ID greater than 10" />
                </FormGroup>
                <FormGroup groupLabel="TRU">
                    <Radio id="1" name="tru" label="Goods" />
                    <Radio id="2" name="tru" label="Jobs" />
                    <Radio id="3" name="tru" label="Services" />
                </FormGroup>
                <FormGroup groupLabel="Источник">
                    <Select  onUpdate={this.changeProcurementSource}>
                        {items.map(item => <Option value={item.value} key={item.value}>{item.label}</Option>)}
                    </Select>
                </FormGroup>
            </div>
        )
    }
    changeProcurementSource = source => {
        this.props.changeProcurementSource(source.value)
    }
}

Filter.PropTypes = {
    filterProps: PropTypes.object
}

export default connect(null, {changeProcurementSource})(Filter)
