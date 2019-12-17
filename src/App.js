import React, { Component } from 'react';
// import logo from './logo.svg';
import MenuItem from './Components/MainMenu/MainMenu';
import './App.css';
import MenuContainer from './Components/MainMenu/MainMenu';

class App extends Component{
  render(){
  return( 
    <div class= 'MainMenu'> 
  <div class='Header'>
      <p> Thank you for visiting the Solidarity Protest site. </p>
         <p>Please stay tuned for more updates.... </p>
   </div> 
      <MenuContainer />
   </div>
  )
  }
}

export default App;