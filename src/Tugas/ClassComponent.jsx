import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  onCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <div>
        <h1>Count On State</h1>
        <p>Count On Plus : {this.state.count}</p>
        <button onClick={this.onCount}>Count On Me</button>
      </div>
    );
  }
}

export default ClassComponent;
