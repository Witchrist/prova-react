import React from 'react';
import Statistic from "../components/micro/index/Statistic"
import StatisticRow from '../components/macro/index/StatisticRow'

function Comp(props) {

    return(
        <>
        <div class="welcome-msg pt-3 pb-4">
          <h1>Hi <span class="text-primary">John</span>, Welcome back</h1>
          <p>Very detailed and featured admin.</p>
        </div>

        {/* <!-- statistics data --> */}
        <StatisticRow>
                <Statistic title="users" value="30.59"/>
                <Statistic title="visitors" value="61.75"/>
                <Statistic title="downloads" value="200.10"/>
                <Statistic title="purchased" value="2,500"/>
        </StatisticRow>
        {/* <!-- //statistics data --> */}

        {/* <!-- charts --> */}
        <div class="chart">
          <div class="row">
            <div class="col-lg-6 pr-lg-2 chart-grid">
              <div class="card text-center card_border">
                <div class="card-header chart-grid__header">
                  Bar Chart
                </div>
                <div class="card-body">
                  {/* <!-- bar chart --> */}
                  <div id="container">
                    <canvas id="barchart"></canvas>
                  </div>
                  {/* <!-- //bar chart --> */}
                </div>
                <div class="card-footer text-muted chart-grid__footer">
                  Updated 2 hours ago
                </div>
              </div>
            </div>
            <div class="col-lg-6 pl-lg-2 chart-grid">
              <div class="card text-center card_border">
                <div class="card-header chart-grid__header">
                  Line Chart
                </div>
                <div class="card-body">
                  {/* <!-- line chart --> */}
                  <div id="container">
                    <canvas id="linechart"></canvas>
                  </div>
                  {/* <!-- //line chart --> */}
                </div>
                <div class="card-footer text-muted chart-grid__footer">
                  Updated just now
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //charts --> */}
        </>
    )
}

export default Comp