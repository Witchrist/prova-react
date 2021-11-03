import React from 'react'

function Button(props) {

    return(
        <>
            <a href={props.href} class="btn btn-style btn-primary">{props.text}</a>
        </>
    )
}

export default Button