import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import { useState } from 'react';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Team from './Components/Team/Team';
function App() {
  const [dark, setDark] = useState(false);
  const changeState = (e) => {
    e.preventDefault();
    setDark(!dark);
  }
  return (
    <Router>
      <div className="App">
        <Header darkMode={dark} />
        <div className="switch-div">
          {!dark && <button className="button-dark" onClick={e => changeState(e)}>Dark mode</button>}
          {dark && <button className="button-light" onClick={e => changeState(e)}>Light Mode</button>}
        </div>
        <Switch>
          <Route path="/" exact>
            <Homepage darkMode={dark} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/events">
            {/*events*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
