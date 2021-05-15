import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import Footer from './components/Footer'
import {RemoveScroll} from 'react-remove-scroll';

function App() {
  return (
    <div className="App">
      <Nav />
      <RemoveScroll>
      <List />
      </RemoveScroll>
      <Footer />
    </div>
  );
}

export default App;
