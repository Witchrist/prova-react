import React from 'react';
import PricingTable from './PricingTable';
import PricingHeading from '../../../micro/ComponentHeading'

function PricingTableList(props) {

    return(
        <>
        <section className="pricing">
            <div className="card card_border mb-5">
                <PricingHeading header="Pricing Tables - Version 1"/>
                <div class="card-body">
                    <section className="w3l-pricing1">
                        <div className="row px-2">
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
                        </div>
                    </section>
                </div>
            </div>
        </section>
        </>
    )
}

export default PricingTableList