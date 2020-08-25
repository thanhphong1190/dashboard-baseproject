import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { LINE_OPTION } from '../../constants/mockData'

const ChartLine = props => {
    const { chartData } = props
    const changeChartOptions = () => {
        const newLineOptions = _.assign(LINE_OPTION, {
            series: chartData
        })
        return newLineOptions
    }
    // render
    return (
        <HighchartsReact highcharts={Highcharts} options={changeChartOptions()} />
    )
}

ChartLine.propTypes = {
    chartData: PropTypes.array,
};

ChartLine.defaultProps = {
    chartData: []
};

export default ChartLine
