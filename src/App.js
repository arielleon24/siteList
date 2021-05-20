import './App.css';
import Nav from './components/Nav'
import List from './components/List'
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
      <Switch>
        <Route path="/">
          <div className="App">
            <Nav />
            <div className="animate-background">
            <List />
            </div>
            <Footer />
          </div>
        </Route>
      </Switch>
    </ Router >
  );
}

export default App;
