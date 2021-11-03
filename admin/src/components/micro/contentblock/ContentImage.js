import React from 'react';

function Comp(props) {

    return(
        <>
            <div class="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
                <img src={props.image} alt="" class="img-fluid rounded" />
            </div>
        </>
    )
}

export default Comp