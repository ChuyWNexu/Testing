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
    console.log(this.props.id)
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
        <li className="pokemon-item" onClick={this.handleOpenModal.bind(this)} key={this.props.id}>
          <img src={this.props.src} alt="" />
          <p className="pokemon-name">{this.props.name}</p>
        </li>
        <Modal isOpen={this.state.modalIsOpen} onClose={this.handleCloseModal.bind(this)}> {this.props.name} </Modal>
      </React.Fragment>
    )
  }
}

export default Pokemon;