import React, { Component } from "react";
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
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          </nav>
  }
}

export default Nav;
