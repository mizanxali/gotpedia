import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Season.css'
import Spinner from '../../UI/Spinner/Spinner'
import { Image, Container, Button } from 'react-bootstrap'
import { Fade } from 'react-reveal';


class Season extends Component {
    state = {
        season: null,
        isLoading: true
    }

    componentDidMount() {
        axios.get('https://gotpedia-e49a3-default-rtdb.firebaseio.com/seasons/season' + this.props.seasonNumber + '.json')
        .then(res => {
            this.setState({season: res.data, isLoading: false})
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        let episodeList = null
        let episodePlot = null
        let content = null

        if(this.state.season) {
            episodePlot = this.state.season.plot;
            episodeList = this.state.season.episodes.map((item, i) => {
                return <Link className='season-episode-links' to={'/episodes' + item.url} key={item.name}>Episode {i+1} : {item.name}</Link>
            });
        }

        content = (
            <div className='Season'>
                <div className='cover'>
                    <Image className='coverimage' src={require('../../../assets/seasoncovers/season'+this.props.seasonNumber+'cover.jpg')} fluid />
                    <h1 className='covertext'>Season {this.props.seasonNumber}</h1>
                </div>
                
                <Container>
                    <div className='next-previous-buttons-holder' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        {this.props.seasonNumber!=1 ? <Button style={{width: '200px'}} variant="outline-light"><Link className='episode-links' to={'/seasons/season' + (Number(this.props.seasonNumber)-1)}>Previous Season</Link></Button> : null}
                        {this.props.seasonNumber!=8  ? <Button style={{width: '200px'}} variant="outline-light"><Link className='episode-links' to={'/seasons/season' + (Number(this.props.seasonNumber)+1)}>Next Season</Link></Button> : null}
                    </div>

                    <div className='content'>
                    <Fade>
                        <div style={{color: '#DBE9EE'}} dangerouslySetInnerHTML={{__html: episodePlot}}></div>
                        <ul>
                            {episodeList}
                        </ul>
                    </Fade>
                    </div>
                </Container>
            </div>
        )

        if(this.state.isLoading) {
            content = <Spinner />
        }

        return content
    }
}

export default withRouter(Season)