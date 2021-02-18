import React, { Component } from "react";

class News extends Component {
  render() {
    return <article>
      <h3>{this.props.news.titulo}</h3>
      <p>{this.props.news.contenido}</p>
      <img src={this.props.news.url} alt=""/>
    </article>;
  }
}

export default News;
