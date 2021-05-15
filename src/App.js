import './App.css';
import Nav from './components/Nav'
import List from './components/List'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="animate-background">
      <List />
      </div>
      <Footer />
    </div>
  );
}

export default App;
