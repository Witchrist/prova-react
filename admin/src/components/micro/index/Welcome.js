import React from 'react'

function Comp(props) {

    return(
        <>
        <div className="welcome-msg pt-3 pb-4">
          <h1>Hi <span className="text-primary">{props.name}</span>, Welcome back</h1>
          <p>Very detailed and featured admin.</p>
        </div>
        </>
    )
}

export default Comp