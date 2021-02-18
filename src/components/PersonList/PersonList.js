import React, { Component } from "react";
import axios from 'axios';

class PersonList extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    console.log("El componente fue montado");

    setTimeout(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
    }, 3000);
    
  }

  render() {
    return (
      <div>
        <h3>Datos de usuarios</h3>
        <ul>
          { this.state.persons.map((person,i) => <li key={i}>{person.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default PersonList;
