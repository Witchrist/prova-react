import React from 'react';
import Imagem1 from "../../../assets//images/desk.jpg"

function CardBody(props) {

    return(
        <>
            <div class="card">
                <img src={Imagem1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title that wraps to a new line</h5>
                    <p class="card-text mb-4">This is a longer card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </>
    )
}

export default CardBody