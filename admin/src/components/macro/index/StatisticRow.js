import React from 'react'

function Comp(props) {

    return(
        <>
        <div className="statistics">
            <div className="row">
            {props.children}
            </div>
        </div>
        </>
    )
}

export default Comp