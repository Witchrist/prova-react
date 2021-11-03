import React from 'react'

function Comp(props) {
    let column = "col-md-"+props.column
    function checkAriaDescribedBy(){
        if(props.describedby){
            return(
                <>
                <small id={props.describedby} className="form-text text-muted">Não compartilhamos seu email 
                com nenhuma outra pessoa</small>
                </>
            )
        }
    }
    return(
        <>
        <div className={`form-group `+column}>
            <label for={props.label} className="input__label">{props.name}</label>
            <input type={props.type} className="form-control input-style" id={props.label}
            aria-describedby={props.describedby} placeholder={props.placeholder}/>
            {checkAriaDescribedBy()}
        </div>
        </>
    )
}

export default Comp