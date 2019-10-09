import React from 'react'

import Modal from "./Modal"
import "./styles/Pokemon.css"

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
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
        <li className="pokemon-item" onClick={this.handleOpenModal.bind(this)} key={this.props.data.id}>
          <img src={this.props.data.sprites.front_default} alt="" />
          <p className="pokemon-name">{this.props.data.name}</p>
        </li>
        <Modal data={this.props.data} isOpen={this.state.modalIsOpen} onClose={this.handleCloseModal.bind(this)} />
      </React.Fragment>
    )
  }
}

export default Pokemon;