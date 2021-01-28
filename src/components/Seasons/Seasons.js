import axios from 'axios'
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from '../UI/Spinner/Spinner'
import FIREBASE_PROJECT_URL from '../../firebase'

class Seasons extends Component {
    state = {
        seasons: null,
        isLoading: true
    }

    componentDidMount() {
        this.fetchSeason()
    }

    componentDidUpdate() {
        this.fetchSeason()
    }

    fetchSeason = () => {
        axios.get(FIREBASE_PROJECT_URL + '/seasons.json')
        .then(res => {
            this.setState({seasons: res.data, isLoading: false})
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {
        let seasonsList = null
        let content = null

        if(this.state.seasons) {
            seasonsList = Object.keys(this.state.seasons).map((item, i) => {
                return <Link className='seasons-and-episodes-links' to={'/seasons/' + item}>Season {item.slice(-1)}</Link>
            })
        }

        content = (
            <Container>
                <div className='content'>
                    <h1 style={{fontFamily: 'Game of Thrones', margin: '20px', marginTop: '80px'}}>SEASONS</h1>
                    <h2>Eight seasons. Each better than the last.</h2>
                    {seasonsList}
                </div>
            </Container>
        )

        if(this.state.isLoading) {
            content = <Spinner />
        }

        return content
    }
}

export default Seasons