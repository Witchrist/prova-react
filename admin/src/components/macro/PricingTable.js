import React from 'react'

function PricingTable(props) {

    return(
        <>
        <div>
            <h4>{props.pricingName}</h4>
            <h1>${props.price}/month</h1>
            <p>There are many variations of passages of Lorem Ipsum available.</p>
            <ul class="list-unstyled list-pricing mt-3 mb-4">
                <li>{props.domain} Domain</li>
                <li>{props.users} users included</li>
                <li>{props.gb} GB of storage</li>
                <li>{props.support}</li>
                <li>Help center access</li>
            </ul>
        </div>
        </>
    )
}

export default PricingTable;