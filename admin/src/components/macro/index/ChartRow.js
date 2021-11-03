import React from 'react'

function Comp(props) {

    return(
        <>
        <div className="chart">
          <div className="row">
            {props.children}
          </div>
          </div>
        </>
    )
}

export default Comp