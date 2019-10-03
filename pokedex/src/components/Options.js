import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/Options.css"

class Options extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 'Kanto',
    }
  }

  // handleClick = (value) => {
  //   this.setState({ selected: value })
  // }

  // isActive = (value) => {
  //   return 'btn ' + ((value === this.state.selected) ? 'active' : 'default');
  // }

  render() {
    return (
      <section className="options" id="options">
        <Link to="/regions/1"><button onClick={this.props.onClick.bind(this, 'Kanto')} data-id="1" id="Kanto" className={this.props.isActive('Kanto')}>Kanto</button></Link>
        <Link to="/regions/2"><button onClick={this.props.onClick.bind(this, 'Johto')} data-id="2" id="Johto" className={this.props.isActive('Johto')}>Johto</button></Link>
        <Link to="/regions/3"><button onClick={this.props.onClick.bind(this, 'Hoenn')} data-id="3" id="Hoenn" className={this.props.isActive('Hoenn')}>Hoenn</button></Link>
        <Link to="/regions/4"><button onClick={this.props.onClick.bind(this, 'Sinnoh')} data-id="4" id="Sinnoh" className={this.props.isActive('Sinnoh')}>Sinnoh</button></Link>
        <Link to="/regions/5"><button onClick={this.props.onClick.bind(this, 'Teselia')} data-id="5" id="Teselia" className={this.props.isActive('Teselia')}>Teselia</button></Link>
        <Link to="/regions/6"><button onClick={this.props.onClick.bind(this, 'Kalos')} data-id="6" id="Kalos" className={this.props.isActive('Kalos')}>Kalos</button></Link>
        <Link to="/regions/7"><button onClick={this.props.onClick.bind(this, 'Alola')} data-id="7" id="Alola" className={this.props.isActive('Alola')}>Alola</button></Link>
        <Link to="/regions/8"><button onClick={this.props.onClick.bind(this, 'Galar')} data-id="8" id="Galar" className={this.props.isActive('Galar')}>Galar</button></Link>
      </section>
    )
  }
}

export default Options;