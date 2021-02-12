import React, { Component } from 'react'

export class Head extends Component {
   
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
            company: "Mi empresa guay SA"
        }
    }

    render() {
        let dia  = new Date().getUTCDate();
        return (
            <header>
                <h3>Bienvenidos a {this.props.empresa? this.props.empresa:this.state.company} - {this.props.mensaje} - Dia:{dia}</h3>
            </header>
        )
    }
}

export default Head


