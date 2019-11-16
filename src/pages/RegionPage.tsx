import React from 'react';
// import { BrowserRouter, Switch, Route } from "react-router-dom";

import Options from "../components/Options"
import PokemonList from "../components/PokemonList"

import "./styles/Global.css"

interface IProps {

}
interface IState {
  selected: string,
  initial: number,
  final: number,
  loading: boolean,
}

class RegionPage extends React.Component<IProps, IState> {

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      selected: 'Kanto',
      initial: 1,
      final: 151,
      loading: false
    }
  }

  async pokedexIndex(value: string) {
    console.log("Index" + value)
    this.setState({ selected: value, loading: true })
    if (value === 'Kanto') {
      this.setState({ initial: 1, final: 151 })
    }
    if (value === 'Johto') {
      this.setState({ initial: 152, final: 251 })
    }
    if (value === 'Hoenn') {
      this.setState({ initial: 252, final: 386 })
    }
    if (value === 'Sinnoh') {
      this.setState({ initial: 387, final: 493 })
    }
    if (value === 'Teselia') {
      this.setState({ initial: 494, final: 649 })
    }
    if (value === 'Kalos') {
      this.setState({ initial: 650, final: 721 })
    }
    if (value === 'Alola') {
      this.setState({ initial: 722, final: 807 })
    }
  }

  handleClick = async (value: string) => {
    console.log("click")
    console.log(value)
    await this.pokedexIndex(value)
    console.log(this.state.initial)
    this.setState({ loading: false })
  }

  isActive = (value: string) => {
    return 'btn ' + ((value === this.state.selected) ? 'active' : 'default');
  }

  render() {
    if (this.state.loading === true) {
      return (
        <React.Fragment>
          <Options onClick={this.handleClick} isActive={this.isActive} />
          <p>Loading ...</p>
        </React.Fragment>
      )
    }
    else
      return (
        <React.Fragment>
          <Options onClick={this.handleClick} isActive={this.isActive} />
          <PokemonList initialNumber={this.state.initial} finalNumber={this.state.final} />
        </React.Fragment>
      )
  }
}

export default RegionPage;