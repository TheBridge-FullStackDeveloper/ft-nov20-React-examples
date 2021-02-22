import React, { Component } from 'react'
import './Head.scss'
import {userContext} from '../../context/userContext';

export class Head extends Component {
   
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
            company: "Mi empresa guay SA",
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    // Aqui no lo estamos usando
    componentWillUnmount() {
    clearInterval(this.timerID);
    }
    
    tick = () => {
    this.setState({
        date: new Date()
    });
    }


    render() {
        return (
            <header>
                <userContext.Consumer>
                {({user}) =>
                <h3 className="head-title">Bienvenidos a {this.props.empresa? this.props.empresa:this.state.company} - {this.props.mensaje} - Son las :{this.state.date.toLocaleTimeString()} - User:{user}</h3>
            }
                </userContext.Consumer>
            </header>
        )
    }
}

export default Head


