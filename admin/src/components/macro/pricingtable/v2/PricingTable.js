import React from 'react';
import Button from '../../../micro/button/Button'

function Comp(props) {

    let plan = props.plan;
    console.log(props.plan)

    function checkPlan(){
        if(plan == "Basic"){
            return <li class="list-group-item">Limited UI Blocks</li>
        }
        else {
            return <li class="list-group-item">Unlimited UI Blocks</li>
        }
    }
    return(
        <>
            <div class="col-lg-4 col-md-6 px-2 mb-4">
                  <div class="card text-center card__hover">
                    <div class="card-header">
                      <h3 class="display-4"><span class="currency">$</span>{props.price}<span class="period">/month</span></h3>
                    </div>
                    <div class="card-block">
                      <h4 class="card-title">
                      {props.plan} Plan
                      </h4>
                      <ul class="list-group">
                        <li class="list-group-item">{props.domain} Domain</li>
                        <li class="list-group-item">Ultimate Features</li>
                        <li class="list-group-item">Responsive Ready</li>
                        <li class="list-group-item">Editor Ready Builder</li>
                        {checkPlan()}
                        <li class="list-group-item">24/7 Support System</li>
                      </ul>
                      <Button text="Choose Plan"/>
                    </div>
                  </div>
                </div>
        </>
    )
}

export default Comp