import React, { Component } from 'react'
import axios from 'axios'
import { Container, CardDeck } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CharactersCard from './CharactersCard/CharactersCard'
import Spinner from '../UI/Spinner/Spinner'

class Characters extends Component {
    state = {
        characters: null,
        numberOfCharacters: 0,
        isLoading: true
    }

    componentDidMount() {
        axios.get('https://gotpedia-e49a3-default-rtdb.firebaseio.com/characters.json')
        .then(res => {
            // console.log(res.data);
            this.setState({characters: res.data, numberOfCharacters: res.data.length, isLoading: false})
            console.log(this.state.numberOfCharacters);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {

        let charactersList = null
        let charactersRow1 = null
        let charactersRow2 = null
        let charactersRow3 = null
        let charactersRow4 = null
        let charactersRow5 = null
        let charactersRow6 = null
        let content = null

        if(this.state.characters) {
            charactersList = this.state.characters.map((item, i) => {
                return <CharactersCard key={item.name} characterName={item.name} characterPath={item.characterURL} />
            })

            charactersRow1 = charactersList.slice(0, 4)
            charactersRow2 = charactersList.slice(4, 8)
            charactersRow3 = charactersList.slice(8, 12)
            charactersRow4 = charactersList.slice(12, 16)
            charactersRow5 = charactersList.slice(16, 20)
            charactersRow6 = charactersList.slice(20, 24)
        }

        content = (
            <Container className='content'>
                <h1 style={{fontFamily: 'Game of Thrones', margin: '20px', marginTop: '80px'}}>CHARACTERS</h1>
                <h2>All the major ones.</h2>
                <CardDeck>
                    {charactersRow1}
                </CardDeck>
                <CardDeck>
                    {charactersRow2}
                </CardDeck>
                <CardDeck>
                    {charactersRow3}
                </CardDeck>
                <CardDeck>
                    {charactersRow4}
                </CardDeck>
                <CardDeck>
                    {charactersRow5}
                </CardDeck>
                <CardDeck>
                    {charactersRow6}
                </CardDeck>
            </Container>
        )

        if(this.state.isLoading) {
            content = <Spinner />
        }

        return content
    }
}

export default Characters