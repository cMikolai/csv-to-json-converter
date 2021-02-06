import './App.css';
import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-container">
          <Input
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.value} />
          <Output
            value={this.state.value} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
