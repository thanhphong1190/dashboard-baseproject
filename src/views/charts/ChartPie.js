import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { PIE_STANDARD_OPTION } from '../../constants/mockData'

const ChartPie = props => {
    const { chartData, pieType } = props
    const changeChartOptions = (_pieType) => {
        switch (_pieType) {
            case 'slice':
                const newPieOptions = _.assign(PIE_STANDARD_OPTION, {
                    title: {
                        text: 'Pie chart standard'
                    },
                    series: chartData
                })
                return newPieOptions
            default: return PIE_STANDARD_OPTION
        }
    }
    
    return (
        <HighchartsReact highcharts={Highcharts} options={changeChartOptions(pieType)} />
    )
}

ChartPie.propTypes = {
    chartData: PropTypes.array,
};

ChartPie.defaultProps = {
    chartData: []
};

export default ChartPie
