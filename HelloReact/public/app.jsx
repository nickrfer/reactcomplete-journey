var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Andrew';
var message = 'Custom message with component'

ReactDOM.render(
  <Greeter name={firstName}
    message={message} />,
  document.getElementById('app')
);
