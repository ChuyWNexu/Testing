import React from 'react';
import Pokemon from './Pokemon';

function PokemonListContainer() {

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

export default PokemonListContainer

