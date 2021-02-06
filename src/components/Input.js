import React from 'react';

class Input extends React.Component {


  render() {
    return (
      <div className="App-input">
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Paste CSV:
            <input type="text" value={this.props.value} onChange={this.props.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Input
