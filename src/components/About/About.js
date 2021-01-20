import React from 'react'
import { Container } from 'react-bootstrap'

const About = (props) => {
    return (
        <Container>
                <div className='content'>
                    <h1 style={{fontFamily: 'Game of Thrones', margin: '20px', marginTop: '80px'}}>ABOUT GOTPEDIA</h1>
                    <h6>v1.0.0</h6>
                    <p>This website was built using ReactJS by <a style={{color: '#FFA69E'}} href='https://twitter.com/mizanxali'>@mizanxali</a></p>
                    <p>I am a Web Developer and a Game of Thrones stan (obviously)!</p>
                    <p>Fork the website repo on <a style={{color: '#FFA69E'}} href='https://github.com/mizanxali'>GitHub</a></p>
                    <hr style={{borderTop: '3px double white'}}></hr>
                    <h6>Coming soon</h6>
                    <p>- More characters</p>
                    <p>- Locations</p>
                </div>
            </Container>
    )
}

export default About