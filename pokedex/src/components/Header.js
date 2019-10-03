import React from 'react';
import "./styles/Header.css"
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="menu">
          <ul>
            <li className="is-active"><Link to="/regions" className="Region">Region</Link></li>
            <li><Link to="number" className="Number">Number</Link></li>
            <li><Link to="type" className="Type">Type</Link></li>
            <li><Link to="moves" className="Moves">Moves</Link></li>
            <li><Link to="info" className="Info">Info</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;