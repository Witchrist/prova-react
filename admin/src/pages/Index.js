import React from 'react';
import Statistic from "../components/micro/index/Statistic"
import StatisticRow from '../components/macro/index/StatisticRow'
import Chart from '../components/micro/index/Chart'
import ChartRow from '../components/macro/index/ChartRow'

function Comp(props) {

    return(
        <>
        <div className="welcome-msg pt-3 pb-4">
          <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
          <p>Very detailed and featured admin.</p>
        </div>
        <StatisticRow>
                <Statistic title="users" value="30.59"/>
                <Statistic title="visitors" value="61.75"/>
                <Statistic title="downloads" value="200.10"/>
                <Statistic title="purchased" value="2,500"/>
        </StatisticRow>

        <ChartRow>
              <Chart title="Bar Chart" update="Updated 2 hours ago"/>
              <Chart title="Line Chart" update="Updated just now"/>
        </ChartRow>
        </>
    )
}

export default Comp