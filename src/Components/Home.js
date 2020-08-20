import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display'
import AddItems from './AddItems'


class Home extends Component {
  constructor() {
    super()
    this.state = {
      somename: []
    }
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    axios.get('/api/somename')
      .then(res => {
        this.setState({
          somename: res.data
        })
      }).catch(error => console.log(error))
  }

  create(name, description) {
    axios.post('/api/somename', { name, description }).then(res => {
      this.setState({
        somename: res.data
      })
    }).catch(error => console.log(error))
  }

  update = (id, name, description) => {
    axios.put(`/api/somename/edit/${id}`, { name, description })
      .then(res => {
        this.setState({
          somename: res.data
        })
      }).catch(error => console.log(error))
  }

  delete = (id) => {
    axios.delete(`/api/somename/${id}`)
      .then(res => {
        this.setState({
          somename: res.data
        })
      }).catch(error => console.log(error))
  }

  reset = () => {
    axios.delete(`/api/somename`)
      .then(res => {
        this.setState({
          somename: res.data
        })
      }).catch(error => console.log(error))
  }


  render() {

    return (
      <div className="body">
        <div>
          <img src="http://clipart-library.com/img/1720645.png" alt="somename" />
        </div>
        <section className="add-list">
          <AddItems create={this.create} />
        </section>
        <section className="itemList">
          {this.state.somename.map((somename) => {
            return <Display update={this.update} delete={this.delete} reset={this.reset} somename={somename} />
          })}
        </section>
        <button onClick={this.reset}>Empty Backpack!</button>
      </div>
    )
  };
}


export default Home;