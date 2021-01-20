import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HousesCard = (props) => {
    return(
            <Card style={{width: '100%', backgroundColor: '#25283D', border: '1px solid white', margin: '20px 5px' }}>
                <Card.Img style={{width: '100%', backgroundColor: '#C0D6DF'}} variant="top" src={require('../../../assets/housesigils/' + props.houseName + '.png')} />
                <Card.Body className='content'>
                    <Card.Title style={{fontFamily: 'Game of Thrones'}}>{props.houseName}</Card.Title>
                    <Card.Text style={{color: '#DBE9EE'}}>
                    {props.houseDescription}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor: '#343a40'}}>
                    <Link style={{fontFamily: 'Game of Thrones', color: '#FFA69E'}} to={'/houses' + props.housePath}>READ MORE</Link>
                </Card.Footer>
            </Card>
    )
}

export default HousesCard