import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../form-components/checkbox/Checkbox'
import Radio from '../form-components/radio/Radio'
import FormGroup from '../form-components/formGroup/FormGroup'

import './filter.styles.sass'


export default class Filter extends Component {
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
            </div>
        )
    }
}

Filter.PropTypes = {
    filterProps: PropTypes.object
}
