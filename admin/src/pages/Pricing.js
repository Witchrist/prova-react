import React from 'react';
import PricingTableListV1 from '../components/macro/pricingtable/v1/PricingTableList';
import PricingTableListV2 from '../components/macro/pricingtable/v2/PricingTableList';
function Comp(props) {

    return(
        <>
        <PricingTableListV1></PricingTableListV1>
        <PricingTableListV2></PricingTableListV2>
        </>
    )
}

export default Comp