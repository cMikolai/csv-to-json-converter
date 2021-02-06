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
      value: "name,value,order\ncake,brownies,1\ncake,cookies,2\ncake,small cake,3\ncake,big cake,4\ncake,best brownies ever,5\ndrink,juice,1\ndrink,water,2\ndrink smart,daily,1\ndrink smart,weekly,2",
      result: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormatJson = this.handleFormatJson.bind(this);
    this.formatJSON = this.formatJSON.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // snippet adjusted from here: http://techslides.com/convert-csv-to-json-in-javascript
  csvToJSON(csv) {

    var lines = csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");

    for (var i=1; i < lines.length; i++) {
      var obj = {};
      var currentline=lines[i].split(",");

      for (var j=0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return JSON.stringify(result);
  }

  // format JSON to combine columns with same name
  // Source: https://stackoverflow.com/a/46217315/10194611
  formatJSON(json) {
    var data = json,
        hash = Object.create(null),
        formattedResult = data.reduce(function (r, a) {
            if (!hash[a.name]) {
                hash[a.name] = { name: a.name, data: [] };
                r.push(hash[a.name]);
            }
            // TODO: a.value & a.order are not dynamic enough
            hash[a.name].data.push({ value: a.value, order: a.order });
            return r;
        }, []);

    return JSON.stringify(formattedResult);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.value)

    this.setState({
      result: this.csvToJSON(this.state.value),
    });
  }

  handleFormatJson(event) {
    event.preventDefault();

    this.setState({
      result: this.formatJSON(JSON.parse(this.state.result)),
    });
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
          {/* TODO: format JSON to look prettier */}
          <Output
            handleFormatJson={this.handleFormatJson}
            result={this.state.result} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
