import React from 'react'

function Checkbox(props) {

    return(
        <>
            <div className="form-check check-remember check-me-out m-1">
                <input type="checkbox" className="form-check-input checkbox" id="exampleCheck1"/>
                <label className="form-check-label checkmark" for="exampleCheck1">Check me out</label>
            </div>
        </>
    )
}

export default Checkbox