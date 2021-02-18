import React, { Component } from "react";
import data from '../../data';
import News from "../News/News";



class NewsList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      datos:[]
    }
  }

  componentDidMount() {
    //fetch iría aqui
    //código aqui
    //guardar lo descargado en state
    this.setState({datos:data});
    
  }
  
  
  leerDatos = ()=> {
    return this.state.datos.map((item,i)=> <News news={item} key={i}/>) 
  }

  render() {
    return <section>
      <h2>Noticias de animalitos</h2>
      {this.leerDatos()}
      </section>;
  }
}

export default NewsList;
