import React from 'react';
import PricingTable from '../v2/PricingTable';
import ComponentHeading from '../../../micro/ComponentHeading'

function PricingTableList(props) {

    return(
        <>
        <div className="pricing-version-2">
            <div className="card card_border mb-5">
            <ComponentHeading header="Pricing Tables - Version 2"/>
                <div className="card-body">
                    <div className="row px-2">
                        <PricingTable price={19}
                                        domain={1}
                                        plan="Basic">
                        </PricingTable>
                        <PricingTable price={29}
                                        domain={10}
                                        plan="Regular">
                        </PricingTable>
                        <PricingTable price={39}
                                        domain={15}
                                        plan="Premium">
                        </PricingTable>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PricingTableList