import React from 'react'

function Checkbox(props) {

    return(
        <>
            <div className="form-check check-remember check-me-out m-1">
                <input type="checkbox" className="form-check-input checkbox" id={props.label}/>
                <label className="form-check-label checkmark" for={props.label}>{props.text}</label>
            </div>
        </>
    )
}

export default Checkbox