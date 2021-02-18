import React, { Component } from "react";
import Article from "../Article/Article";
import Button from '@material-ui/core/Button';

class Articles extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       datos:[]// {},{},{}
    }
  }

componentDidMount() {
  console.log("componente Articles cargado");
}
  

componentDidUpdate(prevProps, prevState) {
  console.log("Componente actualizado");
}

componentWillUnmount() {
  console.log("Se desmonta");
}


  dameHora = ()=> {
    return new Date().getUTCHours();
  }

  enviar = () =>{
    // let name= prompt("introduce nombre");
    // let edad = prompt("introduce edad");
    let name = "alex"
    let edad = 44
    this.setState({datos:[...this.state.datos,{name,edad}]});
  }

  pintar = () =>{
    // JSON de cada usuario
    return this.state.datos.map((datos,i)=> 
      <div>
        <Article usuario={datos} key={i} borrar={()=>this.borraUno(i)}/>
      </div>
      )
  }

  borraUno = (i)=>{
    let arr_filtrado = this.state.datos.filter((item,key)=>key!==i)// todos excepto datos[i]
    this.setState({datos:arr_filtrado})
  }

  borrar = () =>{
    this.setState({datos:[]})
  }


  render() {
    return <section>

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



    <p>Aqui los articulos. son las: {this.dameHora()}</p>
    <Button onClick={this.enviar} variant="contained" color="secondary">Pulsame</Button>


    {this.state.datos.length===0?<p>---Introduce datos---</p>:<Button onClick={this.borrar} variant="contained" color="primary">Borrar</Button>}

 

    {this.pintar()}
      

    </section>;
  }
}

export default Articles;
