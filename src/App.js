import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Nav from './components/Nav'
import Header from './components/Header'
import List from './components/List'
import Details from './components/Details'
import Footer from './components/Footer'
import { createBrowserHistory } from 'history';

//REACT router for ItemView page
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const history = createBrowserHistory();

function App() {
  const [Sites, SetSites] = useState([]);
  const [Clients, SetClients] = useState([]);

  const axiosCall = () => {
    axios.get("http://localhost:3000/sites")
      .then((response) => {
        SetSites(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    useEffect(() => {
      axiosCall();
    }, []);


  return (
    <Router history={history}>
     <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
            <Header />
            <div className="animate-background">
            <List sites = {Sites} />
            </div>
            <Footer />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
     </div>
    </ Router >
  );
}

export default App;
