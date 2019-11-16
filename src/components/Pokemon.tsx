import React from 'react'

import Modal from "./Modal"
import "./styles/Pokemon.css"

interface sprites {
  front_default: string
}

interface data {
  [propName: string]: any
}

interface PokemonProps {
  data: data
}

interface PokemonState {
  modalIsOpen: boolean
  id: number
  sprite: string
  name: string
}

class Pokemon extends React.Component<PokemonProps, PokemonState> {
  constructor(props: Readonly<PokemonProps>) {
    super(props)
    const {
      id,
      sprites: {
        front_default,
      },
      name

    } = this.props.data
    this.state = {
      modalIsOpen: false,
      id: id,
      sprite: front_default,
      name: name
    }
  }
  onClick() {
    console.log(this.props.data.id)
  }

  handleCloseModal() {
    this.setState({ modalIsOpen: false })
    console.log("close")
  }

  handleOpenModal() {
    this.setState({ modalIsOpen: true })
    console.log(this)
  }

  render() {
    return (
      <React.Fragment>
        <li className="pokemon-item" onClick={this.handleOpenModal.bind(this)} key={this.state.id}>
          <img src={this.state.sprite} alt="" />
          <p className="pokemon-name">{this.state.name}</p>
        </li>
        <Modal data={this.props.data} isOpen={this.state.modalIsOpen} onClose={this.handleCloseModal.bind(this)} />
      </React.Fragment>
    )
  }
}

export default Pokemon;