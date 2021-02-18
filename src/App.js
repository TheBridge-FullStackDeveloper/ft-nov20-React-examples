import './App.scss';

import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import {userContext} from './context/userContext';
import React, { Component } from "react";




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       user:"Alejandro!!!"
    }
  }
  
  render(){
    return (
      <div className="App">

      <userContext.Provider value={this.state.user}> 
          
        <h1 className="inverse"></h1>
          <Head mensaje="Seccion: home" empresa="Monstruos SA" />
          
          <BrowserRouter>
            <Nav estilos="nav-navBar" />
            {/* <Nav estilos="nav-navBar-blue" /> */}
            <Main />
          </BrowserRouter>
      
          <Footer />
        </userContext.Provider> 

      </div>
    );
  }
}

export default App;
