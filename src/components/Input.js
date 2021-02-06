import React from 'react';

class Input extends React.Component {


  render() {
    return (
      <div className="App-input">
        <form onSubmit={this.props.handleSubmit}>
          <label for="csv-input">Paste CSV below:</label>
          <textarea
            name="csv-input"
            type="text"
            rows="20"
            cols=""
            value={this.props.value}
            onChange={this.props.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Input
