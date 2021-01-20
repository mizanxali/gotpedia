import React from 'react'
import { Container } from 'react-bootstrap'

const NotFound = (props) => {
    return (
        <Container>
            <div className='content'>
                <h1 style={{fontFamily: 'Game of Thrones', margin: '20px', marginTop: '80px'}}>ERROR 404</h1>
                <h2>Page not found.</h2>
            </div>
        </Container>
    )
}

export default NotFound