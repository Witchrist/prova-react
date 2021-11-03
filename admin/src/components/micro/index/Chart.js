import React from 'react'

function Comp(props) {

    return(
        <>
        <div class="col-lg-6 pr-lg-2 chart-grid">
        <div class="card text-center card_border">
                <div class="card-header chart-grid__header">
                  {props.title}
                </div>
                <div class="card-body">
                  {/* <!-- bar chart --> */}
                  <div id="container">
                    <canvas id="barchart"></canvas>
                  </div>
                  {/* <!-- //bar chart --> */}
                </div>
                <div class="card-footer text-muted chart-grid__footer">
                  {props.update}
                </div>
            </div>
        </div>
        </>
    )
}

export default Comp