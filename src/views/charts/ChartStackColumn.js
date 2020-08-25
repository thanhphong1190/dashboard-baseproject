import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { STACK_COLUMN_OPTION } from '../../constants/mockData'

const ChartStackColumn = props => {
    const { chartData } = props
    const changeChartOptions = () => {
        const newStackColumnOptions = _.assign(STACK_COLUMN_OPTION, {
            series: chartData
        })
        return newStackColumnOptions
    }
    // render
    return (
        <HighchartsReact highcharts={Highcharts} options={changeChartOptions()} />
    )
}

ChartStackColumn.propTypes = {
    chartData: PropTypes.array
};

ChartStackColumn.defaultProps = {
    chartData: []
};

export default ChartStackColumn
