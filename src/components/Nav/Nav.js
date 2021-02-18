import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Nav.scss'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return <nav className={this.props.estilos}>
          <ul >
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/news">Noticias</Link></li>
            <li><Link to="/staff">Quienes somos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/form">Formulario</Link></li>
          </ul>
          </nav>
  }
}

export default Nav;
