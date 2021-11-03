import React from 'react'

function Comp(props) {

    return(
        <>
        <div class="statistics">
            <div class="row">
            {props.children}
            </div>
        </div>
        </>
    )
}

export default Comp