import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Season from './components/Seasons/Season/Season'
import { Link } from 'react-router-dom';
import Episode from './components/Episodes/Episode/Episode'
import { Button, Image } from 'react-bootstrap'
import Houses from './components/Houses/Houses'
import Seasons from './components/Seasons/Seasons';
import Episodes from './components/Episodes/Episodes';
import House from './components/Houses/House/House';
import NavigationBar from './components/UI/NavigationBar/NavigationBar'
import Characters from './components/Characters/Characters';
import Character from './components/Characters/Character/Character';
import About from './components/About/About';
import NotFound from './components/UI/NotFound/NotFound';


class App extends Component {
  render() {
    return (
      <div className='App'>
        
        {/* NAVBAR */}
        <NavigationBar />

        <Switch>
          {/* ROOT PATH */}
          <Route path='/' exact>
          <div className='cover'>
              <Image className='coverimage' src={require('./assets/808172.png')} fluid />
              <div className='covertext'>
                <h1>VALAR MORGHULIS</h1>
                <h3 style={{fontFamily: 'Merriweather'}}>Welcome to GOTPEDIA.<br />The Game of Thrones encyclopedia.</h3>
                <Button style={{margin: '5px'}} variant="outline-light"><Link to='seasons'>Seasons</Link></Button>
                <Button style={{margin: '5px'}} variant="outline-light"><Link to='episodes'>Episodes</Link></Button>
                <Button style={{margin: '5px'}} variant="outline-light"><Link to='houses'>Houses</Link></Button>
                <Button style={{margin: '5px'}} variant="outline-light"><Link to='characters'>Characters</Link></Button>
              </div>
          </div>
          </Route>

          {/* SEASON PATHS */}
          <Route path='/seasons' exact render={() => <Seasons />} />
          <Route path='/seasons/season1' exact render={() => <Season seasonNumber='1' />} />
          <Route path='/seasons/season2' exact render={() => <Season seasonNumber='2' />} />
          <Route path='/seasons/season3' exact render={() => <Season seasonNumber='3' />} />
          <Route path='/seasons/season4' exact render={() => <Season seasonNumber='4' />} />
          <Route path='/seasons/season5' exact render={() => <Season seasonNumber='5' />} />
          <Route path='/seasons/season6' exact render={() => <Season seasonNumber='6' />} />
          <Route path='/seasons/season7' exact render={() => <Season seasonNumber='7' />} />
          <Route path='/seasons/season8' exact render={() => <Season seasonNumber='8' />} />

          {/* EPISODE PATHS */}
          <Route path='/episodes' exact render={() => <Episodes />} />
          <Route path='/episodes/winter-is-coming' exact render={() => <Episode seasonNumber='1' episodeNumber='1' />} />
          <Route path='/episodes/the-kingsroad' exact render={() => <Episode seasonNumber='1' episodeNumber='2' />} />
          <Route path='/episodes/lord-snow' exact render={() => <Episode seasonNumber='1' episodeNumber='3' />} />
          <Route path='/episodes/cripples-bastards-and-broken-things' exact render={() => <Episode seasonNumber='1' episodeNumber='4' />} />
          <Route path='/episodes/the-wolf-and-the-lion' exact render={() => <Episode seasonNumber='1' episodeNumber='5' />} />
          <Route path='/episodes/a-golden-crown' exact render={() => <Episode seasonNumber='1' episodeNumber='6' />} />
          <Route path='/episodes/you-win-or-you-die' exact render={() => <Episode seasonNumber='1' episodeNumber='7' />} />
          <Route path='/episodes/the-pointy-end' exact render={() => <Episode seasonNumber='1' episodeNumber='8' />} />
          <Route path='/episodes/baelor' exact render={() => <Episode seasonNumber='1' episodeNumber='9' />} />
          <Route path='/episodes/fire-and-blood' exact render={() => <Episode seasonNumber='1' episodeNumber='10' />} />
          <Route path='/episodes/the-north-remembers' exact render={() => <Episode seasonNumber='2' episodeNumber='1' />} />
          <Route path='/episodes/the-night-lands' exact render={() => <Episode seasonNumber='2' episodeNumber='2' />} />
          <Route path='/episodes/what-is-dead-may-never-die' exact render={() => <Episode seasonNumber='2' episodeNumber='3' />} />
          <Route path='/episodes/garden-of-bones' exact render={() => <Episode seasonNumber='2' episodeNumber='4' />} />
          <Route path='/episodes/the-ghost-of-harrenhal' exact render={() => <Episode seasonNumber='2' episodeNumber='5' />} />
          <Route path='/episodes/the-old-gods-and-the-new' exact render={() => <Episode seasonNumber='2' episodeNumber='6' />} />
          <Route path='/episodes/a-man-without-honor' exact render={() => <Episode seasonNumber='2' episodeNumber='7' />} />
          <Route path='/episodes/the-prince-of-winterfell' exact render={() => <Episode seasonNumber='2' episodeNumber='8' />} />
          <Route path='/episodes/blackwater' exact render={() => <Episode seasonNumber='2' episodeNumber='9' />} />
          <Route path='/episodes/valar-morghulis' exact render={() => <Episode seasonNumber='2' episodeNumber='10' />} />
          <Route path='/episodes/valar-dohaeris' exact render={() => <Episode seasonNumber='3' episodeNumber='1' />} />
          <Route path='/episodes/dark-wings-dark-words' exact render={() => <Episode seasonNumber='3' episodeNumber='2' />} />
          <Route path='/episodes/walk-of-punishment' exact render={() => <Episode seasonNumber='3' episodeNumber='3' />} />
          <Route path='/episodes/and-now-his-watch-is-ended' exact render={() => <Episode seasonNumber='3' episodeNumber='4' />} />
          <Route path='/episodes/kissed-by-fire' exact render={() => <Episode seasonNumber='3' episodeNumber='5' />} />
          <Route path='/episodes/the-climb' exact render={() => <Episode seasonNumber='3' episodeNumber='6' />} />
          <Route path='/episodes/the-bear-and-the-maiden-fair' exact render={() => <Episode seasonNumber='3' episodeNumber='7' />} />
          <Route path='/episodes/second-sons' exact render={() => <Episode seasonNumber='3' episodeNumber='8' />} />
          <Route path='/episodes/the-rains-of-castamere' exact render={() => <Episode seasonNumber='3' episodeNumber='9' />} />
          <Route path='/episodes/mhysa' exact render={() => <Episode seasonNumber='3' episodeNumber='10' />} />
          <Route path='/episodes/two-swords' exact render={() => <Episode seasonNumber='4' episodeNumber='1' />} />
          <Route path='/episodes/the-lion-and-the-rose' exact render={() => <Episode seasonNumber='4' episodeNumber='2' />} />
          <Route path='/episodes/breaker-of-chains' exact render={() => <Episode seasonNumber='4' episodeNumber='3' />} />
          <Route path='/episodes/oathkeeper' exact render={() => <Episode seasonNumber='4' episodeNumber='4' />} />
          <Route path='/episodes/first-of-his-name' exact render={() => <Episode seasonNumber='4' episodeNumber='5' />} />
          <Route path='/episodes/the-laws-of-gods-and-men' exact render={() => <Episode seasonNumber='4' episodeNumber='6' />} />
          <Route path='/episodes/mockingbird' exact render={() => <Episode seasonNumber='4' episodeNumber='7' />} />
          <Route path='/episodes/the-mountain-and-the-viper' exact render={() => <Episode seasonNumber='4' episodeNumber='8' />} />
          <Route path='/episodes/the-watchers-on-the-wall' exact render={() => <Episode seasonNumber='4' episodeNumber='9' />} />
          <Route path='/episodes/the-children' exact render={() => <Episode seasonNumber='4' episodeNumber='10' />} />
          <Route path='/episodes/the-wars-to-come' exact render={() => <Episode seasonNumber='5' episodeNumber='1' />} />
          <Route path='/episodes/the-house-of-black-and-white' exact render={() => <Episode seasonNumber='5' episodeNumber='2' />} />
          <Route path='/episodes/high-sparrow' exact render={() => <Episode seasonNumber='5' episodeNumber='3' />} />
          <Route path='/episodes/sons-of-the-harpy' exact render={() => <Episode seasonNumber='5' episodeNumber='4' />} />
          <Route path='/episodes/kill-the-boy' exact render={() => <Episode seasonNumber='5' episodeNumber='5' />} />
          <Route path='/episodes/unbowed-unbent-unbroken' exact render={() => <Episode seasonNumber='5' episodeNumber='6' />} />
          <Route path='/episodes/the-gift' exact render={() => <Episode seasonNumber='5' episodeNumber='7' />} />
          <Route path='/episodes/hardhome' exact render={() => <Episode seasonNumber='5' episodeNumber='8' />} />
          <Route path='/episodes/the-dance-of-dragons' exact render={() => <Episode seasonNumber='5' episodeNumber='9' />} />
          <Route path='/episodes/mothers-mercy' exact render={() => <Episode seasonNumber='5' episodeNumber='10' />} />
          <Route path='/episodes/the-red-woman' exact render={() => <Episode seasonNumber='6' episodeNumber='1' />} />
          <Route path='/episodes/home' exact render={() => <Episode seasonNumber='6' episodeNumber='2' />} />
          <Route path='/episodes/oathbreaker' exact render={() => <Episode seasonNumber='6' episodeNumber='3' />} />
          <Route path='/episodes/book-of-the-stranger' exact render={() => <Episode seasonNumber='6' episodeNumber='4' />} />
          <Route path='/episodes/the-door' exact render={() => <Episode seasonNumber='6' episodeNumber='5' />} />
          <Route path='/episodes/blood-of-my-blood' exact render={() => <Episode seasonNumber='6' episodeNumber='6' />} />
          <Route path='/episodes/the-broken-man' exact render={() => <Episode seasonNumber='6' episodeNumber='7' />} />
          <Route path='/episodes/no-one' exact render={() => <Episode seasonNumber='6' episodeNumber='8' />} />
          <Route path='/episodes/battle-of-the-bastards' exact render={() => <Episode seasonNumber='6' episodeNumber='9' />} />
          <Route path='/episodes/the-winds-of-winter' exact render={() => <Episode seasonNumber='6' episodeNumber='10' />} />
          <Route path='/episodes/dragonstone' exact render={() => <Episode seasonNumber='7' episodeNumber='1' />} />
          <Route path='/episodes/stormborn' exact render={() => <Episode seasonNumber='7' episodeNumber='2' />} />
          <Route path='/episodes/the-queens-justice' exact render={() => <Episode seasonNumber='7' episodeNumber='3' />} />
          <Route path='/episodes/the-spoils-of-war' exact render={() => <Episode seasonNumber='7' episodeNumber='4' />} />
          <Route path='/episodes/eastwatch' exact render={() => <Episode seasonNumber='7' episodeNumber='5' />} />
          <Route path='/episodes/beyond-the-wall' exact render={() => <Episode seasonNumber='7' episodeNumber='6' />} />
          <Route path='/episodes/the-dragon-and-the-wolf' exact render={() => <Episode seasonNumber='7' episodeNumber='7' />} />
          <Route path='/episodes/winterfell' exact render={() => <Episode seasonNumber='8' episodeNumber='1' />} />
          <Route path='/episodes/a-knight-of-the-seven-kingdoms' exact render={() => <Episode seasonNumber='8' episodeNumber='2' />} />
          <Route path='/episodes/the-long-night' exact render={() => <Episode seasonNumber='8' episodeNumber='3' />} />
          <Route path='/episodes/the-last-of-the-starks' exact render={() => <Episode seasonNumber='8' episodeNumber='4' />} />
          <Route path='/episodes/the-bells' exact render={() => <Episode seasonNumber='8' episodeNumber='5' />} />
          <Route path='/episodes/the-iron-throne' exact render={() => <Episode seasonNumber='8' episodeNumber='6' />} />




          {/* HOUSE PATHS */}
          <Route path='/houses' exact render={() => <Houses />} />
          <Route path='/houses/house-stark' exact render={() => <House houseNumber='0' />} />
          <Route path='/houses/house-lannister' exact render={() => <House houseNumber='1' />} />
          <Route path='/houses/house-targaryen' exact render={() => <House houseNumber='2' />} />
          <Route path='/houses/house-martell' exact render={() => <House houseNumber='3' />} />
          <Route path='/houses/house-greyjoy' exact render={() => <House houseNumber='4' />} />
          <Route path='/houses/house-baratheon' exact render={() => <House houseNumber='5' />} />
          <Route path='/houses/house-bolton' exact render={() => <House houseNumber='6' />} />
          <Route path='/houses/house-tully' exact render={() => <House houseNumber='7' />} />
          <Route path='/houses/house-frey' exact render={() => <House houseNumber='8' />} />
          <Route path='/houses/house-tyrell' exact render={() => <House houseNumber='9' />} />
          <Route path='/houses/house-arryn' exact render={() => <House houseNumber='10' />} />

          {/* CHARACTER PATHS */}
          <Route path='/characters' exact render={() => <Characters />} />
          <Route path='/characters/eddard-stark' exact render={() => <Character characterNumber='0' />} />
          <Route path='/characters/catelyn-stark' exact render={() => <Character characterNumber='1' />} />
          <Route path='/characters/robb-stark' exact render={() => <Character characterNumber='2' />} />
          <Route path='/characters/sansa-stark' exact render={() => <Character characterNumber='3' />} />
          <Route path='/characters/arya-stark' exact render={() => <Character characterNumber='4' />} />
          <Route path='/characters/bran-stark' exact render={() => <Character characterNumber='5' />} />
          <Route path='/characters/rickon-stark' exact render={() => <Character characterNumber='6' />} />
          <Route path='/characters/jon-snow' exact render={() => <Character characterNumber='7' />} />
          <Route path='/characters/tywin-lannister' exact render={() => <Character characterNumber='8' />} />
          <Route path='/characters/jaime-lannister' exact render={() => <Character characterNumber='9' />} />
          <Route path='/characters/cersei-lannister' exact render={() => <Character characterNumber='10' />} />
          <Route path='/characters/tyrion-lannister' exact render={() => <Character characterNumber='11' />} />
          <Route path='/characters/daenerys-targaryen' exact render={() => <Character characterNumber='12' />} />
          <Route path='/characters/rhaegar-targaryen' exact render={() => <Character characterNumber='13' />} />
          <Route path='/characters/viserys-targaryen' exact render={() => <Character characterNumber='14' />} />
          <Route path='/characters/theon-greyjoy' exact render={() => <Character characterNumber='15' />} />
          <Route path='/characters/yara-greyjoy' exact render={() => <Character characterNumber='16' />} />
          <Route path='/characters/robert-baratheon' exact render={() => <Character characterNumber='17' />} />
          <Route path='/characters/stannis-baratheon' exact render={() => <Character characterNumber='18' />} />
          <Route path='/characters/joffrey-baratheon' exact render={() => <Character characterNumber='19' />} />
          <Route path='/characters/tommen-baratheon' exact render={() => <Character characterNumber='20' />} />
          <Route path='/characters/ramsay-bolton' exact render={() => <Character characterNumber='21' />} />
          <Route path='/characters/olenna-tyrell' exact render={() => <Character characterNumber='22' />} />
          <Route path='/characters/margaery-tyrell' exact render={() => <Character characterNumber='23' />} />

          {/* ABOUT PATH */}
          <Route path='/about' exact render={() => <About /> } />

          {/* 404 PATH */}
          <Route path='*' render={() => <NotFound /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
