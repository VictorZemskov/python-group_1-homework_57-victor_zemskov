import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./UI/Modal/Modal";

class App extends Component {
  state = {purchasable: false, modalShow: true,};



  closed = () => {
    this.setState({modalShow: false});
  };

  render() {
    return (
      <div className="App">
          <Modal
              show={this.state.modalShow}
              closed={this.closed}
              title="Some kinda modal title"
          >
            <p>This is modal content</p>
          </Modal>

      </div>
    );
  }
}

export default App;
