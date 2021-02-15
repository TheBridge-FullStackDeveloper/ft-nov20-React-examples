import './App.scss';

import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <h1 className="inverse"></h1>
      <Head mensaje="Seccion: home" empresa="Monstruos SA" />
      <Nav estilos="nav-navBar" />
      <Nav estilos="nav-navBar-blue" />
      <Main />
      <Footer />
      <Button variant="contained" color="primary">Hello World</Button>
      <div className={classes.root}>

        <Button variant="contained" color="secondary">
          Secondary
      </Button>
      </div>

    </div>
  );
}

export default App;
