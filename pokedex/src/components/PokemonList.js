import React from 'react';

import Pokemon from "./Pokemon"
import "./styles/Pokemon.css"

class PokemonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      loading: true
    }
  }

  componentDidMount() {
    // const pokemonUrlList = [];
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
    const pokemonUrlsList = [];
    const pokemonList = [];
    for (var i = this.props.initialNumber; i <= this.props.finalNumber; i++) {
      pokemonUrlsList.push(`${BASE_URL}${i}`);
    }
    const promises = pokemonUrlsList.map((url) => fetch(url).then(response => response.json()))
    Promise.all(promises)
      .then(results => {
        results.forEach(data => {
          pokemonList.push(data)
        })
        this.setState({ pokemon: pokemonList })
      })
  }

  render() {
    if (this.state.pokemon.length > 0) {
      return (
        <ul className="pokemon-list">
          {this.state.pokemon.map(pokemon => {
            return <Pokemon id={pokemon.id} name={pokemon.name} src={pokemon.sprites.front_default} key={pokemon.id} />
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