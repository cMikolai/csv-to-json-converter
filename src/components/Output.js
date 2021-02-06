import React from 'react';

class Output extends React.Component {

  render() {
    return (
      <div className="App-output">{this.props.value}</div>
    );
  }
}

export default Output
