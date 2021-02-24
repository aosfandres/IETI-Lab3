import React from 'react';
import './App.css';
import App2 from './App2';
import Login from "./components/Login";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: 'false' };
    //localStorage.setItem('isLoggedIn', 'false');
    //alert(localStorage.getItem('isLoggedIn'));
    //alert(this.state.isLoggedIn);
  }

  changeStateFalse = () => {
    this.setState({ isLoggedIn: 'false' })
  }

  changeStateTrue = () => {
    this.setState({ isLoggedIn: 'true' })
  }
  changeIsLoggened=()=>{
    localStorage.setItem('isLoggedIn','flase');
    alert(localStorage.getItem('isLoggedIn'));
  }
  render() {
    const LoginView = () => (
      <div>
        <Login setfalse={this.changeStateFalse} settrue={this.changeStateTrue}/>
        <App2 /></div>
    );

    const normalView = () => (
      <div ><h1>truuuuue</h1></div>
    );

    return (
      <Router>
        <div className="App">

          <div>
            {this.state.isLoggedIn === 'false' ? <Route exact path="/" component={LoginView} />:
              <Route path="/" component={normalView} /> } 
          </div>
        </div>
      </Router>
    );
  }
}

export default App;