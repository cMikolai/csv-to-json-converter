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
      value: "name,value,order\ncake,brownies,1\ncake,cookies,2\ncake,small cake,3\ncake,big cake,4\ncake,best brownies ever,5\ndrink,juice,1\ndrink,water,2\ndrink smart,daily,1\ndrink smart,weekly,2\n",
      result: ""
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
            result={this.state.result} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
