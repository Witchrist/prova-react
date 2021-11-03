import React from 'react'

function Form(props) {

    return(
        <>
        <div class="card card_border py-2 mb-4">
            <div className="card-body">
                <form action="#" method="post">
                    {props.children}
                </form>
            </div>
        </div>
        </>
    )
}

export default Form