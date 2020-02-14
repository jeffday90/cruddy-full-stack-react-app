import React from 'react';
import UserStreamEntry from './UserStreamEntry.jsx';

const ShowStream = (props) => (
  <div>
    <div>
      {props.users.map((user) => <UserStreamEntry key={user.id} user={user} />)}
    </div>
  </div>
);

export default ShowStream;
