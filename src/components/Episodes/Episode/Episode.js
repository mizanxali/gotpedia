import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Episode.css'
import axios from 'axios'
import Spinner from '../../UI/Spinner/Spinner'
import { Container, Button, Image } from 'react-bootstrap'
import { Fade } from 'react-reveal'

class Episodes extends Component {
    state = {
        episode: null,
        isLoading: true
    }

    componentDidMount() {
        axios.get('https://gotpedia-e49a3-default-rtdb.firebaseio.com/episodes/season' + this.props.seasonNumber + '.json')
        .then(res => {
            this.setState({episode: res.data[this.props.episodeNumber-1], isLoading: false});
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate() {
        axios.get('https://gotpedia-e49a3-default-rtdb.firebaseio.com/episodes/season' + this.props.seasonNumber + '.json')
        .then(res => {
            this.setState({episode: res.data[this.props.episodeNumber-1], isLoading: false});
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        let content = null
        let episodeName = null
        let episodePlot = null
        let episodePlotList = null
        let nextEpisodeLink = null
        let previousEpisodeLink = null

        if(this.state.episode) {
            episodeName = this.state.episode.name
            episodePlot = this.state.episode.plot
            nextEpisodeLink = this.state.episode.nextEpisodeURL
            previousEpisodeLink = this.state.episode.previousEpisodeURL
            // console.log(episodePlot[0].location);
            episodePlotList = episodePlot.map((item, i) => {
                return (
                    <Fade>
                        <div style={{margin: '20px'}} key={item.location}>
                            <h4 style={{color: '#C0D6DF'}}>{item.location}</h4>
                            <div style={{color: '#DBE9EE'}} dangerouslySetInnerHTML={{__html: item.summary}}></div>
                            <hr style={{borderTop: '3px double white'}}></hr>
                        </div>
                    </Fade>
                )
            })
        }

        content = (
            <div>
                <h3 className='season-episode-number'>Season {this.props.seasonNumber} - Episode {this.props.episodeNumber}</h3>
                <h1 className='episode-name'>{episodeName}</h1>
                <div className='next-previous-buttons-holder' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    {previousEpisodeLink ? <Button style={{width: '200px'}} variant="outline-light"><Link className='episode-links' to={'/episodes' + previousEpisodeLink} >Previous Episode</Link></Button> : null}
                    {nextEpisodeLink  ? <Button style={{width: '200px'}} variant="outline-light"><Link className='episode-links' to={'/episodes' + nextEpisodeLink}>Next Episode</Link></Button> : null}
                </div>
                <Image src={require('../../../assets/episodecovers/season'+this.props.seasonNumber+'/episode'+this.props.episodeNumber+'cover.jpg')} fluid style={{border: '1px solid white', borderRadius: '5px'}} />
                {episodePlotList}
            </div>
        )

        if(this.state.isLoading) {
            content = <Spinner />
        }

        return(
            <Container>
                <div className='content'>
                    {content}
                </div>
            </Container>
        )
    }
}

export default withRouter(Episodes)