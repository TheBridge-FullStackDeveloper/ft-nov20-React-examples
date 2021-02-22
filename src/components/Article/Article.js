import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Article = ({usuario}) => {
  return (
<article>
      <p> Nombre: {usuario.name}, Edad: {usuario.edad}</p>
      <IconButton aria-label="delete">
          <DeleteIcon onClick={usuario.borrar}/>
        </IconButton>
      </article>
  )
}
export default Article;

