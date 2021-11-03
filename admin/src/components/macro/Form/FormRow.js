import React from 'react'

function Comp(props) {

    return(
        <>
        <div class="form-row">
            {props.children}
        </div>
        </>
    )
}

export default Comp