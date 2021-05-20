import './App.css';
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
  return (
    <Router history={history}>
     <div className="App">
      <Nav />
      <Switch>
        <Route path="/home">
            <Header />
            <div className="animate-background">
            <List />
            </div>
            <Footer />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
     </div>
    </ Router >
  );
}

export default App;
