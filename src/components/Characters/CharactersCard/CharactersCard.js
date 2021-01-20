import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CharactersCard = (props) => {
    return(
            <Card style={{width: '100%', backgroundColor: '#25283D', border: '1px solid white', margin: '20px 5px' }}>
                <Card.Img style={{height: '65%', backgroundColor: '#C0D6DF'}} variant="top" src={require('../../../assets/characters/' + props.characterName + '.png')} />
                <Card.Body className='content'>
                    <Card.Title style={{fontFamily: 'Game of Thrones'}}>{props.characterName}</Card.Title>
                </Card.Body>
                <Card.Footer style={{backgroundColor: '#343a40'}}>
                    <Link style={{fontFamily: 'Game of Thrones', color: '#FFA69E'}} to={'/characters' + props.characterPath}>READ MORE</Link>
                </Card.Footer>
            </Card>
    )
}

export default CharactersCard