import React, { Component } from 'react';
import Buttons from './Buttons'

class Display extends Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      name: '',
      description: '',
    }
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleName(e) {
    this.setState({
      description: e.target.value
    })
  }

  handleDescription(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const { somename, update, delete } = this.props
    console.log(somename)
    return (
      <div key={somename.id}>
        {this.state.edit ? (
          <div className="edit-menu">
            <input id="edit-menu-1" placeholder="Edit Item" onChange={(e) => {
              this.handleName(e)
            }} />
            <input id="edit-menu-2" placeholder="Edit Description" onChange={(e) => {
              this.handleDescription(e)
            }} />
            <div>
              <button onClick={() => {
                update(somename.id, this.state.name, this.state.description)
                this.toggleEdit()
              }}>Save</button>
              <button onClick={this.toggleEdit}>Cancel</button>
            </div>
          </div>
        ) : (
            <div>
              <p>{somename.name} x {somename.description}</p>
              <Buttons
                toggleEdit={this.toggleEdit}
                delete={delete}
                somename={somename} />
            </div>
          )}
      </div>
    )
  };
}

export default Display;