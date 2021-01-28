import axios from 'axios'
import React, { Component } from 'react'
import { Image, Container } from 'react-bootstrap'
import Spinner from '../../UI/Spinner/Spinner'
import { Fade } from 'react-reveal'
import FIREBASE_PROJECT_URL from '../../../firebase'

class House extends Component {
    state = {
        house: null,
        isLoading: true
    }

    componentDidMount() {
        axios.get(FIREBASE_PROJECT_URL + '/houses/' + this.props.houseNumber + '.json')
        .then(res => {
            this.setState({house: res.data, isLoading: false})
            // console.log(this.state.house);
        })
    }

    render() {
        let content= null

        if(this.state.house) {
            content = (
                <Container>
                    <h1 style={{fontFamily: 'Game of Thrones', marginTop: '80px'}}>{this.state.house.name}</h1>
                    <Image src={require('../../../assets/housesigils/'+this.state.house.name+'.png')} fluid style={{border: '1px solid white', borderRadius: '5px'}} />
                    <div className='content' style={{border: '1px solid #AA4465', padding: '10px', color: '#FFA69E'}}>
                        <h4 style={{textTransform: 'uppercase', margin: '0 10px'}}>Words: {this.state.house.words}</h4>
                        <h4 style={{textTransform: 'uppercase', margin: '0 10px'}}>Sigil: {this.state.house.sigil}</h4>
                    </div>
                    <Fade>
                        <div className='content' style={{color: '#DBE9EE'}} dangerouslySetInnerHTML={{__html: this.state.house.summary}}></div>
                    </Fade>
                </Container>
            )
        }

        if(this.state.isLoading) {
            content = <Spinner />
        }

        return content
    }
}

export default House