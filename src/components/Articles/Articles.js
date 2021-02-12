import React, { Component } from "react";
import Article from "../Article/Article";

class Articles extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       nombre:"alex",
       edad:22,
       nombres:[]
    }
  }
  
  dameHora = ()=> {
    return new Date().getUTCHours();
  }

  enviar = () =>{
    let name= prompt("introduce nombre");
    let edad = prompt("introduce edad");
    this.setState({"nombre":name,"edad":edad})
    this.setState({nombres:[...this.state.nombres,name]});
  }

  pintar = () =>{
    return this.state.nombres.map((n,i)=> <Article nombre={n} key={i} name={n} />)
  }


  render() {
    return <section>
    <p>Aqui los articulos. son las: {this.dameHora()}</p>
    {/* <p>Nombre: {this.state.nombre}, edad:{this.state.edad}</p> */}
    <Article nombre={this.state.nombre} edad ={this.state.edad}/>

    <button onClick={this.enviar}>Pulsame</button>
    {this.pintar()}
      

    </section>;
  }
}

export default Articles;
