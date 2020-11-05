import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/NavBar';
import Catalogue from './Components/Catalogue/Catalogue';
import Card from './Components/Card/Card';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router >
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Catalogue} />
      <Route exact path='/detalle' component={Card} />
    </Router>
  );
}

export default App;