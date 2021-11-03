import React from 'react';
import Imagem1 from "../../../assets//images/desk.jpg"

import CardTitle from '../../micro/card/CardTitle'
import CardText from '../../micro/card/CardText'

function CardBody(props) {

    return(
        <>
            <div className="card">
                <img src={Imagem1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <CardTitle title={props.title}></CardTitle>
                    <CardText text={props.text}></CardText>
                </div>
            </div>
        </>
    )
}

export default CardBody