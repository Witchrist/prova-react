import React from 'react';
import ComponentHeading from '../../micro/ComponentHeading'

function CardHeading(props) {

    return(
        <>
        <section className="template-cards">
            <div className="card card_border mb-5">
                <ComponentHeading header={props.header}></ComponentHeading>
                <div className="card-body">
                    <div className="card-columns">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CardHeading