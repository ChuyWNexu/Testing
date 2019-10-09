import React from 'react';

import "./styles/Pokemon.css"
import PokemonListContainer from './PokemonListContainer';
import Pokemon from './Pokemon'
import Modal from './Modal'


class PokemonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      loading: true,
      promises: [],
      modalIsOpen: false
    }
  }

  componentDidMount() {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
    let pokemonUrlsList = [];
    const pokemonList = [];
    for (var i = this.props.initialNumber; i <= this.props.finalNumber; i++) {
      pokemonUrlsList.push(`${BASE_URL}${i}/`);
    }
    this.state.promises = pokemonUrlsList.map((url) => fetch(url).then(response => response.json()))
    Promise.all(this.state.promises)
      .then(results => {
        results.forEach(data => {
          pokemonList.push(data)
        })
        this.setState({ pokemon: pokemonList })
      })
      .catch(error => {
        console.log(error)
        pokemonUrlsList = []
        for (var i = this.props.initialNumber; i <= this.props.finalNumber; i++) {
          pokemonUrlsList.push(`${BASE_URL}${i}`);
        }
        this.state.promises = pokemonUrlsList.map((url) => fetch(url).then(response => response.json()))
        Promise.all(this.state.promises)
          .then(results => {
            results.forEach(data => {
              pokemonList.push(data)
            })
            this.setState({ pokemon: pokemonList })
          })
      })
  }

  render() {
    if (this.state.pokemon.length > 0) {
      return (
        <ul className="pokemon-list">
          {this.state.pokemon.map(pokemon => {
            return <Pokemon data={pokemon} />
          })}
        </ul>
      )
    }
    else {
      console.log(this.state.pokemon.length)
      return (<p> Loading ...</p>)
    }
  }
}

export default PokemonList