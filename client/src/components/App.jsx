import React, { Component } from 'react';
import Axios from 'axios';
import UserStream from './UserStream.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fact: '',
      users: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.grabUsers();
  }

  grabUsers() {
    Axios.get('/users')
      .then((result) => {
        this.setState({
          users: result.data,
        }, () => console.log(this.state));
      })
      .catch((err) => {
        console.log(err);
      });
  }


  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, fact } = this.state;
    const userInfo = { name, fact };
    Axios.post('/user', userInfo)
      .then((result) => {
        this.setState({
          name: '',
          fact: '',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Hello welcome to this basic cruddy app!!!</h1>
        <UserStream users={users} />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Your little fact:
            <input type="text" name="fact" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
