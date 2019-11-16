import React from 'react';

import "./styles/Pokemon.css"
import PokemonListContainer from './PokemonListContainer';
import Pokemon from './Pokemon'
import Modal from './Modal'

interface PokemonListProps {
  initialNumber: number,
  finalNumber: number
}
interface PokemonListState {
  pokemon: Array<Promise<any>>,
  loading: boolean,
  promises: Array<object>,
  modalIsOpen: boolean
}

class PokemonList extends React.Component<PokemonListProps, PokemonListState>{

  constructor(props: Readonly<PokemonListProps>) {
    super(props);
    this.state = {
      pokemon: [],
      loading: true,
      modalIsOpen: false,
      promises: []
    }
  }

  componentDidMount() {
    const BASE_URL: string = "https://pokeapi.co/api/v2/pokemon/"
    let pokemonUrlsList: Array<string> = [];
    const pokemonList = [];
    // Se crean los index para cada url
    for (var i = this.props.initialNumber; i <= this.props.finalNumber; i++) {
      pokemonUrlsList.push(`${BASE_URL}${i}/`);
    }
    // Se crean las promesas
    let Promises: Array<Promise<object>> = pokemonUrlsList.map((url) => fetch(url).then(response => response.json()))
    // Se obtiene los valores de las promesas
    Promise.all(Promises)
      .then(results => {
        results.forEach(data => {
          pokemonList.push(data)
        })
        this.setState({ pokemon: pokemonList })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if (this.state.pokemon.length > 0) {
      return (
        <ul className="pokemon-list">
          {this.state.pokemon.map(pokemonInfo => {
            return <Pokemon data={pokemonInfo} />
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