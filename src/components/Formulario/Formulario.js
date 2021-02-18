import { makeStyles } from "@material-ui/core";
import React, { Component } from "react";
import Mensaje from "./Mensaje/Mensaje";
import Resultado from "./Resultado/Resultado";

class Formulario extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       mensaje:""
    }
  }
  changeMessage =(m) => {
    this.setState({mensaje:m})
  }
  
  render() {
    return <div>
      <Mensaje format="n" mensaje={this.state.mensaje} onMessage={this.changeMessage}/>
      <Mensaje format="r" mensaje={this.state.mensaje} onMessage={this.changeMessage}/>
      <Resultado mensaje={this.state.mensaje}/>
    </div>;
  }
}

export default Formulario;
