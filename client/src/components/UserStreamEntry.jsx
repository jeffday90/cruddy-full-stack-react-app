/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
import React from 'react';
import Axios from 'axios';
import searchYoutube from '../../../server/api/search';

class UserStreamEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editedFact: '',
      video: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
  }

  componentDidMount() {
    this.searchFactOnYoutube();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name } = this.props.user;
    const { editedFact } = this.state;
    const newUserInfo = { name, editedFact };
    Axios.put('/editFact', newUserInfo)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteMember(e) {
    e.preventDefault();
    const { name } = this.props.user;
    Axios.delete('/removeUser', { data: { name } })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchFactOnYoutube() {
    const { fact } = this.props.user;
    searchYoutube(fact, (data) => console.log(data));
  }


  render() {
    const { name, fact } = this.props.user;
    return (
      <div style={{
        textAlign: 'center', borderStyle: 'solid', margin: '10px', marginLeft: '400px', marginRight: '400px',
      }}
      >
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="editedFact" onChange={this.handleChange} />
          <input type="submit" value="edit your fact" />
        </form>
        <h4>
          {name}
        </h4>
        <div>
          fact:
          {' '}
          {fact}
        </div>
        <button type="delete" onClick={this.deleteMember}>kick them out of the party</button>
      </div>
    );
  }
}

export default UserStreamEntry;
