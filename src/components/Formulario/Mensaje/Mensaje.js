import React, { Component } from "react";

class Mensaje extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  handleChange = (e)=>this.props.onMessage(e.target.value)
  
  // convertir = (format) => {
  //   if(format==="n") return this.props.mensaje;
  //   return this.props.mensaje.split("").reverse().join("");
  // }
  
  
  render() {
    //let mensaje = this.convertir(this.props.format);
    let mensaje = this.props.mensaje;

    this.props.format==="n"? mensaje= this.props.mensaje:mensaje= this.props.mensaje.split("").reverse().join("");
    
    return <div>
    <input type="text" value={mensaje} onChange = {this.handleChange}/>

    </div>;
  
  }
}

export default Mensaje;
