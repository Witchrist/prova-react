import React from 'react';
import PricingTable from './PricingTable';

function PricingTableList(props) {

    return(
        <>
            <PricingTable pricingName="Free"
                            price={0}
                            domain={1}
                            users={10}
                            gb={2}
                            support="Email support">
            </PricingTable>
            <PricingTable pricingName="Regular"
                            price={49}
                            domain={10}
                            users={20}
                            gb={10}
                            support="Priority email support">
            </PricingTable>
            <PricingTable pricingName="Premium"
                            price={199}
                            domain={30}
                            users={30}
                            gb={15}
                            support="Phone and email support">
            </PricingTable>
        </>
    )
}

export default PricingTableList