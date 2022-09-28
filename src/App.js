import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          
          <Route exact path="/">
            <Home/>
          </Route>
        
          <Route path="/About">
            <About/>
          </Route>
        
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
