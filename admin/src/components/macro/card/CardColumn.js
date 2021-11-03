import React from 'react';
import CardHeading from '../../micro/card/CardHeading'

function Comp(props) {

    return(
        <>
        <section class="template-cards">
            <div class="card card_border mb-5">
                <CardHeading header={props.header}></CardHeading>
                <div class="card-body">
                    <div class="card-columns">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Comp