import React from 'react'

function Citation(props) {
    
    let highlight = ""

    if(props.highlight){
        highlight = " text-white"
    }

    return(
        <>
        <small className={`text-muted`+highlight}>{props.text}</small>
        </>
    )
}

export default Citation