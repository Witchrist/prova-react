import React from 'react'

function Select(props) {

    let column = "col-md-"+props.column
   
    return(
        <>
        <div className={`form-group `+column}>
            <label for={props.label} className="input__label">{props.name}</label>
            <select className="form-control input-style" id={props.label}>
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        </>
    )
}

export default Select