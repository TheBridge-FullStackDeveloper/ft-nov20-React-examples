import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Article extends Component {
  //rconst
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return <article>
      <p> Nombre: {this.props.usuario.name}, Edad: {this.props.usuario.edad}</p>
      <IconButton aria-label="delete">
          <DeleteIcon onClick={this.props.borrar}/>
        </IconButton>
      </article>;
  }
}

export default Article;
