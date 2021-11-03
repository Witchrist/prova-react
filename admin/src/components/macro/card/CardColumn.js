import React from 'react';
import ComponentHeading from '../../micro/ComponentHeading'

function CardHeading(props) {

    return(
        <>
        <section class="template-cards">
            <div class="card card_border mb-5">
                <ComponentHeading header={props.header}></ComponentHeading>
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

export default CardHeading