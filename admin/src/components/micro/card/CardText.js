import React from 'react'

function Comp(props) {
    
    let highlight = ""

    if(props.highlight){
        highlight = " text-white"
    }

    return(
        <>
        <p class={`mb-4`+highlight}>{props.text}</p>
        </>
    )
}

export default Comp