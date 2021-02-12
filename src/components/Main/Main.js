import React, { Component } from 'react'
import Articles from '../Articles/Articles';
import './Main.css';

export class Main extends Component {
    render() {
        return (
            <main>
                <h2>Esto es el main</h2>
                <img src={process.env.PUBLIC_URL + '/assets/img/dog.jpg'} />;
                <p>Me voy a tomar un cafe</p>
                <h3>Aqui empiezan los artículos</h3>
                <Articles/>

            </main>
        )
    }
}

export default Main
