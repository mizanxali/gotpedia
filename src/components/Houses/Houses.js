import axios from 'axios';
import React, { Component } from 'react'
import { CardDeck, Container } from 'react-bootstrap';
import HousesCard from './HousesCard/HousesCard';
import Spinner from  '../UI/Spinner/Spinner'

class Houses extends Component {
    state = {
        houses: null,
        isLoading: true
    }

    componentDidMount() {
        axios.get('https://gotpedia-e49a3-default-rtdb.firebaseio.com/houses.json')
        .then(res => {
            // console.log(res.data);
            this.setState({houses: res.data, isLoading: false})
            // console.log(this.state.houses);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        let housesList = null
        let housesRow1 = null
        let housesRow2 = null
        let housesRow3 = null
        let content = null

        if(this.state.houses) {
            housesList = this.state.houses.map((item, i) => {
                return <HousesCard key={item.name} houseName={item.name} houseDescription={item.description} housePath={item.houseURL} />
            })

            housesRow1 = housesList.slice(0, 3)
            housesRow2 = housesList.slice(3, 7)
            housesRow3 = housesList.slice(7, 11)
        }

        content = (
            <Container className='content'>
                <h1 style={{fontFamily: 'Game of Thrones', margin: '20px', marginTop: '80px'}}>HOUSES</h1>
                <h2>The most powerful noble houses of the Seven Kingdoms.</h2>
                <CardDeck>
                    {housesRow1}
                </CardDeck>
                <CardDeck>
                    {housesRow2}
                </CardDeck>
                <CardDeck>
                    {housesRow3}
                </CardDeck>
            </Container>
        )

        if(this.state.isLoading) {
            content = <Spinner />
        }
        
        return content
    }
}

export default Houses