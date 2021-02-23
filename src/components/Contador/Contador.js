import React, {useState,useEffect,useContext} from "react";
import axios from 'axios';
import { userContext } from "../../context/userContext";
import useFetch from '../../hooks/useFetch'

const Contador = () => {
  // Hook estado
 const [count, setCount] = useState(0); //count = 0 inicialmente
 const [user, setUser] = useState("Alex"); 
 const [users, setUsers] = useState([])

// Hook context
const person = useContext(userContext);// user + cambiarUser()

useEffect(()=>
          setTimeout(() => {
            console.log("hola!")
            setCount(3)
          }, 3000)
,[])//

  const data = useFetch(`https://jsonplaceholder.typicode.com/users`)

//setUsers(data)
// useEffect(()=>{
//     setTimeout(()=>{
//       axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const users = res.data;
//         setUsers(users);
//       })
//     }, 2000)
//     return () => console.log("unmounting..."); // componentWillUnmount
//   }
// ,[])

 let cambiarNombre = ()=>{
   let nombre = prompt("introduce nombre")
   setUser(nombre)
 }
  return <div>
    <h3>Hola! {person.user} Aqui tu página de contador!</h3>
    <button onClick={()=>setCount(count+1)}>Aumenta</button>
    <button onClick={()=>setCount(count-1)}>Disminuye</button>
    <p>Hola {user}. El contador vale:{count}</p>
    <button onClick= {()=>cambiarNombre()}>Cambia nombre</button>

    <h3>Usuarios de la API</h3>
    <ul>
     { data.map((user,i) => <li key={i}>{user.name}</li>)}
    </ul>

    <h3>Cambiar nombre del contexto</h3>
    <button onClick= {()=>person.cambiarUser("Vicky")}>Cambia nombre del contrxto</button>

  </div>;
};

export default Contador;
