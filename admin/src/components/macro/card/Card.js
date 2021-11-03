import React from 'react'
import CardText from '../../micro/card/CardText'
import Citation from '../../micro/card/Citation'

function Card(props) {

    let highlight = ""

    if(props.highlight){
        highlight = " bg-primary text-white text-center"
    }
    
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
                  <img src={props.image} className="card-img-top" alt="..."/>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className={`card p-3`+highlight}>
                    <blockquote className="blockquote mb-0 card-body">
                        {checkTitle()}
                        {props.highlight ? <CardText text={props.text} highlight/>: 
                        <CardText text={props.text}/>}
                        {props.citation!=null && props.highlight ? <footer className="blockquote-footer">
                        <Citation text={props.citation} highlight/>
                        </footer> : null}
                    </blockquote>
                </div>
            </>
        )
    }
}

export default Card