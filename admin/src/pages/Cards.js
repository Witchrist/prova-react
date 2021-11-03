import React from 'react'
import CardColumn from '../components/macro/card/CardColumn';
import Card from '../components/macro/card/Card';
import CardBody from '../components/macro/card/CardBody';

function Cards(props) {

    return(
        <>
            <CardColumn header="Card Columns">
                <CardBody title="Card title that wraps to a new line"
                            text="This card has supporting text below as a natural lead-in to additional content.">
                </CardBody>

                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." 
                        citation="Someone famous in Source Title">
                </Card>
                <CardBody title="Card title that wraps to a new line"
                            text="This card has supporting text below as a natural lead-in to additional content.">
                </CardBody>
                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." 
                        citation="Someone famous in Source Title"
                        highlight>
                </Card>
                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.">
                </Card>
                <Card image="https://sennda.com.br/wp-content/uploads/2020/01/blur-business-coffee-commerce-273222-scaled.jpg"></Card>
                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." 
                        citation="Someone famous in Source Title"/>
                <Card title="Card title" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.">
                </Card>
            </CardColumn>
            <CardColumn header="Grid Columns">
            <CardBody title="Card title that wraps to a new line"
                            text="This card has supporting text below as a natural lead-in to additional content.">
                </CardBody>
                <CardBody title="Card title that wraps to a new line"
                            text="This card has supporting text below as a natural lead-in to additional content.">
                </CardBody>
                <CardBody title="Card title that wraps to a new line"
                            text="This card has supporting text below as a natural lead-in to additional content.">
                </CardBody>
                <CardBody title="Card title that wraps to a new line"
                            text="This card has supporting text below as a natural lead-in to additional content.">
                </CardBody>
            </CardColumn>

        </>
    )
}

export default Cards