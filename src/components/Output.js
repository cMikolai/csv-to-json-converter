import React from 'react';

class Output extends React.Component {

  render() {
    return (
      <div className="App-output">
        {this.props.result}
        <button onClick={this.props.handleFormatJson}>
          Format
        </button>
      </div>
    );
  }
}

export default Output
