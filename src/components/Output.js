import React from 'react';

class Output extends React.Component {

  render() {
    return (
      <div className="App-output">{this.props.result}</div>
    );
  }
}

export default Output
