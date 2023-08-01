import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersComponent from './Components/Users1/users1';
import LoginForm from './Components/LoginForm/loginform';

class App extends React.Component{

  constructor(){
    super();
    this.state={isLoggedIn:true}
  }

  onLoginSuccessful(){
    this.setState({isLoggedIn:true});
  }

  render(){
    return (
      <div className="App">
       {(this.state.isLoggedIn)?<UsersComponent/>:<LoginForm onLoginSuccessful={this.onLoginSuccessful.bind(this)} />}
      </div>
    );

  }

}



export default App;



