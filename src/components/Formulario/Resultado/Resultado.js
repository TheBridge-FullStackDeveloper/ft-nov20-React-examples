import React, { Component } from "react";
import {userContext} from '../../../context/userContext';

class Resultado extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    let mensaje = this.props.mensaje?this.props.mensaje:"------";
    return <div>
      <userContext.Consumer>
      {user => <p> Resultado de {user}: {mensaje}</p>}
     </userContext.Consumer>
      </div>;
  }
}

export default Resultado;
