import React, {useState,useEffect} from "react";
import axios from 'axios';

const Contador = () => {
  // Hook estado
 const [count, setCount] = useState(0); //count = 0 inicialmente
 const [user, setUser] = useState("Alex"); 
 const [users, setUsers] = useState([])

useEffect(()=>
          setTimeout(() => {
            console.log("hola!")
            setCount(3)
          }, 3000)
,[])//

useEffect(()=>{
    setTimeout(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        setUsers(users);
      })
    }, 2000)
    return () => console.log("unmounting..."); // componentWillUnmount
  }
,[])

 let cambiarNombre = ()=>{
   let nombre = prompt("introduce nombre")
   setUser(nombre)
 }
  return <div>
    <h3>Aqui tu página de contador!</h3>
    <button onClick={()=>setCount(count+1)}>Aumenta</button>
    <button onClick={()=>setCount(count-1)}>Disminuye</button>
    <p>Hola {user}. El contador vale:{count}</p>
    <button onClick= {()=>cambiarNombre()}>Cambia nombre</button>

    <h3>Usuarios de la API</h3>
    <ul>
     { users.map((user,i) => <li key={i}>{user.name}</li>)}
    </ul>

  </div>;
};

export default Contador;
