import React, { Component } from "react";

class Article extends Component {
  //rconst
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return <article>
      <p> Nombre:{this.props.nombre}</p>
      </article>;
  }
}

export default Article;
