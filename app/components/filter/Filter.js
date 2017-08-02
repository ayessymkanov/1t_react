import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../form-components/checkbox/Checkbox'
import FormGroup from '../form-components/formGroup/FormGroup'
import { Select, Option } from 'belle/lib'
import { RadioGroup, Radio } from 'react-radio-group'
import { changeProcurementSource, changeGswType, changeProcurementRegion } from '../../action/filter'
import { connect } from 'react-redux'

import './filter.styles.sass'

const procSources = [
    {label: 'Гос. закупки', value: 'GZ'},
    {label: 'Самрук-Казына', value: 'SK'}
]

const regions = [
    {label: 'Астана', value: '010000'},
    {label: 'Алматы', value: '010001'},
    {label: 'Оскемен', value: '010002'},
    {label: 'Чимкент', value: '010003'},
    {label: 'Семей', value: '010004'},
    {label: 'Актобе', value: '010005'},
    {label: 'Павлодар', value: '010006'},
    {label: 'Актау', value: '010007'},
    {label: 'Костанай', value: '010008'},
    {label: 'Кокчетав', value: '010009'}
]

class Filter extends Component {
    render() {
        return (
            <div className="filter-container">
                {/* <FormGroup groupLabel="Checkboxes">
                    <Checkbox id="id" label="ID greater than 5" onChange={this.props.onChangeCheckbox} isChecked={this.props.idChecked} />
                    <Checkbox id="id2" label="ID greater than 10" />
                </FormGroup> */}
                <FormGroup groupLabel="ТРУ">
                    <RadioGroup name="tru" selectedValue={this.props.gswType} onChange={this.changeGswType}>
                        <label className="radio-item"><Radio value="G" className="radio" />Товары</label>
                        <label className="radio-item"><Radio value="W" className="radio" />Работы</label>
                        <label className="radio-item"><Radio value="S" className="radio" />Услуги</label>
                    </RadioGroup>
                </FormGroup>
                <FormGroup groupLabel="Источник">
                    <Select  onUpdate={this.changeProcurementSource}>
                        {procSources.map(item => <Option value={item.value} key={item.value}>{item.label}</Option>)}
                    </Select>
                </FormGroup>
                <FormGroup groupLabel="Регион">
                    <Select onUpdate={this.changeProcurementRegion}>
                        {regions.map(region => <Option value={region.value} key={region.value}>{region.label}</Option>)}
                    </Select>
                </FormGroup>
            </div>
        )
    }
    changeProcurementSource = source => {
        this.props.changeProcurementSource(source.value)
    }
    changeGswType = value => {
        this.props.changeGswType(value)
    }
    changeProcurementRegion = region => {
        this.props.changeProcurementRegion(region.value)
    }
}

Filter.PropTypes = {
    filterProps: PropTypes.object
}

const mapStateToProps = state => {
    return {
        gswType: state.filter.get('gswType')
    }
}

export default connect(mapStateToProps, {changeProcurementSource, changeGswType, changeProcurementRegion})(Filter)
