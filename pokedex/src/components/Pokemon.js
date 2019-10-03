import React from 'react'

import "./styles/Pokemon.css"

class Pokemon extends React.Component {
  handleClick(event) {
    console.log(this)
  }

  render() {
    return (
      <li className="pokemon-item" onClick={this.handleClick.bind(this)} key={this.props.id}>
        <img src={this.props.src} alt="" />
        <p className="pokemon-name">{this.props.name}</p>
      </li>
    )
  }
}

export default Pokemon;