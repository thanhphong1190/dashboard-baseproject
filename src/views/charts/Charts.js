import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import ChartPie from './ChartPie'
import ChartLine from './ChartLine'
import ChartStackColumn from './ChartStackColumn'
import { PIE_CHART_SLICE_DATA, LINE_CHART_DATA, STACK_COLUMN_DATA } from '../../constants/mockData'
import http from '../../helpers/http'

const Charts = () => {
  const [seriesPieSlice, setSeriesPieSlice] = useState(PIE_CHART_SLICE_DATA)
  const [seriesLine, setSeriesLine] = useState(LINE_CHART_DATA)
  const [seriesStackColumn, setSeriesStackColumn] = useState(STACK_COLUMN_DATA)

  // For api call

  // const getSliceChartData = async () => {
  //   const res = await http.get('series')
  //   console.log("res", res);
  // }

  // useEffect(() => {
  //   getSliceChartData();
  // })
  

  return (
    <CCardGroup columns className="cols-2" >
      <CCard>
        <CCardHeader>
          Pie Chart with Slice
        </CCardHeader>
        <CCardBody>
          <ChartPie chartData={seriesPieSlice} pieType="slice"/>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Line chart
        </CCardHeader>
        <CCardBody>
          <ChartLine chartData={seriesLine} />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Stack column chart
        </CCardHeader>
        <CCardBody>
          <ChartStackColumn chartData={seriesStackColumn} />
        </CCardBody>
      </CCard>
    </CCardGroup>
  )
}

export default Charts
