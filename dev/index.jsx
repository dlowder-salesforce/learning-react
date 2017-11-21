import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
}

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Iron Man" />
    <HelloWorld greetTarget="Thor" />
  </div>,
  document.querySelector("#container")
);
