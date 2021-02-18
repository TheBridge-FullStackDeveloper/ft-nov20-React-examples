import React, { Component } from 'react'
import Articles from '../Articles/Articles';
import NewsList from '../NewsList/NewsList';
import Contacto from '../Contacto/Contacto';
import PersonList from '../PersonList/PersonList';
import Formulario from '../Formulario/Formulario';
import {Switch, Route } from 'react-router-dom';

import './Main.scss';
import { Contactless } from '@material-ui/icons';



export class Main extends Component {

    render() {
    
        return (
            <main>
       
                <Switch>
                    <Route exact path="/" component={Articles}></Route>
                    <Route path="/news" component={NewsList}></Route>
                    <Route path="/contact" component={Contacto}></Route>
                    <Route path="/staff" component={PersonList}></Route>
                    <Route path="/form" component={Formulario}></Route>
                </Switch>

            </main>
        )
    }
}

export default Main
