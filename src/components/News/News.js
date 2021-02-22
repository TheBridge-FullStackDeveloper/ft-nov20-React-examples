import React from 'react'
//rafc --> arrow
//rfc

const News = (props) => {
  return (
    <article>
      <h3>{props.news.titulo}</h3>
      <p>{props.news.contenido}</p>
      <img src={props.news.url} alt=""/>
    </article>
  )
}

export default News

