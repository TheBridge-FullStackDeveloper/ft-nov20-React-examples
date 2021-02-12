import './App.css';
import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Head mensaje="Seccion: home" empresa="Monstruos SA"/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
