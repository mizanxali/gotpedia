import React, { Component } from 'react'
import axios from 'axios'
import Spinner from '../../UI/Spinner/Spinner'
import { Image, Container } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import './Character.css'
import FIREBASE_PROJECT_URL from '../../../firebase'

class Character extends Component {
    state = {
        character: null,
        isLoading: true
    }

    componentDidMount() {
        axios.get(FIREBASE_PROJECT_URL + '/characters/' + this.props.characterNumber + '.json')
        .then(res => {
            this.setState({character: res.data, isLoading: false})
            // console.log(this.state.character);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        let content = null

        if(this.state.character) {
            content = (
                <Container className='content'>
                    <h1 style={{fontFamily: 'Game of Thrones', marginTop: '80px'}}>{this.state.character.name}</h1>
                    <Image src={require('../../../assets/characters/'+this.state.character.name+'.png')} fluid style={{width: '50%', border: '1px solid white', borderRadius: '5px'}} />
                    {/* <Image src={require('../../../assets/characters/Cersei Lannister.png')} fluid /> */}

                    <table>
                        <tbody>
                            {this.state.character.status ? <tr><th>Status</th><td>{this.state.character.status}</td></tr> : null}
                            {this.state.character.affiliation ? <tr><th>Affiliation</th><td>{this.state.character.affiliation}</td></tr> : null}
                            {this.state.character.father ? <tr><th>Father</th><td>{this.state.character.father.map((item, i) => <li key={item}>{item}</li>)}</td></tr> : null}
                            {this.state.character.mother ? <tr><th>Mother</th><td>{this.state.character.mother}</td></tr> : null}
                            {this.state.character.siblings ? <tr><th>Sibling(s)</th><td>{this.state.character.siblings.map((item, i) => <li key={item}>{item}</li>)}</td></tr> : null}
                            {this.state.character.spouse ? <tr><th>Spouse(s)</th><td>{this.state.character.spouse.map((item, i) => <li key={item}>{item}</li>)}</td></tr> : null}
                            {this.state.character.children ? <tr><th>Child(ren)</th><td>{this.state.character.children.map((item, i) => <li key={item}>{item}</li>)}</td></tr> : null}
                            {this.state.character.lovers ? <tr><th>Lover(s)</th><td>{this.state.character.lovers.map((item, i) => <li key={item}>{item}</li>)}</td></tr> : null}
                        </tbody>
                    </table>
                    <Fade>
                        <div className='content' style={{color: '#DBE9EE'}} dangerouslySetInnerHTML={{__html: this.state.character.summary}}></div>
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

export default Character