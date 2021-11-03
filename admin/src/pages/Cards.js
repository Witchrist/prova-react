import React from 'react'
import CardColumn from '../components/macro/card/CardColumn';
import Card from '../components/macro/card/Card';
import CardBody from '../components/macro/card/CardBody';

function Cards(props) {

    return(
        <>
            <CardColumn header="Card Columns">
                <CardBody></CardBody>
                <Card></Card>
                <CardBody></CardBody>
                <Card></Card>
                <Card></Card>
                <Card image="https://sennda.com.br/wp-content/uploads/2020/01/blur-business-coffee-commerce-273222-scaled.jpg"></Card>
                <Card></Card>
                <Card title="Card title"></Card>
            </CardColumn>
            <CardColumn header="Grid Columns">
                <CardBody></CardBody>
                <CardBody></CardBody>
                <CardBody></CardBody>
                <CardBody></CardBody>
            </CardColumn>

        </>
    )
}

export default Cards