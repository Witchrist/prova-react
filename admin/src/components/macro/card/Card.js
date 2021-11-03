import React from 'react'

function Card(props) {

    function checkTitle(){
        if(props.title){
            return(
                <h5>{props.title}</h5>
            )
        }
    }
    if(props.image){
        return(
            <>
                <div class="card">
                  <img src={props.image} class="card-img-top" alt="..."/>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body">
                        {checkTitle()}
                        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                          ante.
                        </p>
                        <footer class="blockquote-footer">
                            <small class="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
            </>
        )
    }
}

export default Card