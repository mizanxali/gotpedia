import axios from 'axios'
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from '../UI/Spinner/Spinner'

class Episodes extends Component {

    state = {
        seasons: null,
        isLoading: true
    }

    componentDidMount() {
        axios.get('https://gotpedia-e49a3-default-rtdb.firebaseio.com/seasons.json')
        .then(res => {
            this.setState({seasons: res.data, isLoading: false})
            // console.log(this.state.seasons);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render() {

        let season1Episodes = null
        let season2Episodes = null
        let season3Episodes = null
        let season4Episodes = null
        let season5Episodes = null
        let season6Episodes = null
        let season7Episodes = null
        let season8Episodes = null
        let content = null

        if(this.state.seasons) {
            season1Episodes = this.state.seasons.season1.episodes.map((item, i) => {
                return <Link className='seasons-and-episodes-links' to={'/episodes' + item.url} key={item.name}>Episode {i+1} - {item.name}</Link>
            })
            season2Episodes = this.state.seasons.season2.episodes.map((item, i) => {
                return <Link className='seasons-and-episodes-links' to={'/episodes' + item.url} key={item.name}>Episode {i+1} - {item.name}</Link>
            })
            season3Episodes = this.state.seasons.season3.episodes.map((item, i) => {
                return <Link className='seasons-and-episodes-links' to={'/episodes' + item.url} key={item.name}>Episode {i+1} - {item.name}</Link>
            })
            season4Episodes = this.state.seasons.season4.episodes.map((item, i) => {
                return <Link className='seasons-and-episodes-links' to={'/episodes' + item.url} key={item.name}>Episode {i+1} - {item.name}</Link>
            })
            season5Episodes = this.state.seasons.season5.episodes.map((item, i) => {
                return <Link className='seasons-and-episodes-links' to={'/episodes' + item.url} key={item.name}>Episode {i+1} - {item.name}</Link>
            })
            season6Episodes = this.state.seasons.season6.episodes.map((item, i) => {
                return <Link className='seasons-and-episodes-links' to={'/episodes' + item.url} key={item.name}>Episode {i+1} - {item.name}</Link>
            })
            season7Episodes = this.state.seasons.season7.episodes.map((item, i) => {
                return <Link className='seasons-and-episodes-links' to={'/episodes' + item.url} key={item.name}>Episode {i+1} - {item.name}</Link>
            })
            season8Episodes = this.state.seasons.season8.episodes.map((item, i) => {
                return <Link className='seasons-and-episodes-links' to={'/episodes' + item.url} key={item.name}>Episode {i+1} - {item.name}</Link>
            })
        }

        content = (
            <Container>
                <div className='content'>
                    <h1 style={{fontFamily: 'Game of Thrones', margin: '20px', marginTop: '80px'}}>EPISODES</h1>
                    <h2>The complete list.</h2>
                    <h4 style={{color: '#DBE9EE'}}>Season 1</h4>
                    {season1Episodes}
                    <hr style={{borderTop: '3px double white'}}></hr>
                    <h4 style={{color: '#DBE9EE'}}>Season 2</h4>
                    {season2Episodes}
                    <hr style={{borderTop: '3px double white'}}></hr>
                    <h4 style={{color: '#DBE9EE'}}>Season 3</h4>
                    {season3Episodes}
                    <hr style={{borderTop: '3px double white'}}></hr>
                    <h4 style={{color: '#DBE9EE'}}>Season 4</h4>
                    {season4Episodes}
                    <hr style={{borderTop: '3px double white'}}></hr>
                    <h4 style={{color: '#DBE9EE'}}>Season 5</h4>
                    {season5Episodes}
                    <hr style={{borderTop: '3px double white'}}></hr>
                    <h4 style={{color: '#DBE9EE'}}>Season 6</h4>
                    {season6Episodes}
                    <hr style={{borderTop: '3px double white'}}></hr>
                    <h4 style={{color: '#DBE9EE'}}>Season 7</h4>
                    {season7Episodes}
                    <hr style={{borderTop: '3px double white'}}></hr>
                    <h4 style={{color: '#DBE9EE'}}>Season 8</h4>
                    {season8Episodes}
                    <hr style={{borderTop: '3px double white'}}></hr>
                </div>
            </Container>
        )

        if(this.state.isLoading) {
            content = <Spinner />
        }

        return content
    }
}

export default Episodes