import React, { Component } from 'react'
import Articles from '../Articles/Articles';


import './Main.scss';


export class Main extends Component {

    render() {
    
        return (
            <main>
                <h2>Esto es el main</h2>
                <img src={process.env.PUBLIC_URL + '/assets/img/dog.jpg'} />;
                <p className="pCualquiera">Me voy a tomar un cafe</p>
                <h3 className="claseCualquiera">Aqui empiezan los artículos</h3>
                <div className="main">
                    <h3 className="main_h3">Hola</h3>
                    <div className="main-div">
                        <h3 className="main-div-h3">Voy a explicar</h3>
                        <p className="main-div-p">El ampersand</p>
                    </div>
                </div>
                <Articles/>

            </main>
        )
    }
}

export default Main
