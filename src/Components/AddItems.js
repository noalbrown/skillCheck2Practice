import React, { Component } from 'react';

class AddItems extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAdd(e) {
    const { name, description } = this.state
    e.preventDefault()
    this.props.create(name, description)
    // This empties the input squares after submission!
    this.setState({ name: "", description: "" })
  }

  render() {
    const { name, description } = this.state;
    return (
      <form className="addItems" onSubmit={(e) => this.handleAdd(e)}>
        <input
          name="name"
          value={name}
          placeholder="First add an item"
          onChange={this.handleChange} />

        <input
          name="description"
          value={description}
          placeholder="How many? "
          onChange={this.handleChange} />
        <button type="submit">Add Item</button>
      </form>
    )
  };
}

export default AddItems;