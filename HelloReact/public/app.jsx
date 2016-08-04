var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {};
    name = this.refs.name.value;
    message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" placeholder="Enter name" /><br/>
          <textarea ref="message" placeholder="Enter message" /><br/>
          <button>Process</button><br/>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default message from the component'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData}  />
      </div>
    );
  }
});

var firstName = 'Andrew';
var message = 'Custom message with component'

ReactDOM.render(
  <Greeter name={firstName}
    message={message} />,
  document.getElementById('app')
);
