import React from 'react';
import './App.css';
import ErrorBoundry from '../content/ErrorBoundry';
import SearchBox from '../content/SearchBox';
import Scroll from '../content/Scroll';
import CardList from '../content/CardList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      searchfield: ''
    }
  }
  
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(response => {
      return response.json();
    })
    .then(userresponse => {
      this.setState({characters: userresponse.results})
    });
    
  }
  
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    
  }
  
  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !characters.length ?
    <h1 className='tc'>Loading</h1> :
    (
      <div className='tc container'>
        <h1 className='f1'>Kanto Pokedex</h1>
        <ErrorBoundry>
          <SearchBox searchChange={this.onSearchChange} />
        </ErrorBoundry>
        <Scroll>
          <ErrorBoundry>
            <CardList characters={filteredCharacters} />
          </ErrorBoundry>
        </Scroll>
      </div>
      
      );
    }
  }
  
  export default App;
  