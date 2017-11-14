import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.props.onSubmit;
  }

  handleClick(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <label>Title
          <input type="text"/>
        </label>
        <label>Body
          <input type="text"/>
        </label>
        <button onClick={this.submitForm}>Add Todo!</button>
      </div>
    );
  }
}
// <input type="submit" value="submit" />


export default TodoForm;
