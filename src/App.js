import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./UI/Modal/Modal";

class App extends Component {
  state = {purchasable: false, purchasing: false,};


  render() {
    return (
      <div className="App">
          <Modal>
            <p>This is modal content</p>
          </Modal>

      </div>
    );
  }
}

export default App;
