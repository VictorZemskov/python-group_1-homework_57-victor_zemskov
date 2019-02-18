import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./UI/Modal/Modal";
import Alert from "./UI/Alert/Alert";

class App extends Component {
  state = {alertShow: false, modalShow: true,};

  closed = () => {
    this.setState({modalShow: false});
  };

  showAlert = () => {
    this.setState({alertShow: true});
  };

  someHandler = () => {
    this.setState({alertShow: false});
  };

  render() {
    return (
      <div className="App">
          <Modal
              show={this.state.modalShow}
              closed={this.closed}
              showAlert={this.showAlert}
              title="Some kinda modal title"
          >
            <p>This is modal content</p>
          </Modal>
          <Alert show={this.state.alertShow}
                 dismiss={this.someHandler}
                 type="Success"
          >This is a warning type alert </Alert>
          <Alert show={this.state.alertShow}
                 // dismiss={this.someHandler}
                 type="Danger"
          >This is a success type alert </Alert>
      </div>
    );
  }
}

export default App;
